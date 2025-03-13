import { useState, useEffect } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './components/ContactList/contacts.json'
import SearchBox from './components/SearchBox/SearchBox';

import './App.css'

function App() {
  const [contacts, setContacts] = useState(()=>{
    const savedObject = window.localStorage.getItem("saved-obj-contacts");

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return initialContacts
  });
  useEffect(() => {
    localStorage.setItem("saved-obj-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = (newContact) =>{
    setContacts((prevContacts)=>{
      return [...prevContacts, newContact];
    })
  }

  const deleteContact = (contactId)=>{
    setContacts(prevContacts =>{
      return prevContacts.filter((contact)=>contact.id !== contactId)
    })
    
  }

  const visibleContacts = contacts.filter((contsact)=>contsact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact}/>
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts = {visibleContacts} onDelete={deleteContact}/>
    </div>
  )
}

export default App
