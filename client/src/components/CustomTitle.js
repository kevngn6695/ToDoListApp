import "../assets/style/css/components/customtitle.css";

import React, { useEffect } from "react";

function CustomTitle(props) {
  useEffect(() => {
    document.title = props.children;
    return () => {
      document.title = "React App";
    };
  }, [props.children]);

  return <title className={props.className}>{props.children}</title>;
}

export default React.memo(CustomTitle);
