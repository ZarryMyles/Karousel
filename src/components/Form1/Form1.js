import React from "react";
import "./Form1.css"

function Form1() {
  return (
    <section className="Form1">
      <form className="login">
        <h1 className="f1">Form 1</h1>
        <input type="text" placeholder="Name" />
        <input type="phone" placeholder="Ph No." />
        <button>Submit</button>
      </form>
      <a href="../ImageSlider">Back to Carousel</a>
    </section>
  );
}

export default Form1;