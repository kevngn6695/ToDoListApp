import "../assets/style/css/footer.css";

function Footer({ className }) {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className={className}>
      Copyright &copy; 2020-{currentYear}. All Rights Reserved.
    </footer>
  );
}

export default Footer;
