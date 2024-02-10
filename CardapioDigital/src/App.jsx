import { useState } from "react";
import CardapioDigital from"./assets/hashtaurante.webp"
import './App.css';
import{Navegacao} from "./Navegacao.jsx";
import { ItemCardapio } from "./itemCardapio.jsx";
import { pratosPrincipais,sobremesas,bebidas } from "./cardapio.js";


export function App(){
  const paginasMenu = [pratosPrincipais,sobremesas,bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada ]= useState (0);

  return <>
            <img src={CardapioDigital} alt="" className="capa"/>
            <Navegacao atualizarPaginaSelecionada = {atualizarPaginaSelecionada}/>
            <div className ='menu'>
            {paginasMenu[paginaSelecionada].map((item) => (<ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/>))}
            </div>
          </>
}