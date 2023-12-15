import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div >
            <header className="header">
                <p className="mainBtn">
                    Fish Tank Tracker
                </p>
                <nav>
                    <ul className="tabs">
                        <li className="tab"> <Link to="/"> Main </Link> </li>
                        <li className="tab"> Fish Tracker </li>
                        <li className="tab"> <Link to="/tankCleaningLogPage">Tank Cleaning Log</Link> </li>
                        <li className="tab"> Account </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
