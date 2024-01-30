import React from "react";
import { MdVerified } from "react-icons/md";
import { bgbackground } from "../data/bg";
import { socialicons } from "../data/data";
const MainComponent = ({ userDetails }) => {
  const {
    name,
    userName,
    profilePic,
    socialPlatform,
    content,
    selectBg,
    rounded,
  } = userDetails;
  const getGradientById = (id) => {
    return bgbackground.find((item) => item.id === id)?.gradient || null;
  };
  const getIconsById = (id) => {
    return socialicons.find((item) => item.id === id)?.icon || null;
  };
  const getFromattedDataTime = () => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const currentDate = new Date();
    return currentDate.toLocaleString("en-us", options);
  };
  return (
    <div className="home-container">
      <div className="home-inner">
        <div
          className="previewArea"
          style={{ backgroundImage: `${getGradientById(selectBg)}` }}
        >
          <div className="snippet" style={{ borderRadius: `${rounded}px` }}>
            <div className="snippetheader">
              <div className="leftcontent">
                <img src={profilePic} alt=""></img>
                <div className="snippetname">
                  <h3>
                    {name}
                    <MdVerified size={15} color="#3797f0"></MdVerified>
                  </h3>
                  <p>@{userName}</p>
                </div>
              </div>
              <div className="rightcontent">{getIconsById(socialPlatform)}</div>
            </div>
            <pre className="snippetcontent">{content}</pre>
            <div className="snippetfooter">
              <p>{getFromattedDataTime()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
