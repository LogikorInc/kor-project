import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import ReactDOM, { render } from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component



const ShipmentTable = () => {

    const gridRef = useRef(); // Optional - for accessing Grid's API

    const [shipments, setShipments] = useState([]);
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

    const [columnDefs, setColumnDefs] = useState([
        {headerName: 'Shipment', field: 'primary_reference', filter: true, cellRenderer: 'cellClickedListener', sortable: true, filter: true, floatingFilter: true, flex: 2 },
        {headerName: 'Status',field: 'status', sortable: true, filter: true, floatingFilter: true, flex: 2 },
        {headerName: 'Destination',field: 'dest_name', sortable: true, filter: true, floatingFilter: true, flex: 2 },
        {headerName: 'Create Date',field: 'create_date', sortable: true, filter: true, floatingFilter: true, flex: 2 },
        {headerName: 'Ship Date',field: 'actual_ship',sortable: true, filter: true, floatingFilter: true, flex: 2 },
        {headerName: 'ETA',field: 'target_delivery_early',sortable: true, filter: true, floatingFilter: true, flex: 2 },
        {headerName: 'Delivery Date',field: 'actual_delivery',sortable: true, filter: true, floatingFilter: true, flex: 2 }
        
        
        
      ]);

    const getShipments = () => {
        try {
            axios.get('/api/shipments/recent').then(response => {
                const shipments = response.data;
                console.log(shipments);
                setShipments(shipments);
            })

        } catch (e) {
            console.log(e);
        }
        
    };

    useEffect(() => {
        getShipments();
    }, []);

    


       // DefaultColDef sets props common to all Columns
 const defaultColDef = useMemo( ()=> ({
    cellStyle: {
        'height': '100%',
        'display': 'flex ',
        'alignItems': 'center ',
    },
    sortable: true,
    filter: true
  }));

// Example of consuming Grid Event
// const cellClickedListener = useCallback( event => {
// //   console.log('cellClicked', event.data.primary_reference);
//  <Link to={`/shipment/${event.data.primary_reference}`}></Link> 
// }, []);
function CellClickedListener(props) {
    console.log(props);
    // return (<a href={'/shipments/' + props.data.primary_reference} target="_blank">{ props.data.primary_reference}</a>)
    return (
        <Link to={`/shipment/${props.data.primary_reference}`}>{props.data.primary_reference}</Link>   
    )
// console.log(props.data.primary_reference);
};

// Example load data from server
// useEffect(() => {
//   fetch(shipments)
//   .then(result => result.json())
//   .then(rowData => setRowData(rowData))
// }, []);

// Example using Grid's API
const buttonListener = useCallback( e => {
  gridRef.current.api.deselectAll();
}, []);

return (
    // <div>
 <>
      {/* Example using Grid's API */}
      {/* <button onClick={buttonListener}>Push Me</button> */}
 
      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-material" style={{ flexGrow: 1, width: '100%', height: '75vh' }}>
 
        <AgGridReact
            // onGridReady={onGridReady}
            reactUi="true"
            headerHeight="50"
            rowHeight="40"
            ref={gridRef} // Ref for accessing Grid's API
            pagination={true}
            paginationPageSize={25}
            rowData={shipments} // Row Data for Rows
 
            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties
 
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection='multiple' // Options - allows click selection of rows
 
            frameworkComponents={{
                cellClickedListener: CellClickedListener
            }}
            // onCellClicked={cellClickedListener} // Optional - registering for Grid Event
            // onRowClicked={event => cellClickedListener(event)}
            />
      </div>
    {/* </div> */}</>
  );



}

export default ShipmentTable
