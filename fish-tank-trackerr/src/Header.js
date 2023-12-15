import './App.css';

function Header() {
    return (
        <div >
            <header className="header">
                <p className="mainBtn">
                    Fish Tank Tracker
                </p>
                <ul className="tabs">
                    <li className="tab"> Home </li>
                    <li className="tab"> Fish Tracker </li>
                    <li className="tab"> Tank Cleaning Log </li>
                    <li className="tab"> Account </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
