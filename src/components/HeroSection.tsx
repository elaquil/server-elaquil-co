import { useContext } from "react";
import "./HeroSection.css";
import ThemeContext from "../context/ThemeContext";

const HeroSection = () => {

  const themeProviderItems = useContext(ThemeContext);
  const { theme } = themeProviderItems;


  return (
    <div className="hero-section">
      <p>
        i'm a competent web engineer (<i className="nf nf-md-language_typescript"></i>,<i className="nf nf-seti-c_sharp"></i>
        ,<i className="nf nf-seti-react"></i>,<i className="nf nf-dev-angular"></i>,<i className="nf nf-dev-html5"></i>,<i className="nf nf-dev-css3"></i>) 
        and motion designer (<img className={"icon "+(theme)} src="Adobe_After_Effects_CC_icon.svg"></img>,<img className={"icon "+(theme)} src="Adobe_Photoshop_CC_icon.svg"></img>,<i className="nf nf-md-blender_software"></i>,<i className="nf nf-seti-python"></i>). 
        i'm studying to complete a b.eng in design and technology innovation, 
        along with a b.sc in computer science (artificial intelligence). i'm interested in the intersection 
        between digital and analogue, and where human creativity can interface with intelligent systems for 
        creative applications. i've worked with a variety of clients with different needs. i hope my work interests 
        you, you may reach me by any of the means provided.
      </p>
    </div>
  );
};

export default HeroSection;
