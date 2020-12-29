import React from 'react';
import './index.css';

export default function Header({headerOn}) {

    return (    
        <header className={headerOn ? '' : 'navbar'}>
            <div className="header--logo">
                <a href="/home">
                    <img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' alt='Logo da netflix'/>
                </a>
            </div>
            <div className="header--user">
                <a href="/user" >
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png' width="40px" alt='avatar user'/>
                </a>
            </div>
        </header>
    )
}