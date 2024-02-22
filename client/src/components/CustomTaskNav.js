import React from "react";

import CustomLink from "./CustomLink";

import { CustomListProps } from "../utils/proptype";

import "../assets/style/css/components/customnavbar.sass";

function CustomTaskNav(props) {
  return (
    <ul className={props.classNameList}>
      <li className={props.classNameListItem}>
        <CustomLink className={props.classNameLink} href="/">
          Upcoming
        </CustomLink>
      </li>
      <li className={props.classNameListItem}>
        <CustomLink className={props.classNameLink} href="/">
          Today
        </CustomLink>
      </li>
      <li className={props.classNameListItem}>
        <CustomLink className={props.classNameLink} href="/">
          Calendar
        </CustomLink>
      </li>
      <li className={props.classNameListItem}>
        <CustomLink className={props.classNameLink} href="/">
          Note
        </CustomLink>
      </li>
    </ul>
  );
}

CustomTaskNav.propTypes = CustomListProps;

export default React.memo(CustomTaskNav);
