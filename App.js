// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from React!"
// );
const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div",{id: "child"},
    React.createElement("h1", {}, "i am an html tag!")
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
