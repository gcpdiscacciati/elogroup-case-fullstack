import React from 'react';
import Routes from './routes';

function App() {
  //Inicializa as listas de Leads e de Usuários no localStorage do navegador.
  var listaLeads = [];
  var listaUsers = [];
  if(!localStorage.getItem('listaLeads')){
      localStorage.setItem('listaLeads', JSON.stringify(listaLeads));
  }
  if(!localStorage.getItem('listaUsers')){
      localStorage.setItem('listaUsers', JSON.stringify(listaUsers));
  }
  // Retorna as rotas criadas no arquivo routes.js
  return (
      <Routes/>
  );
}

export default App;
