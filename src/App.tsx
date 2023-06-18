import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WholePageStructurer from "./components/common-components/structural-components/WholePageStructurer";
import ApartmentSearchPageBlock from "./components/apartment-search-page/ApartmentSearchPageBlock";
import ManagingFlatsPageBlock from "./components/flats-managing-page/ManagingFlatsPageBlock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<WholePageStructurer/>}>
          <Route index element={<ApartmentSearchPageBlock/>}/>
          <Route path={"flats-managing"} element={<ManagingFlatsPageBlock/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
