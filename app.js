const parent = React.createElement(
    "div",
     {id:"parent"},
     React.createElement(
        "div",
        {id:"children"},
        React.createElement("h1",{},"Hello World")
     )
);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
        console.log(parent);