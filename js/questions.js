// Definición del componente
const MyComponents = () => {
  return React.createElement("div", { className: "renderQuestions" }, [
    React.createElement("h2", { key: 1 }, "Preguntas Frecuentes."),
    React.createElement("p", { key: 2 }, "Como me registro en ChanGo?"),
    React.createElement(
      "p",
      { key: 3 },
      "Que tipos de trabajo encuentro en ChanGo?"
    ),
    React.createElement("p", { key: 4 }, "Como publico un trabajo?"),
    React.createElement(
      "p",
      { key: 5 },
      "Como funciona el sistema de calificasiones?"
    ),
    React.createElement(
      "p",
      { key: 5 },
      "Como me comunico con un trabajador o empleador"
    ),
    React.createElement(
      "p",
      { key: 5 },
      "Como se manejan los pagos en ChanGo?"
    ),
    React.createElement(
      "p",
      { key: 5 },
      "Que pasa si no puedo completar un trabajo que acepte?"
    ),
  ]);
};

// Función para manejar el clic y renderizar el components
const handleClickQuestions = () => {
  // Encuentra el elemento donde se renderizará el componente
  const container = document.getElementById("setting-card");
  if (container) {
    // Renderiza el componente
    ReactDOM.render(React.createElement(MyComponents), container);
  } else {
    console.error('Elemento con id "setting-card" no encontrado.');
  }
};

// Configura el evento del clic
document.addEventListener("DOMContentLoaded", () => {
  const reactQuestions = document.querySelector("#questions");
  if (reactQuestions) {
    // Verifica que el elemento exista
    reactQuestions.addEventListener("click", handleClickQuestions);
  } else {
    console.error('Elemento con id "loginReact" no encontrado.');
  }
});
