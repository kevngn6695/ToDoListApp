import PropTypes from "prop-types";

export const HeaderProps = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const BodyProps = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const CustomButtonProps = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export const CustomDisplayContainerProps = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const CustomEditModalProps = {
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameModal: PropTypes.string,
  setModalOpen: PropTypes.func,
};

export const CustomMainContainerProps = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const CustomMenuContainerProps = {
  className: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  modalOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export const CustomMenuSymbolProps = {
  className: PropTypes.string,
};

export const CustomModalContainerProps = {
  className: PropTypes.string,
  description: PropTypes.string,
  todoId: PropTypes.number,
  onClick: PropTypes.func,
  setModalOpen: PropTypes.func,
};

export const CustomTextDisplayProps = {
  className: PropTypes.string,
  classNameModal: PropTypes.string,
  modalOpen: PropTypes.bool,
  // setModalOpen: PropTypes.func,
};

export const CustomTextHeadingProps = {
  className: PropTypes.string,
  children: PropTypes.node,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
};

export const CustomTextInputProps = {
  classNameForm: PropTypes.string,
  classNameInput: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export const FooterProps = {
  className: PropTypes.string,
};
