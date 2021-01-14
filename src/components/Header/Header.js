import React from 'react';
import './_header.scss';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <div>H</div>
                <div>Y</div>
                <div>P</div>
                <div><i className="fas fa-bars"></i></div>
            </div>
            <h1>Zadanie rekrutacyjne</h1>
        </header>
    );
};

export default Header;