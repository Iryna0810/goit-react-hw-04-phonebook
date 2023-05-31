import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/styled';

export const Filter = ({values, onChange}) => 
(<label>Find contacts by name
    <Input type='text'
        value={values}   
        onChange={onChange}
        name="filter"
        autoComplete="off">

    </Input>
</label>
)

Filter.propTypes = {
    values: PropTypes.string,
    onChange: PropTypes.func,
}