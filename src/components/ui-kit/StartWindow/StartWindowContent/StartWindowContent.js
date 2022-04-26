import React from 'react';
import '../../../../style.scss';
import MainLogo from '../../../ui/MainLogo/MainLogo';
import NameCompany from '../../../ui/NameCompany/NameCompany';


const StartWindowContent = () => {
    return (
        <div className='content-start-window'>
            <MainLogo />
            <NameCompany />
        </div>
    )
}


export default StartWindowContent