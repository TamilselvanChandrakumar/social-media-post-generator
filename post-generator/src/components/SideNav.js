import React, { useState } from "react";
import { BiRename, BiUserPin, BiUserPlus } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { PiTextT, PiSelectionBackgroundBold } from "react-icons/pi";
import { RiRoundedCorner } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Style.css";
import { socialicons } from "../data/data";
import { bgbackground } from "../data/bg";

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
              <BiUserPin size={25}></BiUserPin>
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
              <BiUserPlus size={25}></BiUserPlus>
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
              <TiSocialTwitter size={25}></TiSocialTwitter>
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
                return (
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
                  </li>
                );
              })}
            </ul>
          )}
        </li>
        <li>
          <div className="navitem" onClick={() => setShow(2)}>
            <div className="navtitle">
              <BiUserPin size={25}></BiUserPin>
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
          <div className="navitem" onClick={() => setShow(5)}>
            <div className="navtitle">
              <PiTextT size={25}></PiTextT>
              Profile pic
            </div>
            <div>
              <MdOutlineKeyboardArrowDown
                size={25}
              ></MdOutlineKeyboardArrowDown>
            </div>
          </div>
          {show === 5 && (
            <div className="innernavitems">
              <textarea
                value={userDetails.content}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    content: e.target.value,
                  })
                }
              ></textarea>
            </div>
          )}
        </li>
        <li>
          <div className="navitem" onClick={() => setShow(6)}>
            <div className="navtitle">
              <PiSelectionBackgroundBold size={25}></PiSelectionBackgroundBold>
              Select bg
            </div>
            <MdOutlineKeyboardArrowDown size={25}></MdOutlineKeyboardArrowDown>
          </div>
          {show === 6 && (
            <div className="bgcolors">
              {bgbackground.map((bg) => {
                return (
                  <div
                    onClick={() =>
                      setUserDetails({ ...userDetails, selectBg: bg.id })
                    }
                    key={bg.id}
                    className="bgcolor"
                    style={{ backgroundImage: `${bg.gradient}` }}
                  ></div>
                );
              })}
            </div>
          )}
        </li>
        <li>
          <div className="navitem" onClick={() => setShow(7)}>
            <div className="navtitle">
              <RiRoundedCorner size={25}></RiRoundedCorner>
              Rounded corners
            </div>
            <MdOutlineKeyboardArrowDown size={25}></MdOutlineKeyboardArrowDown>
          </div>
          {show === 7 && (
            <div className="innernavitems">
              <input
                type="range"
                className="inputfield"
                value={userDetails.rounded}
                min={0}
                max={25}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, rounded: e.target.value })
                }
              ></input>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
