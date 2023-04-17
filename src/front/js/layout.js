import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Signup } from "./pages/signup";
import { Venuesignup } from "./pages/venuesignup";
import { Artistsignup } from "./pages/artistsignup";
import { ArtistProfile } from "./pages/artistProfile";
import { VenueProfile } from "./pages/venueProfile";
import { EditUserProfile } from "./pages/editUserProfile";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Venuesignup />} path="/register/venue" />
            <Route element={<Artistsignup />} path="/register/artist" />
            <Route element={<Signup />} path="/register" />
            <Route element={<ArtistProfile />} path="/artists/:theid" />
            <Route element={<VenueProfile />} path="/venues/:theid" />
            <Route element={<EditUserProfile />} path="/myprofile" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
