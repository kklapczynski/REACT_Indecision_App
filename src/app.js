// this app.js will have JSX used - will be transpiled using babel to public/app.js , that is actually loaded by browser

console.log(`App is running!`);

// JSX - JS XML ( JavaScript syntax extension) - React uses it to build templates
// lecture 11
// create app object with title and subtitle
// use it in template
// render
// lecture 12
// only render subtitle paragraph if it exists
// add <p> if property 'options' exists: 'Here are your options' or 'No options set'
var app = {
    title: `Indecision App`,
    subtitle: `Application to make you decide quicker!`,
    options: [`one`, `two`]
};
var template = (
    <div>
        <h1>{app.title}</h1> 
        {(app.subtitle && typeof(app.subtitle) === 'string' && app.subtitle.length > 0) && <p>{app.subtitle}</p>}
        {(app.options && app.options.length > 0) ? <p>Here are your options:</p> : <p>No options set.</p>}
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var user = {
    name: `krzysztof klapczyński`,
    age: 37,
    location: `Lisboa`
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
    // undefined is returned from function if there is no else statement
    //  else {
    //     return `Unknown`;
    // }
};

var template2 = (
    <div>
        <h1>{user.name ?  user.name.toUpperCase() : `unknown`}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var htmlElToRenderTemplateIn = document.getElementById(`app`);

ReactDOM.render(template,htmlElToRenderTemplateIn);