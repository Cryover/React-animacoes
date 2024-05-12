import { FadeInLeftNav, Ul, Li, Img, A } from "../style/Styled";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FadeInLeftNav>
      <Img
        logo="true"
        src="https://scontent.fpoa4-1.fna.fbcdn.net/v/t39.30808-6/290318704_5359916257408612_190275830454723261_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_REIHEsGcAsQ7kNvgGryit7&_nc_ht=scontent.fpoa4-1.fna&oh=00_AYBIiTTGo9REeQkUFXWqt-pHwuili4z70HTNpSTF9iRMjQ&oe=66471D4C"
        alt="Logo_Jal"
        dragConstraints={{ left: 10, right: 10, down: false, up: false }}
        dragMomentum={false}
      ></Img>
      <Ul ulNav>
        <Li>
          <A nava="true" href="#home" onClick={ScrollToTop}>
            Home
          </A>
        </Li>
        <Li>
          <A nava="true" href="#flights">
            Flights
          </A>
        </Li>
        <Li>
          <A nava="true" href="#contact">
            Contact
          </A>
        </Li>
      </Ul>
      <A fabar="true" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </A>
      <FadeInLeftNav
        mobilenav="true"
        layout
        style={{
          display: isOpen ? "flex" : "none",
          transition: "0.3s",
        }}
      >
        <Ul ulnavmobile>
          <Li>
            <A nava="true" href="#home" onClick={ScrollToTop}>
              Home
            </A>
          </Li>
          <Li>
            <A nava="true" href="#flights">
              Flights
            </A>
          </Li>
          <Li>
            <A nava="true" href="#contact">
              Contact
            </A>
          </Li>
        </Ul>
      </FadeInLeftNav>
    </FadeInLeftNav>
  );
}

export default NavBar;
