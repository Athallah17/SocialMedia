import React from 'react'
import './cover.css'

export default function Cover() {
  return (
    <div className="profile">
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
          <img  
            className="profileCoverImg"
            src="assets/post/3.jpeg"
            alt=""
          />
          <img
            className="profileUserImg"
            src="assets/person/1.jpeg"
            alt=""
          />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Ahmed Beryl</h4>
            <span className="profileInfoDesc">Hello my friends!</span>
        </div>
      </div>
      </div>
    </div>
);
}
