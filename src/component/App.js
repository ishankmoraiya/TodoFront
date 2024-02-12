import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Read from "./Read";
import Update from "./Update";
import { Img } from "./Img";

function App(){
    return (
    <div className="App">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Img/>}/>
          <Route path="/note" element={<Note/>}/>
          <Route path="/read" element={<Read/>}/>
          <Route path="/:id" element={<Update/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        
    </div>
    );
}
 export default App;