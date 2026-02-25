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

    // Form Submit
    const form = document.getElementById('registerForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('.btn-pay-now');
            const orig = btn.innerHTML;
            
            // Show success and WhatsApp group link
            btn.innerHTML = '<i class="fas fa-check-circle"></i> Redirecting to WhatsApp...';
            btn.style.background = '#16a34a';
            btn.disabled = true;
            
            setTimeout(() => { 
                // Redirect logic for WhatsApp Community after payment (Demo link here)
                window.location.href = "https://chat.whatsapp.com/your-community-invite-link";
                
                // Reset form button after short delay simulating redirect
                setTimeout(() => {
                    btn.innerHTML = orig; 
                    btn.style.background = ''; 
                    btn.disabled = false; 
                    form.reset(); 
                }, 2000);
            }, 1500);
        });
    }
});
