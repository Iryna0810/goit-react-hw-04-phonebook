import {useState} from 'react';
import PropTypes from 'prop-types';
import {FormWrapper, Button, Input} from "components/styled";
import styled from "styled-components";

export const Form = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: name,
      number: number,
    });
    reset();
  }
  
  //   const handleInputChange = event => {
  //   const { value, name } = event.target;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
      
  //     case 'number':
  //       setNumber(value);
  //       break;
      
  //     default: return;
  //   }
  // };

  const handleInputChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value)
    if (name === 'number') setNumber(value)
  }


  const reset = () => {
    setName('');
    setNumber('');
  }

  return <FormWrapper action="" onSubmit={handleSubmit}>
    <label>Name
      <Input
        type="text"
        name="name"
        value={name}
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}>
      </Input>
    </label>
    <label>Number
      <Input
        type="tel"
        name="number"
        value={number}
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}>
        </Input>
    </label>
    <Button type="submit">Add contacts</Button>
  </FormWrapper>
};




Form.propTypes = { onSubmit: PropTypes.func.isRequired};