const validate = (userData, errors, setErrors) => {
  //EMAIL Validation
  if (!userData.username)
    setErrors({ ...errors, username: "Por favor complete este campo" });
  else if (!userData.username.length > 35)
    setErrors({ ...errors, username: "No puede superar los 35 caracteres" });
  else if (
    !/^([\da-z_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(userData.username)
  ) {
    setErrors({ ...errors, username: "Email invalido" });
  } else {
    setErrors({ ...errors, username: "" });
  }

  //PASSWORD validation
  if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors, password: "" });
  } else if (!/\d/.test(userData.password)) {
    setErrors({ ...errors, password: "Debe contener al menos un numero" });
  } else {
    setErrors({ ...errors, password: "" });
  }
};

export default validate;
