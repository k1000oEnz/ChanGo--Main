// Definición del componente
const MyComponent = () => {
  return React.createElement(
    "div",
    { className: "my-componentLogin" },
    React.createElement(
      "p",
      { className: "titleLogin" },
      "Cambie sus Datos de sesion."
    ),
    React.createElement(
      "p",
      { className: "ContainerLogin" },
      "Contraseña Actual."
    ),
    React.createElement(
      "div",
      { className: "divLogin" },
      React.createElement(
        "div",
        { className: "divLogin2" },
        React.createElement(
          "div",
          { className: "divLogin3" },
          React.createElement("input", {
            className: "inputEmail",
            type: "text",
            placeholder: "ingrese contraseña",
          }),
          React.createElement("p", null, "Contraseña Nueva."),
          React.createElement("input", {
            className: "inputEmail",
            type: "text",
            placeholder: "ingrese su nueva contraseña",
          }),
          React.createElement("p", null, "Email Actual."),
          React.createElement("input", {
            className: "inputEmail",
            type: "text",
            placeholder: "ingrese su mail",
          })
        )
      ),
      React.createElement(
        "div",
        { className: "divLogin4" },
        React.createElement("p", null, "Confirmar contraseña."),
        React.createElement("input", {
          className: "inputEmail",
          type: "text",
          placeholder: "ingrese su Email",
        }),
        React.createElement("p", null, "Nuevo Email."),
        React.createElement("input", {
          className: "inputEmail",
          type: "text",
          placeholder: "ingrese su Nuevo Email",
        })
      )
    ),
    React.createElement(
      "p",
      { className: "subtitleContacts" },
      "Datos del Contacto."
    ),
    React.createElement(
      "div",
      { className: "divLogin5" },
      React.createElement(
        "div",
        { className: "divLogin6" },
        React.createElement(
          "div",
          { className: "divLogin7" },
          React.createElement("p", null, "Numero de celular Actual."),
          React.createElement("input", {
            className: "inputEmail",
            type: "text",
            placeholder: "ingrese su nueva contraseña",
          })
        )
      ),
      React.createElement(
        "div",
        { className: "divLogin8" },
        React.createElement(
          "div",
          { className: "divLogin9" },
          React.createElement("p", null, "Nuevo numero de Celular."),
          React.createElement("input", {
            className: "inputEmail",
            type: "text",
            placeholder: "+54 |  ingrese su nueva contraseña",
          })
        )
      )
    ),
    React.createElement(
      "div",
      { className: "divLogin10" },
      React.createElement(
        "button",
        { className: "button__styleP" },
        "Actualizar Perfil"
      ),
      React.createElement(
        "button",
        { className: "button__styleY" },
        "Descartar Cambios"
      )
    )
  );
};

const handleClick = () => {
  // Encuentra el elemento donde se renderizará el componente
  const container = document.getElementById("cardBody");
  // Cambia a display none todos los elementos con la clase 'mainInputs'
  const elementos = document.querySelectorAll(".mainInputs");
  elementos.forEach((elemento) => {
    elemento.style.display = "none";
  });
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
    console.error('Elemento con id "initSesion" no encontrado.');
  }
});
