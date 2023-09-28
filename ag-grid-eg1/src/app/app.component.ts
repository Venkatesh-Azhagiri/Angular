import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import {AgGridModule} from 'ag-grid-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
    standalone: true,
    imports: [AgGridModule]
})
export class AppComponent  {
    constructor(){
        console.log("rowSelection:::"+this.rowSelection);
    }
    public rowSelection: 'single' | 'multiple' = 'multiple';

    columnDefs: ColDef[] = [
        { 
        field: 'make',
        headerName: 'CheckAll',         
        /*headerCheckboxSelection: params => {
            const displayedColumns = params.columnApi.getAllDisplayedColumns();
            return displayedColumns[0] === params.column;
        }*/
        // headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: true , 
        checkboxSelection:true 
        },
        { field: 'model' },
        { field: 'price' }
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 }
    ];

}