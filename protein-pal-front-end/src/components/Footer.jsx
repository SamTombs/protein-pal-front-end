import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>
      <div className="flex justify-end bg-white items-center px-4">
          <img src={logo}
          alt="logo"
          className="h-20" />
      </div>
    </>
  );
};

export default Footer;