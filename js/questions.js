const d = document;
const buttonShow = d.getElementById("showButton");

// Definición del componente
const MyComponents = () => {
  return React.createElement("div", { className: "renderQuestions" }, [
    React.createElement(
      "div",
      { key: 17, className: "imgQuestions" },
      React.createElement("img", {
        key: 18,
        className: "bannerQuestion",
        src: "../image/questions.jpeg",
      })
    ),
    React.createElement(
      "div",
      { key: 17, className: "questions" },
      React.createElement("h2", { key: 1 }, "Preguntas Frecuentes."),
      React.createElement(
        "div",
        { key: 3, Id: "componenteRenden" },
        React.createElement("h5", { key: 3 }, "¿Cómo me registro en ChanGo?"),
        React.createElement("button", { key: 112, id: "showButton" }, "+")
      ),
      React.createElement(
        "div",
        { key: 113, className: "renderRespuestas" },
        React.createElement(
          "p",
          { key: 2, className: "showP" },
          "Lorem ipsum dolor sit amet, consectetur adipisci, aliqua. Ut eniexercitation ullamco la ex ea commodo consequat."
        )
      )
    ),
  ]);
};

// Función para manejar el clic y alternar el estilo de display
function manejarClick() {
  const showP = document.querySelector(".showP");
  if (showP) {
    // Alterna el display entre none y flex
    if (showP.style.display === "none" || showP.style.display === "") {
      showP.style.display = "flex";
    } else {
      showP.style.display = "none";
    }
  } else {
    console.error('Elemento con clase "showP" no encontrado.');
  }
}

// Función para manejar el clic y renderizar el componente
const handleClickQuestions = () => {
  const container = document.getElementById("setting-card");
  if (container) {
    ReactDOM.render(React.createElement(MyComponents), container);

    // Configura el evento del clic para el botón dentro del componente
    const buttonShow = document.getElementById("showButton");
    if (buttonShow) {
      buttonShow.addEventListener("click", manejarClick);
    } else {
      console.error('Botón con id "showButton" no encontrado.');
    }
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
