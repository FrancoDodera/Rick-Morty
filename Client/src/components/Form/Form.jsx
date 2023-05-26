import style from "./Form.module.css";
import gif from "../../assets/form.gif";
import { useState } from "react";
import validate from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    validate({ ...userData, [property]: value }, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.container}>
      <img className={style.image} src={gif} alt="forms" />
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="email" className={style.label}>
          Email:
        </label>
        <input
          onChange={handleInputChange}
          value={userData.email}
          type="text"
          name="email"
          className={style.input}
        />
        <p className={style.error}>{errors.email}</p>
        <br />
        <label htmlFor="password" className={style.label}>
          Password:
        </label>
        <input
          onChange={handleInputChange}
          value={userData.password}
          type="password"
          name="password"
          className={style.input}
        />
        <p className={style.error}>{errors.password}</p>
        <br />
        <button type="submit" className={style.button}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Form;
