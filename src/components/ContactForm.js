import React, { useState, useEffect } from "react";

function ContactForm({ addOrUpdateContact, editingContact }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    bio: "",
    avatar: ""
  });

  useEffect(() => {
    if (editingContact) setForm(editingContact);
  }, [editingContact]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateContact(form);

    setForm({
      name: "",
      company: "",
      phone: "",
      email: "",
      bio: "",
      avatar: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
      <input name="company" placeholder="Company / Job" value={form.company} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="avatar" placeholder="Avatar URL" value={form.avatar} onChange={handleChange} />
      <textarea name="bio" placeholder="Short Bio" value={form.bio} onChange={handleChange}></textarea>

      <button type="submit">💾 Save Contact</button>
    </form>
  );
}

export default ContactForm;