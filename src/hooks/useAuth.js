import { useSelector } from "react-redux";

export function useAuth() {
  const user = useSelector((state) => state.user);

  if (!user) {
    // Если состояние user не определено, возвращаем пустые значения
    return {
      isAuth: false,
      email: "",
      token: "",
      id: "",
    };
  }
  // Если состояние user определено, возвращаем данные пользователя
  const { email, token, id } = user;
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
