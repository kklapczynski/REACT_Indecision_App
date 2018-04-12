'use strict';

// this app.js will have JSX used - will be transpiled using babel to public/app.js , that is actually loaded by browser

console.log('App is running!');

// JSX - JS XML ( JavaScript syntax extension) - React uses it to build templates
// lecture 11
// create app object with title and subtitle
// use it in template
// render
// lecture 12
// only render subtitle paragraph if it exists
// add <p> if property 'options' exists: 'Here are your options' or 'No options set'
var app = {
    title: 'Indecision App',
    subtitle: 'Application to make you decide quicker!',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && typeof app.subtitle === 'string' && app.subtitle.length > 0 && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options && app.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options:'
    ) : React.createElement(
        'p',
        null,
        'No options set.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);

var user = {
    name: 'krzysztof klapczy\u0144ski',
    age: 37,
    location: 'Lisboa'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
    // undefined is returned from function if there is no else statement
    //  else {
    //     return `Unknown`;
    // }
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name.toUpperCase() : 'unknown'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var htmlElToRenderTemplateIn = document.getElementById('app');

ReactDOM.render(template, htmlElToRenderTemplateIn);
