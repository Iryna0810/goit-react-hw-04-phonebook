import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from 'components/styled';

export const Contacts = ({ contactsList, onDeleteContact }) => 
{return <List>
    {contactsList.map(contact => (
        <li key={contact.id}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <Button type="submit" onClick={()=>onDeleteContact(contact.id)}>Delete</Button>
    </li>))}
    </List>}


// Contacts.propTypes = {
//     contactsList: PropTypes.array,
//     onDeleteContact: PropTypes.func,
// };
