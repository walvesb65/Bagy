import React from 'react';
import Logo from '../../assets/Group 247.svg';

const options = [
  { name: 'Visão Geral' },
  { name: 'Vendas' },
  { name: 'Clientes' },
  { name: 'Produtos' },
  { name: 'Planos e Metas' },
  { name: 'Configurações' },
  { name: 'Sair' },
];

export default function Sidenav () {
  return (
    <>
      <img src={Logo} style={{backgroundColor: 'pink'}} alt='logo' />
      {options.map((content)=>(
        <p>{content.name}</p>
      ))}
    </>
  );
};