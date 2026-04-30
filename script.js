document.addEventListener("DOMContentLoaded", function() {
    // 1. HEADER CONTENT
    const headerHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo-area">
                <img src=".image/LOGO.jpeg" alt="School Logo" class="school-logo">
                <div class="logo-text">
                    <span class="school-name">GURU DRONACHARYA VIDYA MANDIR</span>
                    
                </div>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="academics.html">Academics</a></li>
                <li><a href="admission.html">Admission</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="facilities.html">Facilities</a></li>
                <li><a href="mandatory.html">Mandatory Disclosure</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>
    `;

    // 2. FOOTER CONTENT
    const footerHTML = `
    <footer class="main-footer">
        <div class="footer-grid">
            <div class="footer-col">
                <img src=".image/LOGO.jpeg" alt="Logo" class="footer-logo">
                                    <span class="school-name">GURU DRONACHARYA VIDYA MANDIR</span>

                <p>Empowering students with world-class education and moral values. A tradition of excellence.</p>
            </div>

            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="academics.html">Academics</a></li>
                    <li><a href="admission.html">Admissions</a></li>
                     <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="mandatory.html">Mandatory Disclosure</a></li>
                    <li><a href="facilities.html">Infrastructure</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Contact Us</h4>
                <div class="contact-item">
                    <strong>Address:</strong> Beremkela,Raipur,Chattisgarh
                </div>
                <div class="contact-item">
                    <strong>Phone:</strong> +91 8878048888
                </div>
                <div class="contact-item">
                    <strong>Email:</strong> modelgd25@gmail.com
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Guru Dronacharya Vidya Mandir.All Rights Reserved.</p>
        </div>
    </footer>
    `;

    // 3. INJECT INTO PLACEHOLDERS
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
