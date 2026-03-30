'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Capabilities.module.css';

export default function Capabilities() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const capabilities = [
        {
            icon: '🔨',
            title: 'Sheet Metal Stamping',
            description: 'Progressive and deep-draw stamping for high-volume precision automotive parts with tight tolerances and high repeatability',
            features: ['Progressive Die Stamping', 'Deep Draw Operations', 'High-Volume Production']
        },
        {
            icon: '✂️',
            title: 'Sheet Metal Fabrication',
            description: 'Complete fabrication services including laser cutting, CNC bending, forming, welding & assemblies for automotive applications',
            features: ['3KW Laser Cutting', 'CNC Bending & Forming', 'MIG/Spot/Laser Welding']
        },
        {
            icon: '🛠️',
            title: 'Tooling & Die Development',
            description: 'Design for manufacturability (DFM), progressive die design, trials & optimization for automotive OEM requirements',
            features: ['DFM Analysis', 'Progressive Die Design', 'Tool Trials & Optimization']
        },
        {
            icon: '🎨',
            title: 'Finishing & Secondary Ops',
            description: 'Surface treatments like plating, powder coat, passivation; tapping, welding, and assembly operations',
            features: ['Powder Coating & Plating', 'Passivation Treatment', 'Tapping & Assembly']
        },
        {
            icon: '✅',
            title: 'Quality Assurance',
            description: 'FAI/PPAP support, traceable inspections, material certificates, and complete quality documentation',
            features: ['FAI & PPAP Support', 'Material Certificates', 'Full Traceability']
        },
        {
            icon: '🚚',
            title: 'Supply Chain & Logistics',
            description: 'Export packaging, door-to-door delivery, compliance documentation for seamless global supply',
            features: ['Export Packaging', 'Door-to-Door Delivery', 'Compliance Documentation']
        }
    ];

    return (
        <section id="capabilities" ref={sectionRef} className={styles.capabilities}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Our Capabilities</h2>
                    <p className="section-subtitle">
                        Comprehensive manufacturing solutions backed by advanced machinery and decades of expertise
                    </p>
                </div>

                <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
                    {capabilities.map((capability, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>{capability.icon}</span>
                                </div>
                                <h3>{capability.title}</h3>
                            </div>

                            <p className={styles.description}>{capability.description}</p>

                            <ul className={styles.features}>
                                {capability.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className={styles.checkmark}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.cardFooter}>
                                <button className={styles.learnMore}>Learn More →</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.machinery}>
                    <h3>Advanced Machinery & Equipment</h3>
                    <p className={styles.machinerySubtitle}>
                        State-of-the-art equipment ensuring precision, efficiency, and quality in every component
                    </p>
                    <div className={styles.machineryGrid}>
                        <div className={styles.machineryCard}>
                            <div className={styles.machineryImage}>
                                <img src="/images/laser_cutting.png" alt="Laser Cutting Machine" />
                            </div>
                            <div className={styles.machineryContent}>
                                <h4>Laser Cutting</h4>
                                <p>3KW (MS up to 12mm, SS up to 5mm)</p>
                            </div>
                        </div>
                        <div className={styles.machineryCard}>
                            <div className={styles.machineryImage}>
                                <img src="/images/cnc_bending.jpg" alt="CNC Bending Machine" />
                            </div>
                            <div className={styles.machineryContent}>
                                <h4>CNC Bending</h4>
                                <p>Brake Press 1.25 Ton</p>
                            </div>
                        </div>
                        <div className={styles.machineryCard}>
                            <div className={styles.machineryImage}>
                                <img src="/images/hero_manufacturing.png" alt="CNC Machining Center" />
                            </div>
                            <div className={styles.machineryContent}>
                                <h4>CNC Machining</h4>
                                <p>Turning & VMC (1000×600×600)</p>
                            </div>
                        </div>
                        <div className={styles.machineryCard}>
                            <div className={styles.machineryImage}>
                                <img src="/images/welding_process.png" alt="Welding Equipment" />
                            </div>
                            <div className={styles.machineryContent}>
                                <h4>Welding</h4>
                                <p>MIG, Laser, Spot Welding</p>
                            </div>
                        </div>
                        <div className={styles.machineryCard}>
                            <div className={styles.machineryImage}>
                                <img src="/images/pipe_bending.jpg" alt="Pipe Bending Machine" />
                            </div>
                            <div className={styles.machineryContent}>
                                <h4>Pipe Bending</h4>
                                <p>Up to 45mm diameter</p>
                            </div>
                        </div>
                        <div className={styles.machineryCard}>
                            <div className={styles.machineryImage}>
                                <img src="/images/stamping.jpg" alt="Sheet Metal Stamping" />
                            </div>
                            <div className={styles.machineryContent}>
                                <h4>Stamping</h4>
                                <p>Progressive & Deep Draw Stamping</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
