import React from 'react';
import '../../../../style.scss';
import MainLogo from '../../../ui/MainLogo/MainLogo';
import NameCompany from '../../../ui/NameCompany/NameCompany';


const LoadingWindowContent = () => {
    return (
        <div className='content-loading-window'>
            <MainLogo />
            <NameCompany />
        </div>
    )
}


export default LoadingWindowContent