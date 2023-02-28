import React, { useEffect, useState } from "react";
import getPosts from "services/getPosts";
import routeMain from "./routes";

import PageTitle from "components/PageTitle";

import PostsList from "components/PostsList";

import { IPostsDetail } from "types/IPostsDetail";

import './styles.scss'

const PostsListPage = () => {
    const [postsList, setPostsList] = useState<IPostsDetail[]>([])

    useEffect(() => {
        getPosts().then(response => {
            setPostsList(response.data)
        })
        
    }, [])

    return (
        <section className="PostsListPage">
            <div className="container">
                <PageTitle
                    title={
                        <h2>Полный список постов</h2>
                    }
                />
                {PostsList.length > 0 && <PostsList list={postsList}/>} 
            </div> 
        </section>
    )
}

export {routeMain}

export default PostsListPage