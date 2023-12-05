import React from 'react';
import OfflinePrice from '/images/priceOffline.jpg';
import OnlinePrice from '/images/priceOnline.jpg';

function Price(props) {
    return (
        <div id='price'>
            <p className='price-text-h1' >Прайс-лист📃</p>
            <div className='price-image'>
                <img src={OfflinePrice}/>
                <div className='price-text-card'>
                    <p className='price-text-small' >Здесь представлены цены за офлайн услуги.</p>
                    <p className='price-text-small' >Если проблема с вашим устройством уже случилась, а помощь нужна сейчас, обращайтесь срочно к нам.</p>
                    <div className=''>
                        <a href='https://vk.com/im?sel=-170661777' className='price-btn'>
                            Связаться
                        </a>
                    </div>
                    <div className=''>
                        <a href='https://vk.com/topic-170661777_46620481' className='price-btn'>
                            Отзывы
                        </a>
                    </div>
                </div>
                </div>
            <div className='price-image'>
                <img src={OnlinePrice}/>
                <div className='price-text-card'>
                    <p className='price-text-small' >Здесь представлены цены за офлайн услуги.</p>
                    <p className='price-text-small' >Если вы находитесь поблизости рядом с нами, можем оказать услугу с выездом к вам или же будем ждать вас у нас.</p>
                    <div className=''>
                        <a href='https://vk.com/im?sel=-170661777' className='price-btn'>
                            Связаться
                        </a>
                    </div>
                    <div className=''>
                        <a href='' className='price-btn'>
                            Ваш город
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Price;