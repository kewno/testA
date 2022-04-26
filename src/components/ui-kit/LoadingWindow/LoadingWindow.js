import React from 'react';
import '../../../style.scss';
import LoadingWindowContent from './LoadingWindowContent/LoadingWindowContent';


const LoadingWindow = () => {
    return (
        <div className='container-loading-window'>
            <LoadingWindowContent />
        </div>
    )
}


export default LoadingWindow