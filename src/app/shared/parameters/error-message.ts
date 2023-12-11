export interface IControlErrorMessages {
  [key: string]: string;
}

// SIGNIN
export const USERNAME_LOGIN_ERROR_MESSAGES = {
  required: "Ingresa el nombre de usuario",
  usernameNotFound: "El nombre de usuario no existe"
}
export const PASSWORD_LOGIN_ERROR_MESSAGES = {
  required: "La contraseña es requerida",
  pattern: "La contraseña debe tener como mínimo un caracter especial, un numérico y una mayúscula",
  minLength: "La contraseña debe tener mínimo 8 caracteres"
}
// SIGNUP
export const USERNAME_SIGNUP_ERROR_MESSAGES = {
  required: "Ingresa el nombre de usuario",
  existUsername: "El nombre de usuario ya existe"
};
export const EMAIL_SIGNUP_ERROR_MESSAGES = {
  required: "Ingresa tu correo electrónico",
  email: "El correo debe contener los caracteres “@” y “.”",
};

export const PASSWORD_SIGNUP_ERROR_MESSAGES = {
  required: "Ingresa la confirmación de la contraseña",
  passwordMismatch: "La contraseña debe coincidir"
}

export const CONFIRM_PASSWORD_SIGNUP_ERROR_MESSAGES = {
  required: "Ingresa la confirmación de la contraseña",
  passwordMismatch: "La contraseña debe coincidir"
}

