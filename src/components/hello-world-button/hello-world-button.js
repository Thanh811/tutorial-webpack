import "./hello-button-world.css";
class HelloWorldButton {
  buttonCssClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "hello world";
    button.classList.add("hello-button-world");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "hello ban oi";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default HelloWorldButton;
