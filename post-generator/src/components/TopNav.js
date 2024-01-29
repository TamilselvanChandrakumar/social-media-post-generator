import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import "./Style.css";

const TopNav = () => {
  return (
    <nav className="navContainer">
      <div className="navInner">
        <div className="logo">
          Social
          <span>Post</span>
          <a
            href="https://github.com/TamilselvanChandrakumar/social-media-post-generator.git"
            target="_blank"
          >
            <AiFillGithub color="black"></AiFillGithub>
          </a>
        </div>
        <div className="downloadBtn">
          <MdOutlineFileDownload />
          download
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
