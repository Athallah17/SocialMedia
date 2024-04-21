import "./sidebar.css";
import {
  Home,
  Group,
  EmojiPeople,
  PhotoSizeSelectActual,
} from "@material-ui/icons";
import { Users } from "../../dummyData";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            < EmojiPeople className="sidebarIcon" />
            <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <PhotoSizeSelectActual className="sidebarIcon" />
            <span className="sidebarListItemText">Media</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        {Users.map((user) => (
            <li key={user.id} className="sidebarFriendListItem">
              <img src={user.profilePicture} alt={user.username} className="sidebarFriendImg" />
              <span className="sidebarFriendName">{user.username}</span>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
