import React from 'react';
import { Wrapper, LinkingWrapper } from './navigation.styled';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';


const Navigation = () => {
  return (
      <Wrapper>
        <LinkingWrapper>
          <ul>
            <div>
              <li>
                <NavLink  to="/"  style={{ color: 'white', textDecoration: 'none' }}>
                  Shop
                </NavLink>
              </li>
            </div>
            <div>
              <li>
                <NavLink  to="/Catalog" style={{ color: 'white', textDecoration: 'none' }}>
                  Catalog
                </NavLink>
              </li>
            </div>
            <div>
              <li>
                <NavLink  to="/"  style={{ color: 'white', textDecoration: 'none' }}>
                  Varienty
                </NavLink>
              </li>
            </div>
            <div>
              <li>
                <NavLink  to="/"  style={{ color: 'white', textDecoration: 'none' }}>
                  Order
                </NavLink>
              </li>
            </div>
          </ul>
        </LinkingWrapper>
      </Wrapper>
  );
};

export default Navigation;
