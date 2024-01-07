import "../assets/style/css/main/footer.css";

function Footer(props) {
  return (
    <footer>
      <p className={props.className}>
        Copyright &copy; 2020-{props.currentYear}. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
