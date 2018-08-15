import React from 'react'
import {Link} from "react-router-dom";
import './style.css'

export default function ProfileStats ({stats}:any) {

    return (
        <div className="profile-stats">
            <Link className="stats-links" to="#">
                <span className="stats-label">{stats.followers}</span>
                <span>Followers</span>
            </Link>
            <Link className="stats-links" to="#">
                <span className="stats-label">{stats.follow}</span>
                <span>Follow</span>
            </Link>
            <Link className="stats-links" to="#">
                <span className="stats-label">{stats.posts}</span>
                <span>Posts</span>
            </Link>
        </div>
    )
}