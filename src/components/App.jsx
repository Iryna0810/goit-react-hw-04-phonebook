import { Component, useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import { Form } from "./Form/Form";
import { Title } from './Title/Title';
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filtter/Filter";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
 
  useEffect(() => {
    return () => {
      console.log('contacts useEffect');
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  
  // useEffect(()=>{}, [])
  
  // componentDidMount() {
  //   const contactsStorage = localStorage.getItem('contacts');
  //   const parseContacts = JSON.parse(contactsStorage);
  //   const { contacts } = this.state;

  //   parseContacts
  //       ? this.setState({ contacts: parseContacts })
  //       : this.setState({ contacts: contacts })
    
  // }

  //     componentDidUpdate(prevProps, prevState) {
  //       if (this.state.contacts !== prevState.contacts) {
  //         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //       }
  //   }


  const addContact = () => {
      let contact = {};
    const {id, name, number } = contact;
          
    const ContactItem = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = name.toLowerCase();
    const nameCheck = contacts.filter(contact => contact.name.toLowerCase() === normalizedName)
    
    if (nameCheck.length >= 1) {
      return alert(`${name} is already in contacts`)
    }
    setContacts(prev => ({
    contacts: [ContactItem, ...prev]
      }))



    // this.setState(prevState => ({
    // contacts: [ContactItem, ...prevState.contacts]
    //   }))  
    };
    
  

  const deleteContact = id => {
    setContacts(prev => {prev.filter(contact => contact.id !== id)
    })


    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== id),
    // }));
  };


  const getVisibleContacts = () => {
    // const {contacts, filter} = this.state;
    // const normalizedFilter = filter.toLowerCase();
    
    // setContacts(contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)) );
    console.log(contacts);

  }
    
  const handleChangeFilter = ({ target: { value } }) => setFilter(value);
  
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
            contactsList={contacts}
            onDeleteContact={deleteContact}
          />
        </div>
      );
    }

  



// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     const contactsStorage = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contactsStorage);
//     const { contacts } = this.state;

//     parseContacts
//         ? this.setState({ contacts: parseContacts })
//         : this.setState({ contacts: contacts })
    
//   }

//       componentDidUpdate(prevProps, prevState) {
//         if (this.state.contacts !== prevState.contacts) {
//           localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//         }
//     }

//   addContact = ({ name, number }) => {
//     const { contacts } = this.state;
          
//     const ContactItem = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const normalizedName = name.toLowerCase();
//     const nameCheck = contacts.filter(contact => contact.name.toLowerCase() === normalizedName)
    
//     if (nameCheck.length >= 1) {
//       return alert(`${name} is already in contacts`)
//     }

//     this.setState(prevState => ({
//     contacts: [ContactItem, ...prevState.contacts]
//       }))  
//     };
    
  

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };


//   getVisibleContacts = () => {
//   const {contacts, filter} = this.state;
//   const normalizedFilter = filter.toLowerCase();
    
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)) ;
// }
  
  
  
//   handleChangeFilter = (event) => {
//       this.setState({ filter: event.currentTarget.value })  
//   }
 
//     render() {
      
//       const visibleContacts = this.getVisibleContacts();
    
//       return (
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: "column",
//             justifyContent: 'center',
//             alignItems: 'center',
//             fontSize: 30,
//             color: '#fff',
//             backgroundColor: 'rgb(2,0,36)',
//             background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(191,4,171,0.6839985994397759) 35%, rgba(0,212,255,1) 100%)',
//             width: '500px',
//             height: 'auto',
//             padding: '30px',
//             margin: '0 auto',
//             borderRadius: '10px',
//           }}>
//           <Title
//             title='Phonebook'

//           ></Title>
//           < Form
//             onSubmit={this.addContact}
//           />
//           <Title
//             title="Contacts"
//           ></Title>
//           <Filter
//             values={this.state.filter}
//             onChange={this.handleChangeFilter}
//           />
//           <Contacts
//             contactsList={visibleContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         </div>
//       );
//     }
// };
  
