
function validate({ formData }) {
  let error = {};

  //first name validation
  if (!formData?.first_name) {
    error.first_name = "Por favor ingresa un nombre";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData?.first_name)) {
    error.first_name = "El nombre solo pude contener letras y espacios";
  }

  //last name  validation
  if (!formData?.last_name) {
    error.last_name = "Por favor, ingresa un apellido";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData?.last_name)) {
    error.last_name = "El apellido solo puede contener letras y espacios.";
  }

  //phone number validation

  if (!/^[a-zA-Z0-9]{0,10}$/.test(formData?.phone_number)) {
    error.phone_number = "El teléfono debe de ser de 10 digitos";
  }

  // email validation
  if (!formData?.email) {
    error.email = "Por favor, ingresa tu correo electronico";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData?.email)
  ) {
    error.email =
      "El email solo puede contener letras, números, puntos, guines, y guión bajo";
  }

  //validacion Password
  if (!formData?.password) {
    error.password = "Crea una contraseña";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(
      formData?.password
    )
  ) {
    error.password =
      "El password debe tener como mínimo 8 caracteres, al menos una mayúscula y un número";
  }

  //repeat password valifation
  if (formData?.password !== formData?.repeatPassword) {
    error.repeatPassword = "Las contraseñas no coinciden";
  }

  return error;
}

export default validate;
