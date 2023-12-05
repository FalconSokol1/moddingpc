import React from 'react';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Price from "./Components/Price";
import About from "./Components/about";
import Contacts from "./Components/Contacts";





function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Price/>
        <About/>
        <Contacts/>

    </div>
  );
}

export default App;
