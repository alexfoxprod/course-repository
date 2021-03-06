import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import { ChatButton } from "./components/ChatButton/ChatButton";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Menu />
      <ContactForm />
      <Footer />
      <ChatButton />
    </div>
  );
}

export default App;
