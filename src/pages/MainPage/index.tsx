import React, { useEffect, useState } from "react";
import routeMain from "./routes";

import PostsList from "components/PostsList";

import getPosts from "services/getPosts";

import { IPostsDetail } from "types/IPostsDetail";
import PageTitle from "components/PageTitle";

import './styles.scss'

const MainPage = () => {
    const [postsList, setPostsList] = useState<IPostsDetail[]>([])

    useEffect(() => {
        getPosts().then(response => {
            setPostsList(response.data)
        })
        
    }, [postsList])

    return (
        <section className="mainPage">
          <div className="container">
            <PageTitle
                    title={
                        <h2>Список из шести постов</h2>
                    }
                />
            {postsList.length > 0 && <PostsList list={postsList.slice(0, 6)}/>} 
          </div> 
        </section>
    )
}

export {routeMain}

export default MainPage