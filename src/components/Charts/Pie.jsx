import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,PieSeries, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from '@syncfusion/ej2-react-charts';


import { useStateContext } from '../../contexts/ContextProvider'

const Pyramid = ({id,data,legendVisibility,height}) => {
  const { currentMode } = useStateContext();

  return (
        <AccumulationChartComponent
          id={id}
          height={height}
          legendSettings={{visible:legendVisibility, background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PieSeries, AccumulationLegend]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Sale"
              dataSource={data}
              xName="x"
              yName="y"
              innerRadius='40%'
              startAngle={0}
              endAngle={360}
              radius='70%'
              explode
              explodeOffset='10%'
              explodeIndex={2}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
                font:{
                  fontWeight:'600',
                  color:'#fff',
                }
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    
  );
};

export default Pyramid;