import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Search, Toolbar, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { ToolbarComponent, ItemDirective, ItemsDirective } from '@syncfusion/ej2-react-navigations';

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      {/* <ToolbarComponent width="300" overflowMode="Popup">
        
        
      </ToolbarComponent> */}
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowFiltering
        toolbar={['Search']}
        // contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        {/* <ColumnsDirective>
          {employeesGrid.map((items, index) => ( <ColumnDirective key={index} {...items} />))}
        </ColumnsDirective> */}
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, Search, ExcelExport, Edit, PdfExport, Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Employees;