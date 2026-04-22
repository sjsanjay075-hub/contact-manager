import React from "react";

function ContactCard({ contact, index, deleteContact, editContact }) {
  const avatar = contact.avatar || "https://via.placeholder.com/100";

  return (
    <div className="card">
      <img src={avatar} alt="avatar" />
      <h3>{contact.name}</h3>
      <p className="company">{contact.company}</p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <small>{contact.bio}</small>

      <div className="actions">
        <button className="edit" onClick={() => editContact(index)}>✏️ Edit</button>
        <button className="delete" onClick={() => deleteContact(index)}>🗑 Delete</button>
      </div>
    </div>
  );
}

export default ContactCard;