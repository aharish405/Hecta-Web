'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        industry: '',
        material: '',
        quantity: '',
        location: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                companyName: '',
                contactPerson: '',
                email: '',
                phone: '',
                industry: '',
                material: '',
                quantity: '',
                location: '',
                message: ''
            });

            setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Request a quote or schedule a consultation with our engineering team
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.formSection}>
                        <div className={styles.formHeader}>
                            <h3>Request for Quotation</h3>
                            <p>Fill out the form below and we'll get back to you within 24 hours</p>
                        </div>

                        {submitStatus === 'success' && (
                            <div className={styles.successMessage}>
                                ✓ Thank you! Your quote request has been submitted successfully.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="companyName">Company Name *</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="contactPerson">Contact Person *</label>
                                    <input
                                        type="text"
                                        id="contactPerson"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="industry">Industry Segment</label>
                                    <select
                                        id="industry"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select industry</option>
                                        <option value="two-wheeler">Two-Wheeler</option>
                                        <option value="four-wheeler">Four-Wheeler</option>
                                        <option value="three-wheeler">Three-Wheeler</option>
                                        <option value="ev">Electric Vehicles</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="material">Material</label>
                                    <input
                                        type="text"
                                        id="material"
                                        name="material"
                                        value={formData.material}
                                        onChange={handleChange}
                                        placeholder="e.g., MS, SS, Aluminum"
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="quantity">Quantity</label>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        placeholder="e.g., 10,000 pcs/month"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="location">Delivery Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="City, State"
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Additional Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell us about your requirements, drawings, specifications, etc."
                                ></textarea>
                            </div>

                            <div className={styles.formActions}>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                                </button>
                                <p className={styles.formNote}>
                                    📎 You can also email drawings to: <strong>hectaenterprises@gmail.com</strong>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className={styles.infoSection}>
                        <div className={styles.infoCard}>
                            <h3>Contact Information</h3>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>📞</div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+918074818235">+91 8074818235</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>✉️</div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:hectaenterprises@gmail.com">hectaenterprises@gmail.com</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Gagillapur, Dundigal-Gandimaisamma Mandal</p>
                                    <p>Hyderabad, Telangana</p>
                                    <a
                                        href="https://maps.app.goo.gl/iJjaz3G9BK3U2imX6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.mapLink}
                                    >
                                        View on Google Maps →
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.mapEmbed}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.8!2d78.4!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMwJzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="300"
                                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Hecta Enterprises Location"
                            ></iframe>
                        </div>

                        <div className={styles.hoursCard}>
                            <h4>Business Hours</h4>
                            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
