import { ChangeEvent, FormEvent } from "react";

import emailjs from "emailjs-com";
import { useState } from "react";

interface FormData {
  name: string;
  answer: string;
}

const Saualnama = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    answer: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.answer) {
      alert("Please enter your name and select an option.");
      return;
    }

    const templateParams = {
      guest_name: formData.name,
      answer: formData.answer,
    };

    emailjs
      .send(
        "shukenovadilzhan", // Replace with EmailJS Service ID
        "template_uzatu_answer", // Replace with EmailJS Template ID
        templateParams,
        "JhuOY-hS42WgEeqPQ" // Replace with EmailJS Public Key
      )
      .then(() => {
        alert("Your RSVP has been sent successfully!");
        setFormData({ name: "", answer: "" });
      })
      .catch((error) => {
        alert("Failed to send RSVP.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-2xl top-word mt-20">Сауалнама</h1>
      <br />
      <br />
      <h2>
        ТӨМЕНДЕГІ САУАЛНАМАНЫ ТОЛТЫРЫП, ТОЙҒА ҚАТЫСУЫҢЫЗДЫ РАСТАУЫҢЫЗДЫ
        СҰРАЙМЫЗ.
      </h2>
      <br />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5"
      >
        <label className="block mb-4">
          <span className="text-gray-700 text-xl mb-4">
            АТЫ-ЖӨНІҢІЗДІ ЖАЗЫҢЫЗ
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-sm border rounded-md"
            required
          />
        </label>
        <label className="text-lg">Тойға келесіз бе?</label>
        <fieldset className="mb-4 text-xl">
          {["Иә, әрине келемін", "Өкінішке орай, келе алмаймын"].map(
            (option) => (
              <label
                key={option}
                className="flex flex-row items-center gap-3 mt-2"
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={formData.answer === option}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                {option}
              </label>
            )
          )}
        </fieldset>
        <button style={{ backgroundColor: "green" }} type="submit">
          ЖАУАПТЫ ЖІБЕРУ
        </button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default Saualnama;
