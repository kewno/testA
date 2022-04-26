import React from 'react';
import '../../../style.scss';
import {NavLink} from "react-router-dom"

const TransitionRegistration = (props) => {
    return (
        <div className='transition-registration'>
            <p className='transition-registration__text'>{props.text}</p>
            <NavLink to={`/`} className='transition-registration__button'>{props.textButton}</NavLink>
        </div>
    )
}


export default TransitionRegistration