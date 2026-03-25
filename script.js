document.addEventListener('DOMContentLoaded', () => {

    // Mobile Nav Toggle
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            nav.classList.toggle('open');
        });
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // Handle mobile dropdown toggle without navigating
                if (window.innerWidth <= 768 && link.nextElementSibling && link.nextElementSibling.classList.contains('dropdown-menu')) {
                    e.preventDefault();
                    link.parentElement.classList.toggle('mobile-active');
                    return; 
                }
                hamburger.classList.remove('open');
                nav.classList.remove('open');
            });
        });
        
        // Close nav when an inner dropdown item is clicked
        nav.querySelectorAll('.dropdown-item').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                nav.classList.remove('open');
            });
        });
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-q').addEventListener('click', () => {
            const wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!wasActive) item.classList.add('active');
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
            }
        });
    });

    // Active Nav on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        const y = window.pageYOffset;
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            const id = sec.getAttribute('id');
            if (y >= top && y < top + sec.offsetHeight) {
                navLinks.forEach(l => {
                    l.classList.remove('active');
                    if (l.getAttribute('href') === '#' + id) l.classList.add('active');
                });
            }
        });
    });

    // Scroll Reveal - Only for explicit fade-up elements if any
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // REMOVED opacity=0 logic for cards to ensure they are always visible.
    // document.querySelectorAll('.l-card, .story-card, .why-item, .instructor-box, .pricing-box').forEach(el => { ... });

    // ATS Counter Animation
    const scoreEl = document.getElementById('atsNum');
    if (scoreEl) {
        let counted = false;
        new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) {
                    counted = true;
                    let start = 0;
                    const end = 94;
                    const duration = 1200;
                    let startTime = null;
                    function step(ts) {
                        if (!startTime) startTime = ts;
                        const p = Math.min((ts - startTime) / duration, 1);
                        scoreEl.textContent = Math.floor(p * (end - start) + start);
                        if (p < 1) requestAnimationFrame(step);
                    }
                    requestAnimationFrame(step);
                }
            });
        }, { threshold: 0.5 }).observe(scoreEl);
    }

    // Promo Timer (15 Minutes Countdown)
    const promoTimerEl = document.getElementById('promoTimer');
    if (promoTimerEl) {
        let timeInSeconds = 15 * 60; // 15 minutes
        
        const updateTimer = () => {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;
            
            promoTimerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeInSeconds > 0) {
                timeInSeconds--;
            } else {
                // Reset timer or keep at 00:00
                timeInSeconds = 15 * 60; // Loop for demo purposes
            }
        };
        
        setInterval(updateTimer, 1000);
        updateTimer();
    }

    // Lead Popup Logic
    const leadPopup = document.getElementById('leadPopup');
    const closeLeadPopup = document.getElementById('closeLeadPopup');
    const openPopupBtns = document.querySelectorAll('.open-popup-btn');

    if (leadPopup && closeLeadPopup) {
        // Show after 2 minutes
        setTimeout(() => {
            leadPopup.classList.add('show');
        }, 120000); // 2 minutes

        // Open on button click
        openPopupBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                leadPopup.classList.add('show');
            });
        });

        // Close on X click
        closeLeadPopup.addEventListener('click', () => {
            leadPopup.classList.remove('show');
        });

        // Close on clicking outside the box
        leadPopup.addEventListener('click', (e) => {
            if (e.target === leadPopup) {
                leadPopup.classList.remove('show');
            }
        });
    }

    // ============================================
    // UNIFIED AJAX FORM SUBMIT FOR ALL FORMS
    // ============================================
    const forms = document.querySelectorAll('form[action^="https://formsubmit.co"]');
    
    // 1) Dynamically create and inject the custom Success Popup into the DOM once
    const popupHTML = `
        <div id="sucessPopupOverlay" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(15, 25, 41, 0.85); z-index:99999; display:flex; align-items:center; justify-content:center; opacity:0; visibility:hidden; transition:0.3s ease;">
            <div style="background:#fff; padding:40px; border-radius:12px; max-width:400px; width:90%; text-align:center; transform:translateY(20px); transition:0.3s ease; box-shadow:0 20px 40px rgba(0,0,0,0.2);">
                <div style="width:60px; height:60px; background:#10B981; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:30px; margin:0 auto 20px auto;">
                    <i class="fas fa-check"></i>
                </div>
                <h3 id="popupTitle" style="margin-bottom:10px; color:#0F1929; font-size:1.5rem;">Thank You!</h3>
                <p id="popupMessage" style="color:#64748B; margin-bottom:25px; line-height:1.5;">Your message has been sent successfully.</p>
                <div id="popupWhatsAppContainer">
                    <a href="https://chat.whatsapp.com/FswA4ROz5wcLVCDF9uyQER" style="display:inline-block; background:#25D366; color:#fff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:600; margin-bottom:10px; width:100%;"><i class="fab fa-whatsapp"></i> Join WhatsApp Group</a>
                </div>
                <button id="closeSuccessPopup" style="background:#f1f5f9; color:#64748B; border:none; padding:10px 30px; border-radius:6px; font-weight:600; cursor:pointer; width:100%;">Close</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    const successPopup = document.getElementById('sucessPopupOverlay');
    const closeSuccessPopup = document.getElementById('closeSuccessPopup');
    const popupContent = successPopup.querySelector('div');

    const showSuccess = (isPayment = false) => {
        const popupTitle = document.getElementById('popupTitle');
        const popupMessage = document.getElementById('popupMessage');
        const popupWhatsApp = document.getElementById('popupWhatsAppContainer');

        if (isPayment) {
            popupTitle.innerText = "Payment Successful!";
            popupMessage.innerText = "Thank you for registering. You are now being redirected to our WhatsApp Community.";
            popupWhatsApp.style.display = 'block';
        } else {
            popupTitle.innerText = "Submission Successful!";
            popupMessage.innerText = "Thank you for your inquiry. Our team will get back to you shortly.";
            popupWhatsApp.style.display = 'block'; // Keep it for inquiries too as a suggestion
        }

        successPopup.style.opacity = '1';
        successPopup.style.visibility = 'visible';
        popupContent.style.transform = 'translateY(0)';
    };
    const hideSuccess = () => {
        successPopup.style.opacity = '0';
        successPopup.style.visibility = 'hidden';
        popupContent.style.transform = 'translateY(20px)';
    };
    closeSuccessPopup.addEventListener('click', hideSuccess);

    // 2) Attach AJAX logic to all forms
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the default form redirection
            
            const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('button');
            const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
            
            // Collect form data
            const formData = new FormData(form);
            const formObj = {};
            formData.forEach((value, key) => { formObj[key] = value; });

            // Check if this is a payment form (Masterclass registration)
            const isPaymentForm = form.id === 'registerForm' || form.id === 'popupRegisterForm';

            const processFormSubmission = () => {
                if (submitBtn) {
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                    if(submitBtn.style){
                        submitBtn.style.opacity = '0.7';
                    }
                    submitBtn.disabled = true;
                }

                formData.append('_captcha', 'false'); // Disable FormSubmit's HTML CAPTCHA
                
                // For FormSubmit AJAX to work correctly and return JSON (not HTML), we MUST route through their /ajax/ endpoint.
                let actionUrl = form.action;
                if (!actionUrl.includes('/ajax/')) {
                    actionUrl = actionUrl.replace('formsubmit.co/', 'formsubmit.co/ajax/');
                }
                
                fetch(actionUrl, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        return response.json().catch(() => ({})); 
                    }
                    return Promise.reject(response);
                })
                .then(data => {
                    form.reset();
                    if (submitBtn) {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.opacity = '1';
                    }
                    
                    if (leadPopup && leadPopup.classList.contains('show')) {
                        leadPopup.classList.remove('show');
                    }
                    
                    // Show success popup with WhatsApp link or redirect
                    showSuccess(isPaymentForm);
                    
                    // Auto redirect to WhatsApp after a short delay if it was a payment
                    if (isPaymentForm) {
                        setTimeout(() => {
                            window.location.href = "https://chat.whatsapp.com/FswA4ROz5wcLVCDF9uyQER";
                        }, 2000);
                    }
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                    alert("Something went wrong. Please try again later.");
                    if (submitBtn) {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.opacity = '1';
                    }
                });
            };

            if (isPaymentForm) {
                // Razorpay configuration
                const options = {
                    "key": "rzp_live_SUxGbSVsRtbLiG", // Live Key ID
                    "amount": 19900, // Amount in paise (199 * 100)
                    "currency": "INR",
                    "name": "Mishra Growth Solution",
                    "description": "Live ATS Resume Masterclass",
                    "image": "logo.jpeg",
                    "handler": function (response) {
                        // Payment successful
                        formData.append('Razorpay Payment ID', response.razorpay_payment_id);
                        processFormSubmission();
                    },
                    "prefill": {
                        "name": formObj['Full Name'] || "",
                        "email": formObj['Email ID'] || "",
                        "contact": formObj['WhatsApp Number'] || ""
                    },
                    "theme": {
                        "color": "#14B8A6"
                    },
                    "modal": {
                        "ondismiss": function() {
                            if (submitBtn) {
                                submitBtn.innerHTML = originalText;
                                submitBtn.disabled = false;
                                submitBtn.style.opacity = '1';
                            }
                        }
                    }
                };
                const rzp = new Razorpay(options);
                rzp.open();
            } else {
                // Not a payment form, just process normally
                processFormSubmission();
            }
        });
    });
});
