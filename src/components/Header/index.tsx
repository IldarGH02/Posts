import React from "react";

import { routeMain as routePostsList } from "pages/PostsListPage";
import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeHomePage } from "pages/HomePage";
import { NavLink } from "react-router-dom";

import './styles.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <h2 className="header__title">TypeScript</h2>
                    <nav className="header__nav nav">
                        <NavLink to={routeHomePage()} activeClassName={'isActive'} className="header__link">Главная</NavLink>
                        <NavLink to={routeMainPage()} activeClassName={'isActive'} className="header__link">Посты</NavLink>
                        <NavLink to={routePostsList()} activeClassName={'isActive'} className="header__link">Все посты</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header