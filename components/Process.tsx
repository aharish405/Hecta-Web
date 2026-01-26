'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Process.module.css';

export default function Process() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const steps = [
        {
            number: '01',
            title: 'Get a Quote',
            description: 'Upload your part drawings in DXF, DWG, STEP, or PDF format. Our team reviews your requirements and provides a detailed quotation.',
            icon: '📄',
            details: ['Technical Review', 'Cost Estimation', 'Lead Time Analysis']
        },
        {
            number: '02',
            title: 'Engineering & DFM Review',
            description: 'Our engineering team conducts Design for Manufacturing analysis to optimize your part for production efficiency and cost.',
            icon: '🔍',
            details: ['DFM Analysis', 'Material Selection', 'Process Optimization']
        },
        {
            number: '03',
            title: 'Tooling & Prototype',
            description: 'Progressive die development, tool trials, and prototype production to validate design and manufacturing process.',
            icon: '🛠️',
            details: ['Die Design', 'Tool Fabrication', 'First Article Inspection']
        },
        {
            number: '04',
            title: 'Production & Quality Control',
            description: 'High-volume production with in-process quality checks, PPAP documentation, and full material traceability.',
            icon: '⚙️',
            details: ['Mass Production', 'In-Process QC', 'PPAP Documentation']
        },
        {
            number: '05',
            title: 'Delivery & Support',
            description: 'Professional packaging, timely delivery, and ongoing technical support for your manufacturing needs.',
            icon: '🚚',
            details: ['Export Packaging', 'Logistics Support', 'After-Sales Service']
        }
    ];

    return (
        <section id="process" ref={sectionRef} className={styles.process}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">
                        Our streamlined 5-step process ensures quality, efficiency, and timely delivery
                    </p>
                </div>

                <div className={`${styles.timeline} ${isVisible ? styles.visible : ''}`}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${styles.step} ${activeStep === index ? styles.active : ''}`}
                            onMouseEnter={() => setActiveStep(index)}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepIcon}>{step.icon}</div>
                            <div className={styles.stepContent}>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                                <ul className={styles.details}>
                                    {step.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                            {index < steps.length - 1 && <div className={styles.connector}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
