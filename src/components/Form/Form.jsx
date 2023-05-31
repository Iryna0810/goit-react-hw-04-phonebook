import {useState} from 'react';
import PropTypes from 'prop-types';
import { FormWrapper, Button, StyledInput } from "components/styled";
import styled from "styled-components";

export const Form = ({onSubmit}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const user = {
    name: name,
    number: number,
  }


    // state = {
    // name: '',
    // number: '',
    // }

  //   handleInputChange = event => {
  //   const { name, value } = event.currentTarget;
  //     setName({ value });
  //     setNumber({ value });      
  // }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(user);
      console.log(user);
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
        <label htmlFor="">Name
        <StyledInput
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
        StyledInput/>
        </label>
        <label htmlFor="">Number
          <StyledInput
            type="tel"
            name="number"
            value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
            StyledInput />
          </label>
         
          <Button type="submit">Add contacts</Button>
        </FormWrapper>
       
    }



// Form.propTypes = { onSubmit: PropTypes.func.isRequired};