import { message } from "antd";

export const errorMessageLogin = () => {
  message.error("Войдите в профиль", [1]);
};
export const successAddInBasket = () => {
  message.success("Товар успешно добавлен в корзину", [1]);
};
export const alreadyInBasket = () => {
  message.error("Товар уже есть в корзине", [1]);
};
export const successAddCategories = () => {
  message.success("Категория добавлена!", [1]);
};
export const errorAddCategories = () => {
  message.error("Заполните все данные!", [1]);
};
export const successAddGoods = () => {
  message.success("Товар добавлен!", [1]);
};
export const errorAddGoods = () => {
  message.error("Заполните все данные!", [1]);
};
export const errorGetSubcategories = () => {
  message.error("Укажите категорию", [3]);
};
export const successConfirm = () => {
  message.success("Заказ успешно оформлен!", [3]);
};
export const successRemove = () => {
  message.success("Товар успешно удален!", [2]);
};
export const successAdd = () => {
  message.success("Товар добавлен в корзину", [2]);
};
export const successIncrement = () => {
  message.success("+1", [2]);
};
export const successSaveChanges = () => {
  message.success("Изменения успешно сохранены", [3]);
};
export const successDecrement = () => {
  message.success("-1", [2]);
};
export const successDelete = () => {
  message.success("Товар удален из корзины", [1]);
};
export const successChangeGoods = () => {
  message.success("Товар отредактирован!", [1]);
};
export const successOrderCall = () => {
  message.success("Заявка оставлена!", [1]);
};
export const successMessageAdmin = () => {
  message.success("Вы вошли как администратор", [2]);
};
export const successMessageCustomer = () => {
  message.success("Вы вошли как пользователь", [2]);
};
export const errorNotVerifiedLogin = () => {
  message.error("Пользователь не подтвердил почту", [2]);
};
export const errorBadCredentialsLogin = () => {
  message.error("Данного аккаунта не существует. Зарегестрируйтесь", [2]);
};
export const successMessageSaveUserData = () => {
  message.success("Ваши данные успешно сохранены", [4]);
};
export const successMessageSignUp = () => {
  message.success(
    "Вы успешно зарегестрировались, необходимо войти, используя логин и пароль",
    [8]
  );
};
export const successMessageResetPassword = () => {
  message.success(
    "Вы успешно изменили пароль, необходимо войти, используя логин и новый пароль",
    [8]
  );
};
export const successMessageLogout = () => {
  message.success("Вы вышли из профиля", [2]);
};
export const successRequestVerifyMessage = (email) => {
  message.success(`Письмо успешно отправлено, проверьте вашу почту ${email}`, [
    5,
  ]);
};
export const successRecoverPasswordMessage = (email) => {
  message.success(
    `Письмо для восстановления пароля успешно для отправлено, проверьте вашу почту ${email}`,
    [5]
  );
};
export const errorMessageAddToBasket = () => {
  message.error("Количество не может быть меньше 1", [3]);
};
export const errorWithText = (string) => {
  message.error(`${string}`, [1]);
};
export const success = (string) => {
  message.success(`${string}`, [1]);
};
export const errorMessage = () => {
  message.error("Введите коректный логин и пароль или зарегестрирустесь", [2]);
};
export const errorUserLogIn = () => {
  message.error("Сначала нужно выйти из профиля, чтобы зайти в новый", [1]);
};
