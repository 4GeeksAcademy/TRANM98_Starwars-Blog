import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Info from "./views/info"; 
import PlanetInfo from "./views/planet-info"; 
import StarshipInfo from "./views/starship-info";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import SearchBar from "./SearchBar"; 

// Create your first component
const Layout = () => {
  // The basename is used when your project is published in a subdirectory
  // Set the basename in the .env file at the root of the project, e.g., BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  const [fav, setFav] = useState([]);

  const handleRemove = (item) => {
    const updatedFavorites = fav.filter((favItem) => favItem !== item);
    setFav(updatedFavorites);
  };

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar fav={fav} handleRemove={handleRemove} />
		  <SearchBar />
          <Routes>
            <Route
              path="/"
              element={<Home fav={fav} setFav={setFav} handleRemove={handleRemove} />}
            />
            <Route path="/info/:id" element={<Info />} />
            <Route path="/planet_info/:id" element={<PlanetInfo />} />
            <Route path="/starship_info/:id" element={<StarshipInfo />} />
            <Route path="*" element={<NotFound />} /> {/* 404 route */}
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

// Create a NotFound component for handling 404 routes
const NotFound = () => {
  return <h1>Not found!</h1>;
};

export default injectContext(Layout);
