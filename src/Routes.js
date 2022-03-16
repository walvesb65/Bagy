import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Overview from './views/Overview';
import DefaultPage from './views/DefaultPage'

export default function Navigation () {
  return (
    <Routes>
      <Route exact path="/" element={<Overview name='Visão Geral'/>} />
      <Route exact path="/stores" element={<DefaultPage name='Loja' />} />
      <Route exact path="/sales" element={<DefaultPage name='Vendas'/>} />
      <Route exact path="/clients" element={<DefaultPage name='Clientes'/>} />
      <Route exact path="/products" element={<DefaultPage name='Produtos'/>} />
      <Route exact path="/plans" element={<DefaultPage name='Planejamento'/>} />
      <Route exact path="/configuration" element={<DefaultPage name='Configuração'/>} />
      <Route exact path="/exit" element={<DefaultPage name='Sair' />} />
    </Routes>
  );
}
