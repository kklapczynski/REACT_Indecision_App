// this app.js will have JSX used - will be transpiled using babel to public/app.js , that is actually loaded by browser

console.log(`App is running!`);

// JSX - JS XML ( JavaScript syntax extension) - React uses it to build templates
var template = (
    <div>
        <h1>Does it REALLY?</h1> 
        <p>Text in paragraph</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var user = {
    name: `krzysztof klapczyński`,
    age: 37,
    location: `Poznań`
};

var template2 = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var htmlElToRenderTemplateIn = document.getElementById(`app`);

ReactDOM.render(template2,htmlElToRenderTemplateIn);