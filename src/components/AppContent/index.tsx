import React from "react";

import Header from "components/Header";

import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import PostsListPage, { routeMain as routePostsList } from "pages/PostsListPage";
import HomePage, { routeMain as routeHomePage } from "pages/HomePage";
import PostsDetail, { routeMain as routePostsDetail } from "pages/PostsDetail";
import { Switch, Route, Redirect } from "react-router-dom";

import './styles.scss'

const AppContent = () => {
    return (
        <div className="mainWrapper">
            <Header/>
            <main className="main">
                <Switch>
                    <Route exact path={routeHomePage()} component={HomePage}/>
                    <Route exact path={routeMainPage()} component={MainPage}/>
                    <Route exact path={routePostsList()} component={PostsListPage}/>
                    <Route exact path={routePostsDetail()} component={PostsDetail}/>
                    <Redirect 
                        to={{
                            pathname: routeHomePage()
                        }}
                    />
                </Switch>
            </main>
        </div>
    )
}

export default AppContent