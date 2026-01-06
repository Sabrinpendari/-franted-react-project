import "./App.css";
// import { use } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Header from "./Header";
import Products from "./Pages/Product";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// jsx is javascript function which returns html code
// use state is used to handle the state in react
// use effect is used to handle side effects in react like api calls

function App() {
  return(
  <>

  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path="/register" element={<Register/>} />
   <Route path="/product" element={<Products/>} />
    <Route path="/about" element={<About/>} />
     <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
   </Routes>
  
  
  </BrowserRouter>
  
    </>
  )
  {/* // const [products, setProducts] = useState([]);

  // useEffect(() => { */}
  {/* //   fetch("https://ecomm-backend-m1u4.onrender.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);
  // const [count, setcount] = useState(0);
  // function which increases count
  // let handlecount = () => { */}
  {/* //   setcount(count + 1);
  // };

  // return (
    // <> */}
      {/* <div>
        <button onClick={handlecount}>Count {count}</button>
      </div> */}
     
   
      {/* <h1>Ecommerce</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(function (p) {
          return (
            <div key={p._id}>
              <img src={p.image} alt="" />
              <p>{p.title}</p>
              <p>{p.price}</p>
            </div>
          ); */}
        {/* })}
      </div>
    </>
  ); */}

  // )
}

export default App;