import React from 'react';
import "./profile.css";
import { MoreVert, Delete, Edit } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Profile() {
    return (
        <div>
            <div className="cover">
                <div className="coverWrapper">
                    <div className="coveright">
                        <div className="coverRightTop">
                            <div className="cover1">
                                <img  
                                    className="coverImg"
                                    src="assets/post/3.jpeg"
                                    alt=""
                                />
                                <img
                                    className="coverUserImg"
                                    src="assets/person/1.jpeg"
                                    alt=""
                                />
                            </div>
                            <div className="coverInfo">
                                <h4 className="coverInfoName">Ahmed Beryl</h4>
                                <span className="coverInfoDesc">Hello my friends!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile">   
                <div className="profileWrapper">
                    <div className="profileTop">
                        <div className="profileTopLeft">
                            <img
                                className="profileImgCover"
                                src= "/assets/person/1.jpeg"
                                alt=""
                            />
                            <span className="profileUsername">
                                Ahmed Beryl
                            </span>
                        </div>
                        <div className="profileTopRight">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="profileCenter">
                        <span className="profileText">test</span>
                        <img className="profileImg" src="/assets/post/1.jpeg" alt="" />
                    </div>
                    <div className="profileBottom">
                        <div className="profileBottomLeft">
                            <li className="sidebarListItem">
                                <Delete className="profileIcon" /> 
                                <button className="profileButton">Delete</button>  {/* Button Update */}
                            </li>
                            <li className="sidebarListItem">
                                <Edit className="profileIcon" /> 
                                <button className="profileButton">Edit</button>  {/* Button Update */}
                            </li>
                        </div>
                        <div className="profileBottomRight">
                            <span className="profileCommentText"> comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
