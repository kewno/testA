import React from 'react';
import '../../../style.scss';


const MainLogo = () => {
    return (
        <div className='wrap-main-logo'>
            <img className='main-logo' src={require('../../../img/logo-dark.png')} alt='logo'/>
        </div>
    )
}


export default MainLogo