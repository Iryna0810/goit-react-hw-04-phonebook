import React from 'react';
import PropTypes from 'prop-types';
import { FormWrapper, Button, StyledInput } from "components/styled";
const { Component } = require("react");



export class Form extends Component {

    state = {
    name: '',
    number: '',
    }

    handleInputChange = event => {
    const { name, value } = event.currentTarget;
      this.setState({ [name]: value });
      
  }
    
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();

    }

    reset = () => {
      this.setState({
        name: '',
        number: '',
      })
    }

    render() {
      return <FormWrapper action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">Name
        <StyledInput
        type="text"
        name="name"
        value={this.state.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.handleInputChange}
        StyledInput/>
        </label>
        <label htmlFor="">Number
          <StyledInput
            type="tel"
            name="number"
            value={this.state.number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
            StyledInput />
          </label>
         
          <Button type="submit">Add contacts</Button>
        </FormWrapper>
       
    }

}

Form.propTypes = { onSubmit: PropTypes.func.isRequired};