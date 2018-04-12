"use strict";

// this app.js will have JSX used - will be transpiled using babel to public/app.js , that is actually loaded by browser

console.log("App is running!");

// JSX - JS XML ( JavaScript syntax extension) - React uses it to build templates
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Does it REALLY?"
    ),
    React.createElement(
        "p",
        null,
        "Text in paragraph"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1"
        ),
        React.createElement(
            "li",
            null,
            "Item 2"
        )
    )
);

var user = {
    name: "krzysztof klapczy\u0144ski",
    age: 37,
    location: "Pozna\u0144"
};

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var htmlElToRenderTemplateIn = document.getElementById("app");

ReactDOM.render(template2, htmlElToRenderTemplateIn);
