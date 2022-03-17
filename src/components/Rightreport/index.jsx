import React from 'react';
import './styles.css';

const headerContent = [
  { title: 'Produto' },
  { title: 'Loja' },
  { title: 'Preço' },
  { title: 'Data' },
];

export default function Rightreport() {

  return (
    <div className='report_container_right'>
      <div>
        <div className='title_container_right'>
          <div>
            {headerContent.map((header, index) => (
              <h3 key={index}>{header.title}</h3>
            ))}
          </div>
        </div>
        <div className='right_report_container'>
              <div>
                <p>test</p>
                <p>test</p>
                <p><span className="blue">R$1000,00</span></p>
                <p><span className="yellow">5622,00</span></p>
              </div>
              <div>
                <p>test</p>
                <p>test</p>
                <p><span className="blue">R$1000,00</span></p>
                <p><span className="yellow">5496,00</span></p>
              </div>
              <div>
                <p>test</p>
                <p>test</p>
                <p><span className="blue">R$1000,00</span></p>
                <p><span className="yellow">2000,00</span></p>
              </div>
              <div>
                <p className="noBorder">teste</p>
                <p className="noBorder">teste</p>
                <p className="noBorder">
                  <button className=" blue">R$1000,00</button>
                </p>
                <p className="noBorder">
                  <button className="yellow">R$1000,00</button>
                </p>
              </div>
        </div>
      </div>
    </div>
  );
};
