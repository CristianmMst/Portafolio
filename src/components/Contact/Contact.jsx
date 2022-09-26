import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({
      name: "",
      email: "",
      text: "",
    });
  };

  return (
    <Element name="contact" className="contact">
      <Fade direction="up" duration={3000}>
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
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={(event) => handleChange(event)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electronico"
            value={form.email}
            onChange={(event) => handleChange(event)}
            required
          />
          <textarea
            rows="10"
            cols="40"
            name="text"
            placeholder="Tu mensaje"
            onChange={(event) => handleChange(event)}
            value={form.text}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Element>
  );
};

export default Contact;
