import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from 'components/styled';

export const Filter = ({values, onChange}) => 
(<label htmlFor="">Find contacts by name
    <StyledInput type='text'
        value={values}   
        onChange={onChange}>

    </StyledInput>
</label>
)

Filter.propTypes = {
    values: PropTypes.string,
    onChange: PropTypes.func,
}