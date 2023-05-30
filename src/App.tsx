import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import EntryList from "./components/EntryList";
import EntryEdit from "./components/EntryEdit";


function App() {
  return (
      <div className='App'>
          <h1 className='title'>Admin Board</h1>
          <Routes>
              <Route path="/" element={<EntryList />} />
              <Route path="/edit/:id" element={<EntryEdit />} />
          </Routes>
      </div>
  );
}

export default App;
