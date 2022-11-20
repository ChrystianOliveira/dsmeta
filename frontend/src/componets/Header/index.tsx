import logo from '../../assets/img/logo.svg';

import './style.css';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://github.com/ChrystianOliveira" target="_blank"> Chrystian de Oliveira®</a>
                    </p>
            </div>
        </header>
    )
}

export default Header;
