import React, { useState } from "react";
import { BiRename, BiUserPin, BiUserPlus } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { PiTextT, PiSelectionBackgroundBold } from "react-icons/pi";
import { RiRoundedCorner } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Style.css";
import { socialicons } from "../data/data";

const SideNav = ({ userDetails, setUserDetails }) => {
  const [show, setShow] = useState(6);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      console.log(fileReader.result);
      setUserDetails({ ...userDetails, profilePic: fileReader.result });
    };
  };
  return (
    <div className="sidenavcontainer">
      <ul className="navitems">
        <li>
          <div className="navitem" onClick={() => setShow(1)}>
            <div className="navtitle">
              <BiRename size={25}></BiRename>
              name
            </div>
            <div>
              <MdOutlineKeyboardArrowDown
                size={25}
              ></MdOutlineKeyboardArrowDown>
            </div>
          </div>
          {show === 1 && (
            <div className="innernavitems">
              <input
                type="text"
                className="inputfield"
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              ></input>
            </div>
          )}
        </li>
        <li>
          <div className="navitem" onClick={() => setShow(2)}>
            <div className="navtitle">
              <BiRename size={25}></BiRename>
              User Name
            </div>
            <MdOutlineKeyboardArrowDown size={25}></MdOutlineKeyboardArrowDown>
          </div>
          {show === 2 && (
            <div className="innernavitems">
              <input
                type="text"
                className="inputfield"
                value={userDetails.userName}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, userName: e.target.value })
                }
              ></input>
            </div>
          )}
        </li>
        <li>
          <div className="navitem" onClick={() => setShow(3)}>
            <div className="navtitle">
              <BiRename size={25}></BiRename>
              Profile pic
            </div>
            <div>
              <MdOutlineKeyboardArrowDown
                size={25}
              ></MdOutlineKeyboardArrowDown>
            </div>
          </div>
          {show === 3 && (
            <div className="innernavitems">
              <input type="file" onChange={handleFileChange}></input>
            </div>
          )}
        </li>
        <li>
          <div className="navitem" onClick={() => setShow(4)}>
            <div className="navtitle">
              <BiRename size={25}></BiRename>
              Select Platform
            </div>
            <div>
              <MdOutlineKeyboardArrowDown
                size={25}
              ></MdOutlineKeyboardArrowDown>
            </div>
          </div>
          {show === 4 && (
            <ul className="dropdown">
              {socialicons.map((icon) => {
                <li
                  key={icon.id}
                  className={`${
                    userDetails.socialPlatform === icon.id && "active"
                  }`}
                  onClick={() => {
                    setUserDetails({
                      ...userDetails,
                      socialPlatform: icon.id,
                    });
                  }}
                >
                  {" "}
                  {icon.name}
                </li>;
              })}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
