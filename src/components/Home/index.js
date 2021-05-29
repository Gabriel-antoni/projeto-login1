import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer/index";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1> Bem vindo à Pagina Inicial </h1>
        <Footer />
      </div>
    );
  }
}
