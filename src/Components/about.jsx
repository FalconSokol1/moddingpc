import React from 'react';
import OfflinePrice from "../images/priceOffline.jpg";

function About(props) {
    return (
        <div id='about'>
            <p className='price-text-h1' >О нас</p>
            <div className='about-div'>
                <div className=''>
                    <iframe className='iframecon' width="700" height="400" src="https://www.youtube.com/embed/vPIJIGV21J4?si=U61lBC2CTDAhM-dQ"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div>
                    <p className='about-text-small' >Кстати, ты также можешь получить помощь просматривая гайды на нашем YouTube-канале.</p>
                    <a href="https://www.youtube.com/@ModdingPC_VK/videos" className='header-btn-contacts'>
                        Заглянуть
                    </a>
                </div>

               </div>
        </div>
    );
}

export default About;