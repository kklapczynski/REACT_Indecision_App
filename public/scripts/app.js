"use strict";

// this app.js will have JSX used - will be transpiled using babel to public/app.js , that is actually loaded by browser

console.log("App is running!");

// JSX - JS XML ( JavaScript syntax extension) - React uses it to build templates
// create app object with title and subtitle
// use it in template
// render
var app = {
    title: "Indecision App",
    subtitle: "Application to make you decide quicker!"
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
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

ReactDOM.render(template, htmlElToRenderTemplateIn);
