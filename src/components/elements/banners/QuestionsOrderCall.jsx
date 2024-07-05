import React from "react";
import questions from "./../../../img/questions.jpg";
import OrderCallButton from "../buttons/orderCallButton/OrderCallButtton";
import "./questionsOrderCall.css";
export default function QuestionsOrderCall() {
  return (
    <div className="questions">
      <img className="questions__img" src={questions} alt="questions" />
      <div className="questions__info">
        <div className="questions__title">Появились вопросы о товаре?</div>
        <p className="questions__descriprion">
          Наш консультант поможет Вам подобрать печь и ответит на любой ваш
          вопрос
        </p>
        <OrderCallButton additionalClass="order__button--red" />
      </div>
    </div>
  );
}
