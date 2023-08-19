import React from "react"
import ReactDOM from "react-dom/client"
// import Header from "./Header";
// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" },
// //   "hello world from React!"
// // );
//React createElement
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//    [
//     React.createElement("h1", {}, "This is Namaste React -- createElement🚀"),
//     React.createElement("h2", {}, "i am an h2  tag!"),
//     React.createElement("h3", {}, "i am an h3  tag!"),
//   ]
// );
//React element
// const parent1 = (
//   <div className="title">
//   <h1>This is Namaste React🚀</h1>
//   <h2>i am an h2  tag!</h2>
//   <h3>i am an h3  tag ojhal!</h3>
//   </div>
// )
//react functional component
// const Parent2 = () => {
//   return (
//   <div className="title" id="container"> 
//  <h1>This is Namaste React🚀</h1>
//   <h2>i am an h2  tag!</h2>
//  <h3>i am an h3  tag ojhal123!</h3>
//   </div>
//   )
 
// }
// //React element
// const parent1 = (
//   <div className="title">
//     {<Parent2/>}
//     {<Header/>}
//   {/* <h1>This is Namaste React🚀</h1>
//   <h2>i am an h2  tag!</h2>
//   <h3>i am an h3  tag ojhal!</h3> */}
//   </div>
// )
const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/premium-vector/food-logo-design_139869-254.jpg?w=2000"/>
      </div>
      <div className="navbar">
<ul>
  <li>Home</li>
  <li>About Us</li>
  <li>Contact Us</li>
  <li>Cart</li>
</ul>
      </div>

    </div>
  )
}
// const styleCard = {
//   backgroundColor:"#f0f0f0"
// }
const RestaurantCard = ({resName}) => {
  return(
    <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9obUN5h4xGm_YVWengZOeD9-w7QroMTyd88lJEXu_KWgIaLOrGdNHeoYfeCacrRUAK7o&usqp=CAU" />
    <h3>{resName}</h3>
    </div>
  )
}
const Body = () =>{
  return(
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
      <RestaurantCard resName="Food Bhandar"/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      
      </div>
    </div>
  )
}
const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      <Body/>
      </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
