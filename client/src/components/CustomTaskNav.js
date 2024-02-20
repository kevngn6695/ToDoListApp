import React from "react";

import CustomLink from "./CustomLink";

import { CustomListProps } from "../utils/proptype";

import "../assets/style/css/components/customlink.sass";

function CustomTaskNav(props) {
  return (
    <ul className={props.classNameList}>
      <li className={props.classNameListItem}>
        <CustomLink>Upcoming</CustomLink>
      </li>
      <li className={props.classNameListItem}>
        <CustomLink>Today</CustomLink>
      </li>
      <li className={props.classNameListItem}>
        <CustomLink>Calendar</CustomLink>
      </li>
      <li className={props.classNameListItem}>
        <CustomLink>Note</CustomLink>
      </li>
    </ul>
  );
}

CustomTaskNav.propTypes = CustomListProps;

export default React.memo(CustomTaskNav);
