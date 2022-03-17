import React from 'react';
import LegendPink from '../../assets/legendPink.svg';
import LegendGray from '../../assets/legendGray.svg';
import ArrowDown from '../../assets/arrowDownBlack.svg';
import Chart from '../Chart';
import './styles.css'


const rightSectionContent = [
  { title: 'Mês', highlight: 'setembro' },
  { title: 'Ano', highlight: 2022 },
  { title: 'Total de Faturamento', highlight: `R$ 20.000,00` },
  { title: 'Análise comparativa', highlight: 'Positivo' },
];

export default function Board() {

  return (
    <div className='max_chart_container'>
      <div className='left_section'>
        <div className='chart_header'>
          <div>
            <h3>Total de Faturamento Mensal</h3>
            <span>Julho 2020</span>
          </div>
          <div className="rightSide">
            <p>
              <img src={LegendPink} alt='textPink'/> 
              Este mês
            </p>
            <p>
            <img src={LegendGray} alt='textGray'/>
              Mês passado
            </p>
          </div>
        </div>
        <div className='chart_container'>
          <Chart />
        </div>
      </div>
      <div className='right_section_container'>
        <div>
          <p>Loja</p>
          <select>
              <option>test 1</option>
              <option>test 2</option>
              <option>test 3</option>
              <option>test 4</option>
          </select>
        </div>
        {rightSectionContent.map((content, index) => {
          if (content.title === 'Total de Faturamento') {
            return (
              <div key={index}>
                <p>{content.title}</p>
                <h2>{content.highlight}</h2>
              </div>
            );
          }
          if (content.title === 'Análise comparativa') {
            return (
              <div key={index} className="noBorder">
                <p>{content.title}</p>
                <h2 className="green">{content.highlight}</h2>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <p>{content.title}</p>
                <h2 className="underline">
                  {content.highlight}
                  <img  src={ArrowDown} alt='ArrowDown'/>
                </h2>
              </div>
            );
          }
        })}
      </div>
    </div >
  );
};
