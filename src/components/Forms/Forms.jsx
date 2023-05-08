import { useState } from "react";

const Forms = () => {
  const [forms, setForms] = useState({ email: "", password: "" });

  const handlerFormsChange = (event) => {
    setForms({
      ...forms,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <h1>Soy el primer Form!!</h1>
        <label htmlFor="email">Email:</label>
        <input
          value={forms.email}
          type="text"
          placeholder="Ingrese email"
          name="email"
          onChange={handlerFormsChange}
        />

        <br />

        <label htmlFor="password">Password</label>
        <input
          value={forms.password}
          type="password"
          placeholder="Ingrese contraseña"
          name="password"
          onChange={handlerFormsChange}
        />
        <br />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
};

export default Forms;
