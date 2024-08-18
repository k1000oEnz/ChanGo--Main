// Definición del componente
const MyComponent = () => {
  return React.createElement(
    "div",
    { className: "my-component" },
    React.createElement("input", {
      type: "text",
      placeholder: "cambiar contraseña",
    }),
    React.createElement("p", null, "Este es un componente creado sin JSX.")
  );
};

// Función para manejar el clic y renderizar el componente
const handleClick = () => {
  // Encuentra el elemento donde se renderizará el componente
  const container = document.getElementById("cardBody");
  // Renderiza el componente
  ReactDOM.render(React.createElement(MyComponent), container);
};

// Configura el evento del clic
document.addEventListener("DOMContentLoaded", () => {
  const reactLoggin = document.querySelector("#initSesion");
  if (reactLoggin) {
    // Verifica que el elemento exista
    reactLoggin.addEventListener("click", handleClick);
  } else {
    console.error('Elemento con id "loginReact" no encontrado.');
  }
});
