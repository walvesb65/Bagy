import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import graph from '../../assets/graph.svg';
import store from '../../assets/store.svg';
import sales from '../../assets/sales.svg';
import clients from '../../assets/clients.svg';
import products from '../../assets/products.svg';
import plans from '../../assets/plans.svg';
import config from '../../assets/config.svg';
import exit from '../../assets/exit.svg';
import './styles.css'

const options = [
  { name: 'Visão Geral', link: '/', image: graph },
  { name: 'Lojas', link: '/stores', image: store },
  { name: 'Vendas', link: '/sales', image: sales },
  { name: 'Clientes', link: '/clients', image: clients },
  { name: 'Produtos', link: '/products', image: products },
  { name: 'Planos e Metas', link: '/plans', image: plans },
  { name: 'Configurações', link: '/configuration', image: config },
  { name: 'Sair', link: '/exit', image: exit },
];

export default function Sidenav () {
  
  const { pathname } = useLocation();

  const setActive = (path) => {
    const [ currActiveElement ] = document.getElementsByClassName('active');
    if (currActiveElement) {
      currActiveElement.classList.remove('active')
    }
    const newActiveElement = document.getElementById(path);
    newActiveElement.classList.add('active')
  };

  console.log('willll');
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className='container'>
      <img src={Logo} alt='logo' className='logo'/>
      {options.map((content, index) => (
        <Link id={content.link} key={index} to={content.link}>
          <img src={content.image} alt={content.name} />
          {content.name}
        </Link>
      ))}
    </div>
  );
};