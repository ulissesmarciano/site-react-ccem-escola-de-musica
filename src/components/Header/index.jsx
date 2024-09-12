import React, { useState } from 'react';
import { Container } from './styles';
import LinkItem from '../LinkItem';

const Header = ({id}) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const handleLinkClick = () => setSidebar(false);

  return (
    <Container>
      <div className="header-container">
        <div className="logo-container">
          <a href='/'>
            <h1 className="logo">CCEM</h1>
          </a>
        </div>
        <nav>
          <input 
            type="checkbox" 
            id="menu-hamburguer" 
            checked={sidebar}
            onChange={showSidebar}
          />
          <label htmlFor="menu-hamburguer">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>

          <ul className={sidebar ? 'active' : ''}>
            <li>
              <LinkItem 
                name="Quem Somos"
                onClick={handleLinkClick}
                href={id="#sobre"}
              />
            </li>
            <li>
              <LinkItem 
                name="Cursos"
                onClick={handleLinkClick}
                href={id="#cursos"}
              />
            </li>
            <li>
              <LinkItem 
                name="Contato"
                onClick={handleLinkClick}
                href={id="#contato"}
              />
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
