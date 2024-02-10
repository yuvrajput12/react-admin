import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Page,Inject,Selection,Edit,Toolbar,Sort,Filter} from '@syncfusion/ej2-react-grids'
import { customersData,customersGrid } from '../data/dummy'
import { Header } from '../components' 
const Customers = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Pages" title="Customers"/>
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowDeleting:true,allowEditing:true}}
      >
        {/* <ColumnsDirective>
        {customersGrid.map((index,item)=>(
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective> */}
        <ColumnsDirective>
         {customersGrid.map((item,index) => (
          <ColumnDirective key={index} {...item}/>
         ))}
        </ColumnsDirective>
        <Inject services={[Page,Selection,Toolbar,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers