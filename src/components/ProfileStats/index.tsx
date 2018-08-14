import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export default function ProfileStats ({stats}:any) {

    return (
        <div>
            <BottomNavigation showLabels>
                <BottomNavigationAction label="Followers" icon={stats.followers}/>
                <BottomNavigationAction label="Follow" icon={stats.follow}/>
                <BottomNavigationAction label="Posts" icon={stats.posts}/>
            </BottomNavigation>
        </div>
    )
}