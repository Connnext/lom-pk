import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useConfirmEmailQuery } from "./../redux/services/userService";

export default function Confirm() {
  const { token } = useParams();
  const { data, isLoading, error } = useConfirmEmailQuery(token);
  const navigate = useNavigate();

  console.log(`наш токен подтверждения почты: ${token}`);
  useEffect(() => {
    if (data?.access_token) {
      localStorage.setItem("token", data.access_token);
      navigate("/");
    }
  }, [data, navigate]);
  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }
  return (
    <div>
      <h1>Подтверждение аккаунта</h1>
      <p>{console.log(data)}</p>
    </div>
  );
}
