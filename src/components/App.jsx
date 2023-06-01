import {useState, useMemo, useEffect } from "react"
import { nanoid } from 'nanoid'
import { Form } from "./Form/Form";
import { Title } from './Title/Title';
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filtter/Filter";

const useLocalStorage = (key, defaultValue) => {
  const parseContacts = JSON.parse(window.localStorage.getItem(key));
  const [state, setState] = useState(() => {
    if (!parseContacts) { return defaultValue }
    if (parseContacts.length > 0 ) { return parseContacts }
    else return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage("contactsLocalStorage", initialContacts);
 
  useEffect(() => {
     window.localStorage.setItem('contactsLocalStorage', JSON.stringify(contacts));
    }, []);

  const normalizedFilter = filter.toLowerCase();
    
  const filterContacts = useMemo(() => {
    if (!normalizedFilter) return contacts;
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(normalizedFilter))
    }, [contacts, normalizedFilter])


  const addContact = ({ name, number }) => {
    const ContactItem = {
      id: nanoid(),
      name,
      number,
    };
    const normalizedName = name.toLowerCase();
    const nameCheck = contacts.filter(contact => contact.name.toLowerCase() === normalizedName);

    if (nameCheck.length >= 1) {
      return alert(`${name} is already in contacts`)
    }

    setContacts(contacts => [...contacts, ContactItem]);
  };
 
  const deleteContact = (id) => setContacts(contacts => contacts.filter(contact => contact.id !== id));
   
  const handleChangeFilter = (event) => {
      setFilter(event.target.value)  
  }

  return (
      
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#fff',
        backgroundColor: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(191,4,171,0.6839985994397759) 35%, rgba(0,212,255,1) 100%)',
        width: '500px',
        height: 'auto',
        padding: '30px',
        margin: '0 auto',
        borderRadius: '10px',
      }}>
      <Title
        title='Phonebook'

      ></Title>
      < Form
        onSubmit={addContact}
      />
      <Title
        title="Contacts"
      ></Title>
      <Filter
        values={filter}
        onChange={handleChangeFilter}
      />
      <Contacts
        contactsList={filterContacts}
        onDeleteContact={deleteContact}
        filter={filter}>
        </Contacts>
    </div>
  );
};


  