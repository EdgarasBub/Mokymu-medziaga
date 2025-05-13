import { useEffect, useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import JsonData from "./data/data.json";
import Navigation from "./components/navigation/Navigation";
import Header from "./pages/header/Header";
import Features from "./pages/features/Features";
import About from "./pages/aboutUs/About";
import Services from "./pages/servises/Services";
import Gallery from "./pages/gallery/Gallery";
import Clients from "./pages/clients/clients";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";

function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      {landingPageData && (
        <>
          <Navigation
            title={landingPageData.navigation.title}
            navItems={landingPageData.navigation.navigationItems}
          />
          <Header
            title={landingPageData.header.title}
            subtitle={landingPageData.header.subtitle}
            button={landingPageData.header.button}
          />
          <Features
            title={landingPageData.features.title}
            featuresItems={landingPageData.features.featuresItems}
          />
          <About
            title={landingPageData.about.title}
            description={landingPageData.about.description}
            whyCouseUsTitle={landingPageData.about.whyCouseUsTitle}
            whyCouseUsItems={landingPageData.about.whyCouseUsItems}
          />
          <Services
            title={landingPageData.services.title}
            description={landingPageData.services.description}
            serviceItems={landingPageData.services.serviceItems}
          />
          <Gallery
            title={landingPageData.gallery.title}
            description={landingPageData.gallery.description}
            galleryItems={landingPageData.gallery.galleryItems}
          />
          <Clients
            title={landingPageData.clients.title}
            description={landingPageData.clients.description}
            clientsItems={landingPageData.clients.clientsItems}
          />
          <Team
            title={landingPageData.team.title}
            description={landingPageData.team.description}
            teamItems={landingPageData.team.teamItems}
          />
          <Contact
            title={landingPageData.contacts.title}
            description={landingPageData.contacts.description}
            contactInfo={landingPageData.contacts.contactInfo}
            form={landingPageData.contacts.form}
            contactIcons={landingPageData.contacts.contactIcons}
          />    
        </>
      )}
    </>
  );
}

export default App;
