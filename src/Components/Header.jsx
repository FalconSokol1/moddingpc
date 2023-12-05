import React from 'react';

function Header() {
    return (
        <div id='main'>

            <div className='header'>
                <h1> Modding<span>PC</span></h1>
                <h2>Услуги компьютерной помощи</h2>
                <p className='details'>Вся важная информация предоставлена на сайте,&shy;обращение доступно через бота ВК или через прямые контакты.</p>
                <div className='header-btns'>
                    <a href='https://vk.com/im?sel=-170661777' className='header-btn'>
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/vk-com.png" alt="vk-com"/>
                         Написать боту
                    </a>
                    <a className='header-btn-contacts'>
                       Контакты
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Header;