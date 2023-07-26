import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header";
// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" },
// //   "hello world from React!"
// // );
//React createElement
const parent = React.createElement(
  "div",
  { id: "parent" },
   [
    React.createElement("h1", {}, "This is Namaste React -- createElement🚀"),
    React.createElement("h2", {}, "i am an h2  tag!"),
    React.createElement("h3", {}, "i am an h3  tag!"),
  ]
);
//React element
// const parent1 = (
//   <div className="title">
//   <h1>This is Namaste React🚀</h1>
//   <h2>i am an h2  tag!</h2>
//   <h3>i am an h3  tag ojhal!</h3>
//   </div>
// )
//react functional component
const Parent2 = () => {
  return (
  <div className="title" id="container"> 
 <h1>This is Namaste React🚀</h1>
  <h2>i am an h2  tag!</h2>
 <h3>i am an h3  tag ojhal123!</h3>
  </div>
  )
 
}
//React element
const parent1 = (
  <div className="title">
    {<Parent2/>}
    {<Header/>}
  {/* <h1>This is Namaste React🚀</h1>
  <h2>i am an h2  tag!</h2>
  <h3>i am an h3  tag ojhal!</h3> */}
  </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent1);
