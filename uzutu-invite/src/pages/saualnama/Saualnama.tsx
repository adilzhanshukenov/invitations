import React from "react";

const Saualnama = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="top-word">Сауалнама</h1>
      <h3>
        ТӨМЕНДЕГІ САУАЛНАМАНЫ ТОЛТЫРЫП; ТОЙҒА ҚАТЫСУЫҢЫЗДЫ РАСТАУЫҢЫЗДЫ
        СҰРАЙМЫЗ.
      </h3>

      <p>АТЫ-ЖӨНІҢІЗДІ ЖАЗЫҢЫЗ</p>
      <input type="text" name="guestName" placeholder="Аты-Жөні" />
      <label>Тойға келесіз бе?</label>
      <select name="answer" id="answer">
        <option>Иә. Әрине келемін</option>
        <option>Жұбайымен келемін</option>
        <option>Өкінішке орай, келе алмаймын</option>
      </select>
    </div>
  );
};

export default Saualnama;
