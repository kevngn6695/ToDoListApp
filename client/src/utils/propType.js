import PropTypes from "prop-types";

// PropTypes for the Body component
export const BodyProps = {
  className: PropTypes.string.isRequired, // CSS class name for styling
  children: PropTypes.node.isRequired, // Content to be displayed inside the Body
};

// PropTypes for the CustomButton component
export const CustomButtonProps = {
  className: PropTypes.string.isRequired, // CSS class name for styling
  onClick: PropTypes.func.isRequired, // Function to be executed on button click
  children: PropTypes.node.isRequired, // Content to be displayed inside the button
};

// PropTypes for the CustomCloseSymbol component
export const CustomCloseSymbolProps = {
  className: PropTypes.string.isRequired,
};

// PropTypes for the CustomDeleteBin component
export const CustomDeleteBinProps = {
  className: PropTypes.string.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
};

// PropTypes for the CustomDisplayContainer component
export const CustomDisplayContainerProps = {
  className: PropTypes.string.isRequired, // CSS class name for styling
  children: PropTypes.node.isRequired, // Content to be displayed inside the container
};

// PropTypes for the CustomEditModal component
export const CustomEditModalProps = {
  className: PropTypes.string.isRequired, // CSS class name for styling
  classNameContainer: PropTypes.string.isRequired, // CSS class name for modal container
  classNameDescriptionContainer: PropTypes.string.isRequired, // CSS class name for description container
  classNameModal: PropTypes.string.isRequired, // CSS class name for modal
  setModalOpen: PropTypes.func.isRequired, // Function to control the modal open state
};

export const CustomLinkProps = {
  className: PropTypes.string.isRequired, // CSS class name for links
};

// PropTypes for the CustomMainContainer component
export const CustomMainContainerProps = {
  className: PropTypes.string.isRequired, // CSS class name for styling
  children: PropTypes.node.isRequired, // Content to be displayed inside the container
};

// PropTypes for the CustomMenuContainer component
export const CustomMenuContainerProps = {
  className: PropTypes.string.isRequired, // CSS class name for styling
  isMenuOpen: PropTypes.bool.isRequired, // Boolean to indicate if menu is open
  modalOpen: PropTypes.bool, // Boolean to indicate if modal is open
  onClick: PropTypes.func.isRequired, // Function to be executed on menu click
};

// PropTypes for the CustomMenuSymbol component
export const CustomMenuSymbolProps = {
  className: PropTypes.string.isRequired, // CSS class name for styling
};

// PropTypes for the CustomModalContainer component
export const CustomModalContainerProps = {
  className: PropTypes.string, // CSS class name for styling
  description: PropTypes.string.isRequired, // Description of the task
  todoId: PropTypes.number.isRequired, // ID of the task
  onClick: PropTypes.func.isRequired, // Function to be executed on container click
  setModalOpen: PropTypes.func.isRequired, // Function to control the modal open state
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
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]), // Indicates heading level
};

// PropTypes for the CustomTextInput component
export const CustomTextInputProps = {
  classNameForm: PropTypes.string, // CSS class name for styling form
  classNameInput: PropTypes.string, // CSS class name for styling input
  type: PropTypes.string.isRequired, // Input type (e.g., text, password)
  placeholder: PropTypes.string.isRequired, // Placeholder text for the input
  description: PropTypes.string.isRequired, // Description of the input
  onChange: PropTypes.func.isRequired, // Function to handle input change
  onSubmit: PropTypes.func.isRequired, // Function to handle form submission
};

// PropTypes for the Footer component
export const FooterProps = {
  className: PropTypes.string.isRequired, // CSS class name for styling
};

// PropTypes for the Header component
export const HeaderProps = {
  className: PropTypes.string.isRequired, // CSS class name for styling
  children: PropTypes.node.isRequired, // Content to be displayed inside the Header
};
