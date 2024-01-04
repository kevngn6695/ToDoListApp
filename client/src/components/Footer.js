import "../assets/style/css/main/footer.css";

function Footer({ className }) {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <p className={className}>
        Copyright &copy; 2020-{currentYear}. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
