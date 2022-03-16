import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Overview from './views/Overview';
import Stores from './views/Stores';
import Sales from './views/Sales';
import Clients from './views/Clients';
import Products from './views/Products';
import Plans from './views/Plans'
import Configuration from './views/Configuration'
import Exit from './views/Exit';

export default function Navigation () {
  return (
    <Routes>
      <Route exact path="/" element={<Overview />} />
      <Route exact path="/stores" element={<Stores />} />
      <Route exact path="/sales" element={<Sales />} />
      <Route exact path="/clients" element={<Clients />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/plans" element={<Plans />} />
      <Route exact path="/configuration" element={<Configuration />} />
      <Route exact path="/exit" element={<Exit />} />
    </Routes>
  );
}
