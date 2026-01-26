'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={styles.hero}>
            <video
                className={styles.backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/Precision_Sheet_Metal_Fabrication_Video.mp4" type="video/mp4" />
            </video>
            <div className={styles.overlay}></div>

            <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.badge}>
                    <span>🏭</span> Trusted Since 1993
                </div>

                <h1 className={styles.title}>
                    Precision Sheet Metal Stamping & Fabrication for
                    <span className={styles.highlight}> Automotive Innovation</span>
                </h1>

                <p className={styles.subtitle}>
                    High-volume quality components engineered for two- and four-wheeler manufacturers.
                    <br />
                    Progressive die stamping, laser cutting, and complete fabrication solutions.
                </p>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <h3>500K+</h3>
                        <p>Parts/Month</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>ISO 9001:2015</h3>
                        <p>Certified</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>99.8%</h3>
                        <p>On-Time Delivery</p>
                    </div>
                </div>

                <div className={styles.ctaButtons}>
                    <button className="btn btn-primary" onClick={scrollToContact}>
                        Request a Quote
                    </button>
                    <button className="btn btn-secondary" onClick={scrollToContact}>
                        Upload Part Drawing
                    </button>
                </div>

                <div className={styles.scrollIndicator}>
                    <div className={styles.mouse}>
                        <div className={styles.wheel}></div>
                    </div>
                    <p>Scroll to explore</p>
                </div>
            </div>
        </section>
    );
}
