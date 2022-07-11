import React from 'react'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const Excel = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Excel" />
      <SpreadsheetComponent height="1000" />
         
      {/* <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} /> */}
    </div>
    
  )
}

export default Excel