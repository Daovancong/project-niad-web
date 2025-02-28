'use client';
import React from 'react';
import { useState } from "react";
import emailjs from "@emailjs/browser";
type FormUngTuyenProps = {
    showForm: boolean;
    handleClickOf: () => void;
};

const FormUngTuyen = ({ showForm, handleClickOf }: FormUngTuyenProps) => {
    const [formData, setFormData] = useState({
        name: "",
        school: "",
        major: "",
        year: "",
        skills: "",
        project: "",
        email: "",
        phone: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "YOUR_SERVICE_ID", // Thay bằng Service ID từ EmailJS
            "YOUR_TEMPLATE_ID", // Thay bằng Template ID từ EmailJS
            {
                name: formData.name,
                school: formData.school,
                major: formData.major,
                year: formData.year,
                skills: formData.skills,
                project: formData.project,
                email: formData.email,
                phone: formData.phone,
            },
            "YOUR_PUBLIC_KEY" // Thay bằng Public Key từ EmailJS
        )
            .then(() => {
                alert("Đã gửi hồ sơ thành công!");
                setFormData({
                    name: "",
                    school: "",
                    major: "",
                    year: "",
                    skills: "",
                    project: "",
                    email: "",
                    phone: "",
                });
            })
            .catch((error) => {
                console.error("Lỗi gửi email:", error);
                alert("Có lỗi xảy ra, vui lòng thử lại.");
            });
    };
    return (
        <div>

        </div>
    )
}
