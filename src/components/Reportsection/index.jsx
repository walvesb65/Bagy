import React from 'react';
import Leftreport from '../LeftReport';
import Rightreport from '../Rightreport';
import './styles.css';

export default function Reportsection () {
  return (
    <div className='report_container'>
      <Leftreport />
      <Rightreport />
    </div>
  );
};
