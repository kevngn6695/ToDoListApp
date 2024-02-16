import PropTypes from "prop-types";

// PropTypes for the Body component
export const BodyProps = {
  className: PropTypes.string, // CSS class name for styling
  children: PropTypes.node, // Content to be displayed inside the Body
};

// PropTypes for the CustomButton component
export const CustomButtonProps = {
  className: PropTypes.string, // CSS class name for styling
  onClick: PropTypes.func, // Function to be executed on button click
  children: PropTypes.node, // Content to be displayed inside the button
};

// PropTypes for the CustomCloseSymbol component
export const CustomCloseSymbolProps = {
  className: PropTypes.string,
};

// PropTypes for the CustomDeleteBin component
export const CustomDeleteBinProps = {
  className: PropTypes.string,
  classNameWrapper: PropTypes.string,
};

// PropTypes for the CustomDisplayContainer component
export const CustomDisplayContainerProps = {
  className: PropTypes.string, // CSS class name for styling
  children: PropTypes.node, // Content to be displayed inside the container
};

// PropTypes for the CustomEditModal component
export const CustomEditModalProps = {
  className: PropTypes.string, // CSS class name for styling
  classNameContainer: PropTypes.string, // CSS class name for modal container
  classNameModal: PropTypes.string, // CSS class name for modal
  setModalOpen: PropTypes.func, // Function to control the modal open state
};

// PropTypes for the CustomMainContainer component
export const CustomMainContainerProps = {
  className: PropTypes.string, // CSS class name for styling
  children: PropTypes.node, // Content to be displayed inside the container
};

// PropTypes for the CustomMenuContainer component
export const CustomMenuContainerProps = {
  className: PropTypes.string, // CSS class name for styling
  isMenuOpen: PropTypes.bool, // Boolean to indicate if menu is open
  modalOpen: PropTypes.bool, // Boolean to indicate if modal is open
  onClick: PropTypes.func, // Function to be executed on menu click
};

// PropTypes for the CustomMenuSymbol component
export const CustomMenuSymbolProps = {
  className: PropTypes.string, // CSS class name for styling
};

// PropTypes for the CustomModalContainer component
export const CustomModalContainerProps = {
  className: PropTypes.string, // CSS class name for styling
  description: PropTypes.string, // Description of the task
  todoId: PropTypes.number, // ID of the task
  onClick: PropTypes.func, // Function to be executed on container click
  setModalOpen: PropTypes.func, // Function to control the modal open state
};

// PropTypes for the CustomTextDisplay component
export const CustomTextDisplayProps = {
  className: PropTypes.string, // CSS class name for styling
  classNameModal: PropTypes.string, // CSS class name for modal
  modalOpen: PropTypes.bool, // Boolean to indicate if modal is open
  // setModalOpen: PropTypes.func, // Function to control the modal open state
};

// PropTypes for the CustomTextHeading component
export const CustomTextHeadingProps = {
  className: PropTypes.string, // CSS class name for styling
  children: PropTypes.node, // Content to be displayed inside the heading
  h1: PropTypes.bool, // Boolean to indicate if heading is h1
  h2: PropTypes.bool, // Boolean to indicate if heading is h2
  h3: PropTypes.bool, // Boolean to indicate if heading is h3
  h4: PropTypes.bool, // Boolean to indicate if heading is h4
  h5: PropTypes.bool, // Boolean to indicate if heading is h5
  h6: PropTypes.bool, // Boolean to indicate if heading is h6
};

// PropTypes for the CustomTextInput component
export const CustomTextInputProps = {
  classNameForm: PropTypes.string, // CSS class name for styling form
  classNameInput: PropTypes.string, // CSS class name for styling input
  type: PropTypes.string.isRequired, // Input type (e.g., text, password)
  placeholder: PropTypes.string.isRequired, // Placeholder text for the input
  description: PropTypes.string.isRequired, // Description of the input
  onChange: PropTypes.func, // Function to handle input change
  onSubmit: PropTypes.func, // Function to handle form submission
};

// PropTypes for the Footer component
export const FooterProps = {
  className: PropTypes.string, // CSS class name for styling
};

// PropTypes for the Header component
export const HeaderProps = {
  className: PropTypes.string, // CSS class name for styling
  children: PropTypes.node, // Content to be displayed inside the Header
};
