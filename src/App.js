import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./styles.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addOrUpdateContact = (contact) => {
    if (editingIndex !== null) {
      const updated = [...contacts];
      updated[editingIndex] = contact;
      setContacts(updated);
      setEditingIndex(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const editContact = (index) => {
    setEditingIndex(index);
  };

  // 🔥 REAL-TIME FILTER (IMPORTANT FOR YOUR ASSIGNMENT)
  const filteredContacts = contacts.filter((c) =>
    `${c.name} ${c.company}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🌟 Digital Contact Cards</h1>

      <input
        className="search"
        placeholder="🔍 Search by name or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ContactForm
        addOrUpdateContact={addOrUpdateContact}
        editingContact={contacts[editingIndex]}
      />

      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
    </div>
  );
}

export default App;