import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3>HECTA <span className={styles.accent}>ENTERPRISES</span></h3>
                        <p className={styles.tagline}>Sudha Engineering Works</p>
                        <p className={styles.description}>
                            Leading manufacturer of precision sheet metal stamping and fabrication
                            services for automotive OEMs since 1993.
                        </p>
                        <div className={styles.certifications}>
                            <span className={styles.badge}>ISO Certified</span>
                            <span className={styles.badge}>PPAP Compliant</span>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#capabilities">Capabilities</a></li>
                            <li><a href="#industries">Industries</a></li>
                            <li><a href="#process">Process</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Services</h4>
                        <ul>
                            <li>Progressive Die Stamping</li>
                            <li>Sheet Metal Fabrication</li>
                            <li>Laser Cutting</li>
                            <li>CNC Machining</li>
                            <li>Welding & Assembly</li>
                            <li>Powder Coating</li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Contact Us</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <span className={styles.icon}>📞</span>
                                <a href="tel:+918074818235">+91 8074818235</a>
                            </li>
                            <li>
                                <span className={styles.icon}>✉️</span>
                                <a href="mailto:hectaenterprises@gmail.com">hectaenterprises@gmail.com</a>
                            </li>
                            <li>
                                <span className={styles.icon}>📍</span>
                                <span>Gagillapur, Hyderabad, Telangana</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomContent}>
                        <p>&copy; {currentYear} Hecta Enterprises. All rights reserved.</p>
                        <div className={styles.keywords}>
                            <span>Sheet Metal Stamping</span>
                            <span>•</span>
                            <span>Automotive Manufacturing</span>
                            <span>•</span>
                            <span>Progressive Die</span>
                            <span>•</span>
                            <span>Laser Cutting</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
