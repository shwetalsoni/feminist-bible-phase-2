import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// css
import "./css/main.scss";

// components
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Notification from"./components/Notification.jsx";

//images
import avatar_image from "./images/placeholder-images/avatar.png";

// pages
import Home from "./pages/home.jsx";
import Registration from "./pages/Registration";
import AboutUs from "./pages/AboutUs";
import AdminProfile from "./pages/adminProfile";
import CodeOfConduct from "./pages/CodeOfConduct.jsx"
import BlogList from "./pages/BlogList.jsx";
import OrganizationList from "./pages/OrganizationList.jsx";

function App() {
  return (
    <Router>
      <Header isSignedIn={false} avatarSrc={avatar_image} />
     <br/>
      <Notification/>
      <Switch>
        <Home path="/" exact />
        <Registration path="/register" exact />
        <AboutUs path="/about" exact />
        <OrganizationList path="/organization" exact />
        <CodeOfConduct path="/code-of-conduct" exact />
        {/* <AdminProfile path="/admin" exact /> */}
        <BlogList path="/bloglist" exact />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
