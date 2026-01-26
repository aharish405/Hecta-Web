'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Industries.module.css';

export default function Industries() {
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

    const industries = [
        {
            title: 'Engine & Powertrain',
            description: 'Precision brackets, mounts, and structural components for engine assemblies',
            icon: '⚙️',
            applications: ['Engine Brackets', 'Motor Mounts', 'Transmission Components']
        },
        {
            title: 'Chassis Components',
            description: 'High-strength stamped parts for vehicle chassis and structural systems',
            icon: '🏗️',
            applications: ['Frame Brackets', 'Suspension Parts', 'Structural Reinforcements']
        },
        {
            title: 'Electrical Housings',
            description: 'Protective housings and mounting solutions for electrical systems',
            icon: '⚡',
            applications: ['ECU Housings', 'Sensor Mounts', 'Wiring Brackets']
        },
        {
            title: 'Structural Stamped Parts',
            description: 'Critical structural components for automotive body and frame',
            icon: '🔩',
            applications: ['Body Panels', 'Reinforcement Plates', 'Mounting Brackets']
        },
        {
            title: 'EV Battery Systems',
            description: 'Specialized components for electric vehicle battery assemblies',
            icon: '🔋',
            applications: ['Battery Trays', 'Cell Connectors', 'Cooling Brackets']
        },
        {
            title: 'OEM Solutions',
            description: 'Comprehensive manufacturing for Tier-1 and Tier-2 automotive suppliers',
            icon: '🎯',
            applications: ['OEM Components', 'Tier-1 Supply', 'Tier-2 Parts']
        }
    ];

    return (
        <section id="industries" ref={sectionRef} className={styles.industries}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Industries Served</h2>
                    <p className="section-subtitle">
                        Specialized automotive manufacturing solutions for two-wheeler and four-wheeler OEM requirements
                    </p>
                </div>

                <div className={styles.focusArea}>
                    <div className={styles.focusCard}>
                        <h3>🏍️ Two-Wheeler Manufacturers</h3>
                        <p>Precision components for motorcycles, scooters, and electric two-wheelers</p>
                    </div>
                    <div className={styles.focusCard}>
                        <h3>🚗 Four-Wheeler Manufacturers</h3>
                        <p>High-volume stamped parts for passenger vehicles and commercial vehicles</p>
                    </div>
                </div>

                <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardIcon}>{industry.icon}</div>
                            <h3>{industry.title}</h3>
                            <p className={styles.description}>{industry.description}</p>
                            <div className={styles.applications}>
                                <h4>Key Applications:</h4>
                                <ul>
                                    {industry.applications.map((app, idx) => (
                                        <li key={idx}>{app}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
