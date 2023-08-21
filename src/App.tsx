// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hello
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Route/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
