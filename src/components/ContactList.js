import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts, deleteContact, editContact }) {
  if (contacts.length === 0) {
    return <p className="empty">No contacts found</p>;
  }

  return (
    <div className="grid">
      {contacts.map((c, i) => (
        <ContactCard
          key={i}
          index={i}
          contact={c}
          deleteContact={deleteContact}
          editContact={editContact}
        />
      ))}
    </div>
  );
}

export default ContactList;