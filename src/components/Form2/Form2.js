import React from "react";
import "../Form1/Form1.css"

function Form2() {
  return (
    <section className="Form2">
      <form className="login">
        <h1>Form 2</h1>
        <input type="text" placeholder="Name" />
        <input type="phone" placeholder="Ph No." />
        <button>Submit</button>
      </form>
      <a href="../ImageSlider">Back to Carousel</a>
    </section>
  );
}

export default Form2;