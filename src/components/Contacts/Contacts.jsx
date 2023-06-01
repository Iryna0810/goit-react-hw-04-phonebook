import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from 'components/styled';

export const Contacts = ({ contactsList, onDeleteContact }) => 
    {return <List> {contactsList.map(({ name, id, number }) => <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <Button type="submit"
            onClick={() => onDeleteContact(id)}
            >Delete</Button>
        </li>)}
        </List>
    }

Contacts.propTypes = {
    contactsList: PropTypes.array,
    onDeleteContact: PropTypes.func,
};
