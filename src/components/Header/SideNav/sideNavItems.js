import React from "react";
import { Link } from "react-router-dom";

/// styles
import style from "./sideNav.css";
///fontAwesome
import {
  faHome,
  faEnvelopeOpenText,
  faVideo,
  faSignInAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sideNavItems = () => {
  const items = [
    {
      type: style.option,
      icon: faHome,
      text: "Home",
      link: "/"
    },
    {
      type: style.option,
      icon: faEnvelopeOpenText,
      text: "News",
      link: "/news"
    },
    {
      type: style.option,
      icon: faVideo,
      text: "Videos",
      link: "/videos"
    },
    {
      type: style.option,
      icon: faSignInAlt,
      text: "SignIn",
      link: "/sign-in"
    },
    {
      type: style.option,
      icon: faSignOutAlt,
      text: "SignOut",
      link: "/sign-out"
    }
  ];
  const showItems = () => {
    return items.map((item, i) => {
      return (
        <div className={item.type} key={i}>
          <Link to={item.link}>
            <FontAwesomeIcon icon={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });
  };

  return <div>{showItems()}</div>;
};
export default sideNavItems;
