'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const highlights = [
        {
            icon: '🎯',
            title: 'Automotive-Grade Manufacturing',
            description: 'Specialized in high-precision components for OEM and Tier-1 suppliers'
        },
        {
            icon: '⚙️',
            title: 'Tight Tolerances & Repeatability',
            description: 'Advanced quality control ensuring consistent precision across production runs'
        },
        {
            icon: '🔄',
            title: 'End-to-End Services',
            description: 'Complete solution from DFM to tooling, production, inspection, and packaging'
        },
        {
            icon: '🤝',
            title: 'Trusted Partner',
            description: 'Reliable Tier-1 & Tier-2 supplier with proven track record since 1993'
        }
    ];

    return (
        <section id="about" ref={sectionRef} className={styles.about}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                        <h2 className="section-title">Why Choose Hecta Enterprises</h2>
                        <p className={styles.intro}>
                            With over <strong>30 years of manufacturing excellence</strong>, Sudha Engineering Works
                            (operating as Hecta Enterprises) has been at the forefront of precision sheet metal
                            stamping and fabrication for the automotive industry.
                        </p>

                        <div className={styles.highlights}>
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.highlightCard}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={styles.icon}>{item.icon}</div>
                                    <div className={styles.cardContent}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.imageSection} ${isVisible ? styles.visible : ''}`}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/images/stamped_parts.png"
                                alt="Precision stamped automotive parts"
                                className={styles.mainImage}
                            />
                            <div className={styles.imageOverlay}>
                                <div className={styles.overlayContent}>
                                    <h3>Since 1993</h3>
                                    <p>Manufacturing Excellence</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.locationCard}>
                            <div className={styles.locationIcon}>📍</div>
                            <div>
                                <h4>Manufacturing Base</h4>
                                <p>Gagillapur, Dundigal-Gandimaisamma</p>
                                <p>Hyderabad, Telangana</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
