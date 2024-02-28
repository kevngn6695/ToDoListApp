import React from "react";

import CustomLink from "./CustomLink";

import { capitalizeFirst } from "../services/capitalizefirst";

import { CustomListProps } from "../utils/proptype";

import "../assets/style/css/components/customnavbar.sass";

function CustomTaskNav(props) {
  return (
    <ul className={props.classNameList} {...props}>
      {props.urlLink.map((urlLink) => (
        <li className={props.classNameListItem}>
          <CustomLink className={props.classNameLink} href={urlLink.url}>
            {capitalizeFirst(urlLink.text)}
          </CustomLink>
        </li>
      ))}
    </ul>
  );
}

CustomTaskNav.propTypes = CustomListProps;

export default React.memo(CustomTaskNav);
