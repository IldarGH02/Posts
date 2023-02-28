import React from "react";
import { NavLink } from "react-router-dom";

import { routeMain as routePostsDetail } from "pages/PostsDetail";

import { IPostsDetail } from "types/IPostsDetail";

import './styles.scss'

interface IPostsListParams {
    item: IPostsDetail;
}

const PostsItem: React.FC<IPostsListParams> = ({item}) => (
    <NavLink className='detail__link' to={routePostsDetail((item.id).toString())}>
        <div className="mainPage__item">
            <h2 className="mainPage__item-title">{item.title}</h2>
            <p className="mainPage__item-descr">{item.body}</p>
        </div>
    </NavLink>
)

export default PostsItem