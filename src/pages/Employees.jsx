import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Page,Inject,Search,Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData,contextMenuItems,employeesGrid } from '../data/dummy'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const Employees = () => {
  const { currentMode } = useStateContext();
   
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Pages" title="Employees"/>
      <GridComponent
       dataSource={employeesData}
       allowPaging
       allowSorting
       toolbar={['Search']}
       width="auto"
       style = {{background:currentMode ==='Dark' ? '#33373E' : '#fff'}}
      >
        <ColumnsDirective>
         {employeesGrid.map((item,index) => (
          <ColumnDirective key={index} {...item}/>
         ))}
        </ColumnsDirective>
        <Inject services={[Search,Page,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees