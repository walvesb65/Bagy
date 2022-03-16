import React from 'react';
import Header from '../../components/Header'
import './styles.css';

export default function Overview ({name}) {
  return (
    <div className='container_overview'>
      <Header namePage={name}/>
    </div>
  );
}
