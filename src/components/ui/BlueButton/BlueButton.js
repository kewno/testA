import React from 'react';
import '../../../style.scss';
import {NavLink} from "react-router-dom"


const BlueButton = (props) => {
    return (
        <NavLink to={`/`} className='button'>{props.text}</NavLink>
    )
}


export default BlueButton