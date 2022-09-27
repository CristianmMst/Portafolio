import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { useRef } from "react";
import emailJs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const name = useRef();
  const text = useRef();
  const email = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    emailJs.sendForm(
      "service_yg3rrup",
      "template_e5wu4pm",
      event.target,
      "ne0Tt5mezDB9d2EEa"
    );
    name.current.value = "";
    email.current.value = "";
    text.current.value = "";
  };

  return (
    <Element name="contact" className="contact">
      <Fade direction="up" duration={2000}>
        <div className="tittle">
          <div>
            <h1>contactame</h1>
            <div className="subline"></div>
          </div>
        </div>
      </Fade>
      <div className="formContainer">
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            ref={name}
            type="text"
            name="name"
            placeholder="Nombre"
            required
          />
          <input
            ref={email}
            type="email"
            name="email"
            placeholder="Correo Electronico"
            required
          />
          <textarea
            ref={text}
            rows="10"
            cols="40"
            name="text"
            placeholder="Tu mensaje"
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="redes">
        <a href="https://github.com/CristianmMst" target="_blank">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-mora-6342a4248/"
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
      </div>
    </Element>
  );
};

export default Contact;
