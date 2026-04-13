"use client";

import { useState } from "react";
import { cn } from "../lib/utils";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        phoneCountry: "",
        company: "",
        industry: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:imran.raza@emaago.com?subject=Contact from ${formData.firstName} ${formData.lastName}&body=Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company}%0D%0AIndustry: ${formData.industry}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="px-4" >
            <form
                onSubmit={handleSubmit}
                id="contact"
                className="max-w-6xl mx-auto px-6 py-12  glassmorphic relative rounded-3xl p-8 shadow-xl group transition-transform duration-300 border border-white/10 backdrop-blur-md bg-white/5 hover:scale-[1.03]"
            >
                <h2 className="text-4xl md:text-5xl text-center font-bold mb-20 leading-tight">
                    <span className="bg-gradient-to-r from-[#7EC8F5] via-[#C08CFA] to-[#A05CEB] bg-clip-text text-transparent">
                        Contact Us
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="input-field"
                    />
                    <div className="flex flex-col md:flex-row md:col-span-2 gap-9 w-full">

                        <div className="w-full md:w-1/2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Work email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input-field w-full"
                            />
                        </div>


                        <div className="w-full md:w-1/2">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="input-field w-full"
                            />
                        </div>
                    </div>

                    <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field"
                    />

                    <input
                        type="text"
                        name="service"
                        placeholder="What service are you mainly interested in?"
                        value={formData.service}
                        onChange={handleChange}
                        className="input-field"
                    />

                </div>


                <textarea
                    name="message"
                    placeholder="Provide us with specifics on your needs"
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field w-full mt-8 min-h-[120px] resize-none"
                />



                <button
                    type="submit"
                    className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium transition-all duration-200 shadow-md"
                >
                    Submit
                </button>
            </form></div>
    );
}
