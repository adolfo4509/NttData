import Logo from "../../assets/LogoNttData.png";
import "../../css/styles.css";

export const NavBar = () => {
  return (
    <div>
      <div className="navBar">
        <a href="https://es.nttdata.com/" target="_blank" rel="noreferrer">
          <img className="logo" src={Logo} alt="" />
        </a>
        <div className="links">
          <a
            href="https://es.nttdata.com/services/application-services"
            target="_blank"
            rel="noreferrer"
          >
            Services & Products
          </a>
          <a
            href="https://es.nttdata.com/services/application-services"
            target="_blank"
            rel="noreferrer"
          >
            Industries
          </a>
          <a
            href="https://es.nttdata.com/services/application-services"
            target="_blank"
            rel="noreferrer"
          >
            Insights
          </a>
          <a href="https://es.nttdata.com/esg" target="_blank" rel="noreferrer">
            Sustainability & ESG{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
