export const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  emailDirty: false,
  passwordDirty: false,
  confirmDirty: false,
  emailError: "Email не может быть пустым",
  passwordError: "Пароль не может быть пустым",
  confirmError: "Пароли должны совпадать",
  formValid: false,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload, emailError: "" };
    case "SET_PASSWORD":
      return { ...state, password: action.payload, passwordError: "" };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload, confirmError: "" };
    case "SET_EMAIL_DIRTY":
      return { ...state, emailDirty: true };
    case "SET_PASSWORD_DIRTY":
      return { ...state, passwordDirty: true };
    case "SET_CONFIRM_DIRTY":
      return { ...state, confirmDirty: true };
    case "SET_EMAIL_ERROR":
      return { ...state, emailError: action.payload };
    case "SET_PASSWORD_ERROR":
      return { ...state, passwordError: action.payload };
    case "SET_CONFIRM_ERROR":
      return { ...state, confirmError: action.payload };
    case "SET_FORM_VALID":
      return { ...state, formValid: action.payload };
    default:
      return state;
  }
};

export default formReducer;
