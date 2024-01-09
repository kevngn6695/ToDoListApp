import "../assets/style/css/components/custommodalcontainer.css";

import CustomTextHeading from "./CustomTextHeading";
import CustomTextInput from "./CustomTextInput";

function CustomModalContainer(props) {
  const customTextHeading = {
    className: "to-do-edit-text-heading",
  };
  const customTextInput = {
    classNameForm: "to-do-edit-text-input-form",
    classNameInput: "to-do-edit-text-input",
    type: "text",
    placeholder: props.description,
  };
  return (
    <section className={props.className}>
      <CustomTextHeading {...customTextHeading}>Task</CustomTextHeading>
      <CustomTextInput {...customTextInput} />
    </section>
  );
}

export default CustomModalContainer;
