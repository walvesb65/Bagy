import React from 'react';
import ArrowDown  from '../../assets/arrowDown.svg';
import'./styles.css';

export default function Leftreport() {

  return (
    <div className='report_container_left'>
      <div>
        <div className='title_container_left'>
          <div className='title_section_left'>
            <h3>Total de Compras</h3>
            <p>20.000,00</p>
          </div>
          <div>
            <span>
              Semanal
              <img src={ArrowDown} alt='ArrowDown'/> 
            </span>
          </div>
        </div>
        <div className='left_report_container'>
              <div>
                <span>Test 1</span>
                <p>10 compras</p>
                <p className="right">R$ 1000,00</p>
              </div>
              <div>
                <span className="noBorder">Test 2</span>
                <p className="noBorder">5000 compras</p>
                <p className="noBorder right">R$ 5000,00</p>
              </div>
              <div>
                <span>Test 3</span>
                <p>10 compras</p>
                <p className="right">R$ 1000,00</p>
              </div>
              <div>
                <span className="noBorder">Test 4</span>
                <p className="noBorder">5000 compras</p>
                <p className="noBorder right">R$ 5000,00</p>
              </div>
        </div>
      </div>
    </div>
  );
};
