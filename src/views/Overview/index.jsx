import React from 'react';
import Header from '../../components/Header';
import Datasection from '../../components/Datasection';
import Chartsection from '../../components/Chartsection';
import Reportsection from '../../components/Reportsection';
import './styles.css';

export default function Overview ({name}) {
  return (
    <div className='container_overview'>
      <Header namePage={name}/>
      <Datasection />
      <Chartsection />
      <Reportsection />
    </div>
  );
}
