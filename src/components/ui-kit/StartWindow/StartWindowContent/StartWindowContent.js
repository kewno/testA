import React from 'react';
import '../../../../style.scss';
import BlueButton from '../../../ui/BlueButton/BlueButton';
import MainLogo from '../../../ui/MainLogo/MainLogo';
import NameCompany from '../../../ui/NameCompany/NameCompany';
import TextNormal from '../../../ui/TextNormal/TextNormal';
import TransitionRegistration from '../../../ui/TransitionRegistration/TransitionRegistration';


const StartWindowContent = () => {
    return (
        <div className='content-start-window'>
            <MainLogo />
            <NameCompany />

            <TextNormal text='Лапки. Ушки. Хвостик и доза любви'/>
            <BlueButton text='Войти'/>

            <TransitionRegistration 
                text ='У вас ещё нет аккаунта?'
                textButton ='Зарегистрироваться'
            />
        </div>
    )
}


export default StartWindowContent