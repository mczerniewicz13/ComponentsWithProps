import React from "react";
import './AutoBox.css'
import PropTypes from 'prop-types';

export default function AutoBox({
    marka,
    model,
    max_v,
    paliwa
})
{
    return(
        <div>
            <h2>{marka}</h2>
            <h2>{model}</h2>
            <h2>{max_v}</h2>
            <h2>{paliwa.join(', ')}</h2>
            
        </div>
    );
}
AutoBox.propTypes={
    marka: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    max_v: PropTypes.number.isRequired,
    paliwa: PropTypes.arrayOf(PropTypes.string).isRequired
}
