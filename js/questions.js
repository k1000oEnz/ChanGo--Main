const MyComponents = () => {
  return React.createElement("div", { className: "renderQuestions" }, [
    React.createElement(
      "div",
      { key: 17, className: "imgQuestions" },
      React.createElement("img", {
        key: 18,
        className: "bannerQuestion",
        src: "../image/Dibujo FAQ.svg",
      })
    ),
    React.createElement(
      "div",
      { key: 19, className: "questions" },
      React.createElement(
        "h2",
        { key: 1, className: "titleQuestions" },
        "Preguntas Frecuentes."
      ),
      // Primera pregunta
      React.createElement(
        "div",
        { key: 3, id: "componenteRenden1" },
        React.createElement("h5", { key: 4 }, "¿Cómo me registro en ChanGo?"),
        React.createElement("button", { key: 5, id: "showButton1" }, "+")
      ),
      React.createElement(
        "div",
        { key: 6, className: "renderRespuestas" },
        React.createElement(
          "p",
          { key: 7, className: "showP1" },
          "Lorem ipsum dolor sit amet, consectetur adipisci, aliqua. Ut eniexercitation ullamco la ex ea commodo consequat."
        )
      ),
      // Segunda pregunta
      React.createElement(
        "div",
        { key: 8, id: "componenteRenden2" },
        React.createElement(
          "h5",
          { key: 9 },
          "¿Cómo puedo recuperar mi contraseña?"
        ),
        React.createElement("button", { key: 10, id: "showButton2" }, "+")
      ),
      React.createElement(
        "div",
        { key: 11, className: "renderRespuestas" },
        React.createElement(
          "p",
          { key: 12, className: "showP2" },
          "Lorem ipsum dolor sit amet, consectetur adipisci, aliqua. Ut eniexercitation ullamco la ex ea commodo consequat."
        )
      ),
      // Tercera pregunta
      React.createElement(
        "div",
        { key: 13, id: "componenteRenden3" },
        React.createElement(
          "h5",
          { key: 14 },
          "¿Cómo se usa el servicio de atención al cliente?"
        ),
        React.createElement("button", { key: 15, id: "showButton3" }, "+")
      ),
      React.createElement(
        "div",
        { key: 16, className: "renderRespuestas" },
        React.createElement(
          "p",
          { key: 17, className: "showP3" },
          "Lorem ipsum dolor sit amet, consectetur adipisci, aliqua. Ut eniexercitation ullamco la ex ea commodo consequat."
        )
      ),
      // Cuarta pregunta
      React.createElement(
        "div",
        { key: 18, id: "componenteRenden4" },
        React.createElement(
          "h5",
          { key: 19 },
          "¿Qué métodos de pago se aceptan?"
        ),
        React.createElement("button", { key: 20, id: "showButton4" }, "+")
      ),
      React.createElement(
        "div",
        { key: 21, className: "renderRespuestas" },
        React.createElement(
          "p",
          { key: 22, className: "showP4" },
          "Lorem ipsum dolor sit amet, consectetur adipisci, aliqua. Ut eniexercitation ullamco la ex ea commodo consequat."
        )
      ),
      // Quinta pregunta
      React.createElement(
        "div",
        { key: 23, id: "componenteRenden5" },
        React.createElement(
          "h5",
          { key: 24 },
          "¿Cómo puedo cancelar mi suscripción?"
        ),
        React.createElement("button", { key: 25, id: "showButton5" }, "+")
      ),
      React.createElement(
        "div",
        { key: 26, className: "renderRespuestas" },
        React.createElement(
          "p",
          { key: 27, className: "showP5" },
          "Lorem ipsum dolor sit amet, consectetur adipisci, aliqua. Ut eniexercitation ullamco la ex ea commodo consequat."
        )
      ),
      // Sexta pregunta
      React.createElement(
        "div",
        { key: 28, id: "componenteRenden6" },
        React.createElement(
          "h5",
          { key: 29 },
          "¿Cómo puedo contactar con el soporte técnico?"
        ),
        React.createElement("button", { key: 30, id: "showButton6" }, "+")
      ),
      React.createElement(
        "div",
        { key: 31, className: "renderRespuestas" },
        React.createElement(
          "p",
          { key: 32, className: "showP6" },
          "Lorem ipsum dolor sit amet, consectetur adipisci, aliqua. Ut eniexercitation ullamco la ex ea commodo consequat."
        )
      )
    ),
  ]);
};

// Función para manejar el clic y alternar el estilo de display
function manejarClick(event) {
  const buttonId = event.target.id;
  const showPClass = `showP${buttonId.replace("showButton", "")}`;
  const showP = document.querySelector(`.${showPClass}`);
  if (showP) {
    if (showP.style.display === "none" || showP.style.display === "") {
      showP.style.display = "flex";
    } else {
      showP.style.display = "none";
    }
  } else {
    console.error(`Elemento con clase "${showPClass}" no encontrado.`);
  }
}

// Función para manejar el clic y renderizar el componente
const handleClickQuestions = () => {
  const container = document.getElementById("setting-card");
  if (container) {
    ReactDOM.render(React.createElement(MyComponents), container);

    // Configura el evento del clic para los botones dentro del componente
    const buttons = [
      "showButton1",
      "showButton2",
      "showButton3",
      "showButton4",
      "showButton5",
      "showButton6",
    ];
    buttons.forEach((id) => {
      const button = document.getElementById(id);
      if (button) {
        button.addEventListener("click", manejarClick);
      } else {
        console.error(`Botón con id "${id}" no encontrado.`);
      }
    });
  } else {
    console.error('Elemento con id "setting-card" no encontrado.');
  }
};

// Configura el evento del clic inicial
document.addEventListener("DOMContentLoaded", () => {
  const reactQuestions = document.querySelector("#questions");
  if (reactQuestions) {
    reactQuestions.addEventListener("click", handleClickQuestions);
  } else {
    console.error('Elemento con id "questions" no encontrado.');
  }
});
