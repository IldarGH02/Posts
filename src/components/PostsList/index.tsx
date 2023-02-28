import React from "react";
import { IPostsDetail } from "types/IPostsDetail";
import PostsItem from "./components/PostsItem";

import './styles.scss'

interface IPostsListParams {
    list: IPostsDetail[]
}

const PostsList: React.FC<IPostsListParams> = ({list}) => {
    return (
        <div className="mainPage__items">
            {list.map((posts: IPostsDetail) => {
                return <PostsItem
                    key={posts.id}
                    item={posts}
                />
            })}
        </div>
    )
}

export default PostsList