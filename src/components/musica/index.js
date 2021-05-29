import React from "react";
import ReactDOM from "react-dom";
import Melim from "../../assents/imagem/melim.jpg";
import Header from "../Header/index";
import Footer from "../Footer/index";

import "./styles.css";

export default class Musica extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1 id="nome">Meu Abrigo</h1>
        <div id="letraMusica">
          <p>
            Uh, uh, uh, uh
            <br />
            Uh, uh, uh, uh
            <br />
            Desejo a você
            <br />
            O que há de melhor
            <br />
            A minha companhia
            <br />
            Pra não se sentir só
            <br />
            O sol, a lua e o mar
            <br />
            Passagem pra viajar
            <br />
            Pra gente se perder
            <br />
            E se encontrar
            <br />
            Vida boa, brisa e paz
            <br />
            Nossas brincadeiras ao entardecer
            <br />
            Rir atoa é bom demais
            <br />
            O meu melhor lugar sempre é você
            <br />
            Você é a razão da minha felicidade
            <br />
            Não vá dizer que eu não sou sua cara-metade
            <br />
            Meu amor, por favor, vem viver comigo
            <br />
            No seu colo é o meu abrigo
            <br />
            Uh, uh, uh, uh
            <br />
            Quero presentear
            <br />
            Com flores Iemanjá
            <br />
            Pedir um paraíso
            <br />
            Pra gente se encostar
            <br />
            Uma viola a tocar
            <br />
            Melodias pra gente dançar
            <br />
            A benção das estrelas
            <br />
            A nos iluminar
            <br />
            Vida boa, brisa e paz
            <br />
            Trocando olhares ao anoitecer
            <br />
            Rir atoa é bom demais
            <br />
            Olhar pro céu, sorrir e agradecer
            <br />
            Você é a razão da minha felicidade
            <br />
            Não vá dizer que eu não sou sua cara-metade
            <br />
            Meu amor por favor, vem viver comigo
            <br />
            No seu colo é o meu abrigo
            <br />
            O meu abrigo
            <br />
            No seu colo é o meu abrigo
            <br />
            O meu abrigo
            <br />
            Uh, uh, uh, ah
            <br />
            Você é a razão da minha felicidade
            <br />
            Não vá dizer que eu não sou sua cara-metade
            <br />
            Meu amor por favor, vem viver comigo
            <br />
            No seu colo é o meu abrigo
            <br />
            Meu abrigo
            <br />
            No seu colo é o meu abrigo
            <br />
            No seu colo é o meu abrigo
            <br />
          </p>
          <img src={Melim} />
        </div>
        <Footer />
      </div>
    );
  }
}
