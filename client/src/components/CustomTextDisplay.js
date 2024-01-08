import "../assets/style/css/components/customtextdisplay.css";

import CustomEditModal from "./CustomEditModal";

function CustomTextDisplay(props) {
  const customEditModalProps = {
    className: props.classNameContainer,
  };
  return <CustomEditModal {...customEditModalProps} />;
}

export default CustomTextDisplay;
