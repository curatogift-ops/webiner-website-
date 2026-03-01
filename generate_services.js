const fs = require('fs');

const template = fs.readFileSync('index.html', 'utf8');

// The template is everything before <section class="hero" id="home">, plus header/footer etc.
const beforeContent = template.split('<!-- HERO -->')[0].replace('class="nav-link active"', 'class="nav-link"');
const afterContent = '\n    <!-- FOOTER -->' + template.split('<!-- FOOTER -->')[1];

const pages = [
    {
        filename: 'consultation-services.html',
        title: 'Consultation Services',
        content: `
    <section class="section-services-list" style="padding: 120px 0 80px; background: #fff; min-height: 60vh;">
        <div class="container">
            <h1 style="font-size: 2.5rem; color: #0F1929; margin-bottom: 30px; text-align: center;"><i class="fas fa-balance-scale" style="color: #2563EB;"></i> Legal Consultation Services</h1>
            <p style="text-align: center; color: #475569; max-width: 800px; margin: 0 auto 50px; font-size: 1.1rem;">Expert legal consultation spanning civil, corporate, family, and cyber matters to protect your interests.</p>
            
            <div class="services-grid-3">
                <div class="service-box" style="background: #F8FAFC; padding: 30px; border-radius: 12px; border: 1px solid #E2E8F0;">
                    <h3 style="margin-bottom: 15px; color: #1E293B;"><i class="fas fa-gavel text-blue"></i> Civil Matters</h3>
                    <ul style="color: #475569; list-style: none; padding: 0;">
                        <li>• Injunction Cases</li>
                        <li>• Recovery of Money</li>
                        <li>• Specific Performance of Contract</li>
                        <li>• Breach of Contract</li>
                        <li>• Tenant–Landlord Disputes</li>
                    </ul>
                </div>
                <div class="service-box" style="background: #F8FAFC; padding: 30px; border-radius: 12px; border: 1px solid #E2E8F0;">
                    <h3 style="margin-bottom: 15px; color: #1E293B;"><i class="fas fa-home text-blue"></i> Family & Marriage</h3>
                    <ul style="color: #475569; list-style: none; padding: 0;">
                        <li>• Domestic Violence Matters</li>
                        <li>• Mutual Divorce</li>
                        <li>• Alimony Disputes</li>
                        <li>• Hindu Marriage Act Matters</li>
                        <li>• Restitution of Conjugal Rights</li>
                    </ul>
                </div>
                <div class="service-box" style="background: #F8FAFC; padding: 30px; border-radius: 12px; border: 1px solid #E2E8F0;">
                    <h3 style="margin-bottom: 15px; color: #1E293B;"><i class="fas fa-briefcase text-blue"></i> Corporate & Employment</h3>
                    <ul style="color: #475569; list-style: none; padding: 0;">
                        <li>• Employment Contract Disputes</li>
                        <li>• Salary Recovery</li>
                        <li>• Full & Final (F&F) Settlement</li>
                        <li>• Workplace Injury Claims</li>
                        <li>• Discrimination Cases</li>
                    </ul>
                </div>
                <div class="service-box" style="background: #F8FAFC; padding: 30px; border-radius: 12px; border: 1px solid #E2E8F0;">
                    <h3 style="margin-bottom: 15px; color: #1E293B;"><i class="fas fa-hand-holding-usd text-blue"></i> Financial Disputes</h3>
                    <ul style="color: #475569; list-style: none; padding: 0;">
                        <li>• Cheque Bounce Cases</li>
                        <li>• Loan Disputes & Debt Recovery</li>
                        <li>• SARFAESI & Mortgage Matters</li>
                        <li>• Bank/Credit Card Disputes</li>
                    </ul>
                </div>
                <div class="service-box" style="background: #F8FAFC; padding: 30px; border-radius: 12px; border: 1px solid #E2E8F0;">
                    <h3 style="margin-bottom: 15px; color: #1E293B;"><i class="fas fa-shield-alt text-blue"></i> General & Cyber</h3>
                    <ul style="color: #475569; list-style: none; padding: 0;">
                        <li>• Cyber Crime Cases & IT Act</li>
                        <li>• Online Fraud & Cyber Stalking</li>
                        <li>• Social Media Defamation</li>
                        <li>• Faulty Product Complaints</li>
                        <li>• Medical Negligence</li>
                    </ul>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 60px;">
                <a href="services.html#inquiryForm" class="btn-blue-cta">Book an Appointment Today</a>
            </div>
        </div>
    </section>
`
    },
    {
        filename: 'documentation-services.html',
        title: 'Documentation Services',
        content: `
    <section class="section-services-list" style="padding: 120px 0 80px; background: #fff; min-height: 60vh;">
        <div class="container">
            <h1 style="font-size: 2.5rem; color: #0F1929; margin-bottom: 30px; text-align: center;"><i class="fas fa-file-signature" style="color: #10B981;"></i> Documentation Services</h1>
            <p style="text-align: center; color: #475569; max-width: 800px; margin: 0 auto 50px; font-size: 1.1rem;">Professional drafting of legal agreements, contracts, and business documents ensuring your complete legal protection.</p>
            
            <div class="services-grid-2">
                <div class="service-box" style="background: #F0FDF4; padding: 40px; border-radius: 16px; border: 1px solid #D1FAE5;">
                    <h3 style="margin-bottom: 20px; font-size: 1.4rem; color: #065F46;">Real Estate & Property</h3>
                    <ul style="color: #047857; font-size: 1.05rem; display: flex; flex-direction: column; gap: 12px;">
                        <li><i class="fas fa-check-circle" style="color: #10B981; margin-right: 10px;"></i> Sale Deed Drafting</li>
                        <li><i class="fas fa-check-circle" style="color: #10B981; margin-right: 10px;"></i> General Power of Attorney (GPA)</li>
                        <li><i class="fas fa-check-circle" style="color: #10B981; margin-right: 10px;"></i> Rent Agreement</li>
                    </ul>
                </div>
                <div class="service-box" style="background: #EFF6FF; padding: 40px; border-radius: 16px; border: 1px solid #DBEAFE;">
                    <h3 style="margin-bottom: 20px; font-size: 1.4rem; color: #1E3A8A;">Business & Corporate</h3>
                    <ul style="color: #1D4ED8; font-size: 1.05rem; display: flex; flex-direction: column; gap: 12px;">
                        <li><i class="fas fa-check-circle" style="color: #3B82F6; margin-right: 10px;"></i> Shareholder Agreement</li>
                        <li><i class="fas fa-check-circle" style="color: #3B82F6; margin-right: 10px;"></i> Memorandum of Understanding (MOU)</li>
                        <li><i class="fas fa-check-circle" style="color: #3B82F6; margin-right: 10px;"></i> Standard Operating Procedures (SOPs)</li>
                        <li><i class="fas fa-check-circle" style="color: #3B82F6; margin-right: 10px;"></i> Vendor Contracts</li>
                        <li><i class="fas fa-check-circle" style="color: #3B82F6; margin-right: 10px;"></i> Joint Venture Agreement</li>
                        <li><i class="fas fa-check-circle" style="color: #3B82F6; margin-right: 10px;"></i> Franchise Agreement</li>
                    </ul>
                </div>
                <div class="service-box" style="background: #FFFBEB; padding: 40px; border-radius: 16px; border: 1px solid #FEF3C7; grid-column: 1 / -1;">
                    <h3 style="margin-bottom: 20px; font-size: 1.4rem; color: #92400E;">Digital & Technical Drafting</h3>
                    <ul style="color: #B45309; font-size: 1.05rem; display: flex; flex-direction: column; gap: 12px;">
                        <li><i class="fas fa-check-circle" style="color: #F59E0B; margin-right: 10px;"></i> Terms & Conditions</li>
                        <li><i class="fas fa-check-circle" style="color: #F59E0B; margin-right: 10px;"></i> Privacy Policy</li>
                    </ul>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px;">
                <a href="services.html#inquiryForm" class="btn-blue-cta">Draft Your Documents</a>
            </div>
        </div>
    </section>
`
    },
    {
        filename: 'professional-resume.html',
        title: 'Professional Resume Services',
        content: `
    <section class="section-services-list" style="padding: 120px 0 80px; background: #fff; min-height: 60vh;">
        <div class="container">
            <h1 style="font-size: 2.5rem; color: #0F1929; margin-bottom: 30px; text-align: center;"><i class="fas fa-file-alt" style="color: #2563EB;"></i> Professional Resume & Cover Letter Services</h1>
            <p style="text-align: center; color: #475569; max-width: 800px; margin: 0 auto 50px; font-size: 1.1rem;">Boost your job search with professionally crafted resumes and cover letters designed to pass Applicant Tracking Systems (ATS) and impress recruiters.</p>
            
            <div class="services-grid-4">
                <div style="padding: 40px 30px; border: 1px solid #E2E8F0; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                    <div style="font-size: 2rem; color: #2563EB; margin-bottom: 20px;"><i class="fas fa-laptop-code"></i></div>
                    <h3 style="color: #0F1929; margin-bottom: 15px;">ATS Professional Resume</h3>
                    <p style="font-size: 0.95rem; color: #64748B; margin-bottom: 20px;">Role-based keyword optimization and a modern layout to increase shortcut chances.</p>
                    <ul style="font-size: 0.95rem; margin-bottom: 30px; line-height: 1.8; padding-left: 0;">
                        <li><i class="fas fa-rupee-sign" style="color:#64748B;"></i> <strong>299</strong> – 0 to 2 Yrs Exp</li>
                        <li><i class="fas fa-rupee-sign" style="color:#64748B;"></i> <strong>599</strong> – 2 to 5 Yrs Exp</li>
                        <li><i class="fas fa-rupee-sign" style="color:#64748B;"></i> <strong>899</strong> – 6 to 12 Yrs Exp</li>
                        <li><i class="fas fa-rupee-sign" style="color:#64748B;"></i> <strong>1099</strong> – 12 to 15 Yrs Exp</li>
                        <li><i class="fas fa-rupee-sign" style="color:#64748B;"></i> <strong>1599</strong> – 15 to 30 Yrs Exp</li>
                    </ul>
                    <a href="services.html#inquiryForm" class="btn-blue-cta" style="width: 100%; text-align: center; padding: 12px;">Get Resume</a>
                </div>
                
                <div style="padding: 40px 30px; border: 1px solid #E2E8F0; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                    <div style="font-size: 2rem; color: #10B981; margin-bottom: 20px;"><i class="fas fa-id-card"></i></div>
                    <h3 style="color: #0F1929; margin-bottom: 15px;">Non-ATS Professional Resume</h3>
                    <p style="font-size: 0.95rem; color: #64748B; margin-bottom: 20px;">Modern, highly visual layout showcasing your skills perfectly for direct email submissions.</p>
                    <ul style="font-size: 0.95rem; margin-bottom: 30px; line-height: 1.8; padding-left: 0;">
                        <li><i class="fas fa-rupee-sign" style="color:#64748B;"></i> <strong>299</strong> – 0 to 2 Yrs Exp</li>
                        <li><i class="fas fa-rupee-sign" style="color:#64748B;"></i> <strong>599</strong> – 2 to 5 Yrs Exp</li>
                        <li><i class="fas fa-rupee-sign" style="color:#64748B;"></i> <strong>899</strong> – 6 to 12 Yrs Exp</li>
                        <li><i class="fas fa-rupee-sign" style="color:#64748B;"></i> <strong>1099</strong> – 12 to 15 Yrs Exp</li>
                        <li><i class="fas fa-rupee-sign" style="color:#64748B;"></i> <strong>1599</strong> – 15 to 30 Yrs Exp</li>
                    </ul>
                    <a href="services.html#inquiryForm" class="btn-blue-cta" style="width: 100%; text-align: center; padding: 12px; background: #059669;">Get Resume</a>
                </div>
                
                <div style="padding: 40px 30px; border: 1px solid #E2E8F0; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                    <div style="font-size: 2rem; color: #F59E0B; margin-bottom: 20px;"><i class="fas fa-globe-europe"></i></div>
                    <h3 style="color: #0F1929; margin-bottom: 15px;">Gulf/Europass Resume</h3>
                    <p style="font-size: 0.95rem; color: #64748B; margin-bottom: 20px;">Official CV format for EU and Gulf jobs. Ideal for visas and higher education.</p>
                    <div style="font-size: 2rem; color: #0F1929; font-weight: 800; margin-bottom: 20px;">₹1099</div>
                    <ul style="font-size: 0.95rem; margin-bottom: 20px; line-height: 1.8; color: #475569;">
                        <li><i class="fas fa-check text-green"></i> EU-standard layout</li>
                        <li><i class="fas fa-check text-green"></i> Clean structured presentation</li>
                        <li><i class="fas fa-check text-green"></i> Editable Word + PDF</li>
                    </ul>
                    
                    <div style="margin-bottom: 25px;">
                        <span style="font-size: 0.9rem; font-weight: 600; color: #0F1929; display: block; margin-bottom: 10px;">View Europass Samples:</span>
                        <div style="display: flex; gap: 10px;">
                            <a href="Ghanshyam_Mishra.pdf" target="_blank" style="font-size: 0.85rem; color: #2563EB; border: 1px solid #2563EB; padding: 6px 10px; border-radius: 6px; text-decoration: none; flex: 1; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.3s;"><i class="fas fa-file-pdf"></i> Sample 1</a>
                            <a href="Sample%20CV.pdf" target="_blank" style="font-size: 0.85rem; color: #2563EB; border: 1px solid #2563EB; padding: 6px 10px; border-radius: 6px; text-decoration: none; flex: 1; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.3s;"><i class="fas fa-file-pdf"></i> Sample 2</a>
                        </div>
                    </div>

                    <a href="services.html#inquiryForm" class="btn-blue-cta" style="width: 100%; text-align: center; padding: 12px;">Get Resume</a>
                </div>
                
                <div style="padding: 40px 30px; border: 1px solid #E2E8F0; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                    <div style="font-size: 2rem; color: #10B981; margin-bottom: 20px;"><i class="fas fa-envelope-open-text"></i></div>
                    <h3 style="color: #0F1929; margin-bottom: 15px;">Cover Letters</h3>
                    <p style="font-size: 0.95rem; color: #64748B; margin-bottom: 20px;">Professional business format to highlight strengths and align with the job role.</p>
                    
                    <div style="margin-bottom: 20px; padding: 15px; background: #F8FAFC; border-radius: 8px;">
                        <strong style="color: #0F1929;">Indian Cover Letter - ₹399</strong><br>
                        <span style="font-size: 0.85rem; color: #64748B;">HR-friendly language matching roles</span>
                    </div>
                    <div style="margin-bottom: 30px; padding: 15px; background: #F8FAFC; border-radius: 8px;">
                        <strong style="color: #0F1929;">Europass Cover Letter - ₹499</strong><br>
                        <span style="font-size: 0.85rem; color: #64748B;">Formal European tone for EU apps</span>
                    </div>
                    <a href="services.html#inquiryForm" class="btn-blue-cta" style="width: 100%; text-align: center; padding: 12px;">Get Cover Letter</a>
                </div>
            </div>
        </div>
    </section>
`
    },
    {
        filename: 'profile-optimization.html',
        title: 'Profile Optimization Services',
        content: `
    <section class="section-services-list" style="padding: 120px 0 80px; background: #FAFAFA; min-height: 60vh;">
        <div class="container">
            <h1 style="font-size: 2.5rem; color: #0F1929; margin-bottom: 30px; text-align: center;"><i class="fas fa-user-check" style="color: #3B82F6;"></i> Profile Optimization Services</h1>
            <p style="text-align: center; color: #475569; max-width: 800px; margin: 0 auto 50px; font-size: 1.1rem;">Improve search ranking, strengthen your brand, and increase interview calls directly on the leading job platforms tailored to recruiter search patterns.</p>
            
            <div class="services-grid-4">
                <div style="background: #fff; padding: 30px; border-radius: 16px; border-top: 5px solid #3B82F6; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                    <h3 style="font-size: 1.3rem; margin-bottom: 10px;">Naukri Profile</h3>
                    <div style="color: #2563EB; font-weight: 800; font-size: 1.8rem; margin-bottom: 20px;">₹899</div>
                    <ul style="font-size: 0.95rem; color: #475569; line-height: 1.8; margin-bottom: 30px; list-style: none;">
                        <li><i class="fas fa-check text-green"></i> Keyword-rich headline</li>
                        <li><i class="fas fa-check text-green"></i> Summary rewrite</li>
                        <li><i class="fas fa-check text-green"></i> Skills optimization</li>
                        <li><i class="fas fa-check text-green"></i> Recruiter visibility fixed</li>
                    </ul>
                    <a href="services.html#inquiryForm" class="btn-blue-cta" style="width: 100%; text-align: center; padding: 12px; font-size: 0.9rem;">Optimize Now</a>
                </div>
                
                <div style="background: #fff; padding: 30px; border-radius: 16px; border-top: 5px solid #0077B5; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                    <h3 style="font-size: 1.3rem; margin-bottom: 10px;">LinkedIn Profile</h3>
                    <div style="color: #0077B5; font-weight: 800; font-size: 1.8rem; margin-bottom: 20px;">₹899</div>
                    <ul style="font-size: 0.95rem; color: #475569; line-height: 1.8; margin-bottom: 30px; list-style: none;">
                        <li><i class="fas fa-check text-green"></i> Strong brand positioning</li>
                        <li><i class="fas fa-check text-green"></i> About section rewrite</li>
                        <li><i class="fas fa-check text-green"></i> Profile SEO</li>
                        <li><i class="fas fa-check text-green"></i> Keyword targeting</li>
                    </ul>
                    <a href="services.html#inquiryForm" class="btn-blue-cta" style="width: 100%; text-align: center; padding: 12px; font-size: 0.9rem; background: #0077B5;">Optimize Now</a>
                </div>
                
                <div style="background: #fff; padding: 30px; border-radius: 16px; border-top: 5px solid #F59E0B; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                    <h3 style="font-size: 1.3rem; margin-bottom: 10px;">Naukri Gulf</h3>
                    <div style="color: #F59E0B; font-weight: 800; font-size: 1.8rem; margin-bottom: 20px;">₹899</div>
                    <ul style="font-size: 0.95rem; color: #475569; line-height: 1.8; margin-bottom: 30px; list-style: none;">
                        <li><i class="fas fa-check text-green"></i> GCC-focused keywords</li>
                        <li><i class="fas fa-check text-green"></i> Visibilty in UAE</li>
                        <li><i class="fas fa-check text-green"></i> Experience format</li>
                        <li><i class="fas fa-check text-green"></i> Search settings config</li>
                    </ul>
                    <a href="services.html#inquiryForm" class="btn-blue-cta" style="width: 100%; text-align: center; padding: 12px; font-size: 0.9rem; background: #F59E0B;">Optimize Now</a>
                </div>
                
                <div style="background: #fff; padding: 30px; border-radius: 16px; border-top: 5px solid #2563EB; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                    <h3 style="font-size: 1.3rem; margin-bottom: 10px;">Indeed Profile</h3>
                    <div style="color: #2563EB; font-weight: 800; font-size: 1.8rem; margin-bottom: 20px;">₹899</div>
                    <ul style="font-size: 0.95rem; color: #475569; line-height: 1.8; margin-bottom: 30px; list-style: none;">
                        <li><i class="fas fa-check text-green"></i> Improve job match</li>
                        <li><i class="fas fa-check text-green"></i> Headline optimization</li>
                        <li><i class="fas fa-check text-green"></i> Summary presentation</li>
                        <li><i class="fas fa-check text-green"></i> Skills completeness</li>
                    </ul>
                    <a href="services.html#inquiryForm" class="btn-blue-cta" style="width: 100%; text-align: center; padding: 12px; font-size: 0.9rem; ">Optimize Now</a>
                </div>
            </div>
            
            <div style="margin-top: 60px; padding: 40px; background: #fff; border-radius: 16px; border: 1px solid #E2E8F0; text-align: center;">
                <h3 style="font-size: 1.6rem; margin-bottom: 20px;">⭐ Why Choose Our Optimization Service?</h3>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; color: #475569; font-size: 1.05rem;">
                    <span><i class="fas fa-check-circle text-green"></i> Platform-specfic strategy</span>
                    <span><i class="fas fa-check-circle text-green"></i> Recruiter-focused</span>
                    <span><i class="fas fa-check-circle text-green"></i> 100% manual process</span>
                    <span><i class="fas fa-check-circle text-green"></i> Fast delivery</span>
                </div>
            </div>
        </div>
    </section>
`
    },
    {
        filename: 'data-analyst-skills.html',
        title: 'Data analytics with Gen AI',
        content: `
    <section class="section-services-list" style="padding: 120px 0 80px; background: #fff; min-height: 60vh;">
        <div class="container">
            <h1 style="font-size: 2.8rem; color: #0F1929; margin-bottom: 30px; text-align: center;"><i class="fas fa-chart-line" style="color: #2563EB;"></i> Master Data Analyst Skills with Gen AI</h1>
            <p style="text-align: center; color: #475569; max-width: 900px; margin: 0 auto 50px; font-size: 1.15rem;">Become a job-ready Data Analyst with the power of Generative AI and Microsoft-certified tools. A complete end-to-end program for freshers and career switchers.</p>
            
            <div class="services-grid-2">
                <div style="padding: 40px; background: #F8FAFC; border-radius: 16px; border: 1px solid #E2E8F0;">
                    <h3 style="font-size: 1.8rem; color: #1E293B; margin-bottom: 24px;">🛠️ What You Will Master</h3>
                    <ul style="color: #334155; list-style: none; font-size: 1.1rem; line-height: 2;">
                        <li><i class="fas fa-check-circle text-blue"></i> <strong>Generative AI Fundamentals:</strong> LLMs basics & productivity</li>
                        <li><i class="fas fa-check-circle text-blue"></i> <strong>Prompt Engineering:</strong> Business prompts & automation</li>
                        <li><i class="fas fa-check-circle text-blue"></i> <strong>Python for Data Analysis:</strong> NumPy, Pandas, Data Cleaning</li>
                        <li><i class="fas fa-check-circle text-blue"></i> <strong>Data Cleaning & Transformation:</strong> Preparing messy data</li>
                        <li><i class="fas fa-check-circle text-blue"></i> <strong>Data Scraping Techniques:</strong> Web data extraction</li>
                        <li><i class="fas fa-check-circle text-blue"></i> <strong>Dashboard & Reporting:</strong> Power BI Data storytelling</li>
                    </ul>
                </div>
                
                <div style="padding: 40px; background: #F8FAFC; border-radius: 16px; border: 1px solid #E2E8F0;">
                    <h3 style="font-size: 1.8rem; color: #1E293B; margin-bottom: 24px;">🏆 Microsoft Certified Training</h3>
                    <p style="font-size: 1.05rem; color: #475569; margin-bottom: 20px;">This program covers essential tools and provides an experience matching comprehensive certifications.</p>
                    <div class="services-grid-2" style="margin-bottom: 0;">
                        <ul style="color: #334155; list-style: none; font-size: 1.05rem; line-height: 2;">
                            <li><i class="fas fa-code"></i> Python & SQL</li>
                            <li><i class="fas fa-chart-bar"></i> Power BI</li>
                        </ul>
                        <ul style="color: #334155; list-style: none; font-size: 1.05rem; line-height: 2;">
                            <li><i class="fas fa-file-excel"></i> Advanced Excel</li>
                            <li><i class="fas fa-robot"></i> Generative AI</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px; padding: 50px; background: #EFF6FF; border-radius: 16px;">
                <h2 style="font-size: 2.2rem; margin-bottom: 20px; color: #1D4ED8;">Enroll Now & Start Your Data Career</h2>
                <p style="font-size: 1.1rem; color: #3B82F6; margin-bottom: 30px;">Includes hands-on projects, practice datasets, and mentor support.</p>
                <a href="services.html#inquiryForm" class="btn-blue-cta" style="padding: 16px 40px; font-size: 1.1rem;">Secure Your Seat</a>
            </div>
        </div>
    </section>
`
    },
    {
        filename: 'career-consultancy.html',
        title: 'Career Consultancy Services',
        content: `
    <section class="section-services-list" style="padding: 120px 0 80px; background: #fff; min-height: 60vh;">
        <div class="container">
            <h1 style="font-size: 2.8rem; color: #0F1929; margin-bottom: 30px; text-align: center;"><i class="fas fa-graduation-cap" style="color: #2563EB;"></i> Career Consultancy & Admission Assistance</h1>
            <p style="text-align: center; color: #475569; max-width: 900px; margin: 0 auto 50px; font-size: 1.15rem;">Get expert Pan India guidance for admission into top colleges across India for MBA, PGDM, BCA, MCA, B.Tech and more.</p>
            
            <div class="services-grid-3">
                <div style="padding: 40px 30px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; text-align: center;">
                    <i class="fas fa-map-marker-alt" style="font-size: 3rem; color: #38BDF8; margin-bottom: 25px;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Pan India Reach</h3>
                    <p style="font-size: 1rem; color: #64748B;">Providing services across Delhi NCR, Pune, Mumbai, Surat, Ahmedabad, Jaipur, Hyderabad, Chennai, Bangalore.</p>
                </div>
                
                <div style="padding: 40px 30px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; text-align: center;">
                    <i class="fas fa-book-open" style="font-size: 3rem; color: #38BDF8; margin-bottom: 25px;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Top Courses</h3>
                    <p style="font-size: 1rem; color: #64748B;">Management Courses (MBA, PGDM), Computer & IT Courses (BCA, MCA), Engineering & Technical Courses (B.Tech, Diploma).</p>
                </div>
                
                <div style="padding: 40px 30px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; text-align: center;">
                    <i class="fas fa-user-graduate" style="font-size: 3rem; color: #38BDF8; margin-bottom: 25px;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Full End-to-End</h3>
                    <p style="font-size: 1rem; color: #64748B;">College selection, eligibility checks, document support, direct admission guidance, and smooth post-admission transition.</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 60px;">
                <a href="services.html#inquiryForm" class="btn-blue-cta" style="padding: 16px 40px; font-size: 1.1rem;">Talk to a Counselor</a>
            </div>
        </div>
    </section>
`
    },
    {
        filename: 'digital-creative-services.html',
        title: 'Digital & Creative Services',
        content: `
    <section class="section-services-list" style="padding: 120px 0 80px; background: #0F172A; min-height: 60vh; color: #fff;">
        <div class="container">
            <h1 style="font-size: 2.8rem; color: #fff; margin-bottom: 30px; text-align: center;">Digital, Creative & Web Services</h1>
            <p style="text-align: center; color: #cbd5e1; max-width: 900px; margin: 0 auto 60px; font-size: 1.15rem;">We provide strategic content creation, brand marketing, professional graphic creativity, and clean website development.</p>
            
            <div class="services-grid-3">
                <div style="padding: 40px; background: #1E293B; border-radius: 16px; border: 1px solid #334155;">
                    <div style="width: 60px; height: 60px; background: rgba(56, 189, 248, 0.1); border-radius: 50px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; font-size: 1.5rem; color: #38BDF8;"><i class="fas fa-pen-nib"></i></div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 20px; color: #fff;">Content & Marketing</h3>
                    <ul style="color: #94A3B8; font-size: 1.05rem; line-height: 1.8; list-style: none;">
                        <li>• Tech & AI Content Creation</li>
                        <li>• Short-form Video Scripts (Reels/Shorts)</li>
                        <li>• Brand Positioning & Marketing</li>
                        <li>• Organic Growth Strategy</li>
                        <li>• Sponsored & Collaboration Content</li>
                    </ul>
                </div>
                
                <div style="padding: 40px; background: #1E293B; border-radius: 16px; border: 1px solid #334155;">
                    <div style="width: 60px; height: 60px; background: rgba(167, 139, 250, 0.1); border-radius: 50px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; font-size: 1.5rem; color: #A78BFA;"><i class="fas fa-palette"></i></div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 20px; color: #fff;">Graphic Design</h3>
                    <ul style="color: #94A3B8; font-size: 1.05rem; line-height: 1.8; list-style: none;">
                        <li>• Brand Logo Development</li>
                        <li>• Complete Brand Identity</li>
                        <li>• Posters & Marketing Creatives</li>
                        <li>• Offer & Discount Banners</li>
                        <li>• Social Media Carousels</li>
                    </ul>
                </div>
                
                <div style="padding: 40px; background: #1E293B; border-radius: 16px; border: 1px solid #334155;">
                    <div style="width: 60px; height: 60px; background: rgba(52, 211, 153, 0.1); border-radius: 50px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; font-size: 1.5rem; color: #34D399;"><i class="fas fa-laptop-code"></i></div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 20px; color: #fff;">Website Development</h3>
                    <ul style="color: #94A3B8; font-size: 1.05rem; line-height: 1.8; list-style: none;">
                        <li>• Business Profile Websites</li>
                        <li>• Sales & Course Landing Pages</li>
                        <li>• SEO-friendly Structuring</li>
                        <li>• Mobile Responsive Focus</li>
                        <li>• Inquiry & WhatsApp Integration</li>
                    </ul>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 60px;">
                <a href="services.html#inquiryForm" class="btn-blue-cta" style="padding: 16px 40px; font-size: 1.1rem; background: #38BDF8; color: #0F172A;">Let's Build It</a>
            </div>
        </div>
    </section>
`
    },
    {
        filename: 'live-ats-masterclass.html',
        title: 'Live ATS Resume Masterclass',
        content: `
    <section class="section-services-list" style="padding: 120px 0 80px; background: #fff; min-height: 60vh;">
        <div class="container">
            <div style="text-align: center; max-width: 900px; margin: 0 auto 50px;">
                <div style="display: inline-block; background: #FEF2F2; color: #EF4444; padding: 6px 16px; border-radius: 50px; font-weight: 700; margin-bottom: 20px;">LIVE WORKSHOP</div>
                <h1 style="font-size: 2.8rem; color: #0F1929; margin-bottom: 20px;">Live ATS Resume Masterclass</h1>
                <p style="color: #475569; font-size: 1.2rem; line-height: 1.7;">Build a 90+ ATS Score & Crack Top MNC Interviews. A high-impact Live Masterclass designed for students, freshers, and working professionals who want to get shortlisted.</p>
            </div>
            
            <div class="services-grid-2">
                <div>
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Masterclass Workshop" style="width: 100%; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center;">
                    <h3 style="font-size: 1.8rem; margin-bottom: 24px; color: #1E293B;">What This Workshop Covers</h3>
                    <ul style="color: #475569; font-size: 1.1rem; line-height: 2; list-style: none;">
                        <li><i class="fas fa-check text-green" style="margin-right: 12px; font-size: 1.2rem;"></i> Build a 90+ ATS Resume in 60 Seconds</li>
                        <li><i class="fas fa-check text-green" style="margin-right: 12px; font-size: 1.2rem;"></i> Resume Optimization for MNC JDs</li>
                        <li><i class="fas fa-check text-green" style="margin-right: 12px; font-size: 1.2rem;"></i> Live Resume Building Demo formatting</li>
                        <li><i class="fas fa-check text-green" style="margin-right: 12px; font-size: 1.2rem;"></i> Referral Strategy on LinkedIn for MNCs</li>
                        <li><i class="fas fa-check text-green" style="margin-right: 12px; font-size: 1.2rem;"></i> Avoid Fresher Interview Mistakes</li>
                    </ul>
                    <div style="margin-top: 40px;">
                        <span style="font-size: 2.5rem; font-weight: 800; color: #0F1929;">₹199</span> <span style="text-decoration: line-through; color: #94A3B8; font-size: 1.2rem;">₹1999</span>
                        <br><br>
                        <a href="index.html#pricing" class="btn-blue-cta" style="background: #14B8A6; font-size: 1.1rem; padding: 16px 40px;">Register & Confirm Seat</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
`
    }
];

pages.forEach(page => {
    // Generate the full HTML for each page
    let finalContent = beforeContent.replace('<title>Mishra Growth Solution - Build 90+ ATS Score Resume</title>', "<title>" + page.title + " | Mishra Growth Solution</title>");
    finalContent += page.content + afterContent;
    
    fs.writeFileSync(page.filename, finalContent, 'utf8');
    console.log('Created:', page.filename);
});

console.log('Done script.');
