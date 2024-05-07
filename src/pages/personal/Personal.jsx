import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Profile from '../../components/profile/Profile';
import Cover from '../../components/cover/Cover';
import './personal.css';


export default function Personal() {
    return (
        <>
        <Topbar />
        <div className="personalContainer">
                <Sidebar/>
                <Profile/> 
        </div>
        </>
    );
}