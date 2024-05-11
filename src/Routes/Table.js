import { useNavigate,useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { AgGridReact } from 'ag-grid-react';

export default function Table(){
    const location = useLocation();
    let books = location.state.books;
    const navigate = useNavigate();
    const handleClickReturn = () => {navigate(-1)};     

    const columns = [
        {headerName:"Title",field:"title",sortable:true,filter:"agTextColumnFilter"},
        {headerName:"Author",field:"authors",sortable:true,filter:"agTextColumnFilter"},
        {headerName:"Page Count",field:"pageCount",sortable:true,filter:"agNumberColumnFilter"},  
        {headerName:"ISBN_10",field:"isbn10"},
        {headerName:"Price",field:"saleInfo.listPrice.amount",sortable:true,filter:"agNumberColumnFilter"},  
        {headerName:"Published Date",field:"publishedDate",sortable:true,filter:"agDateColumnFilter"},  
    ]
    return(
        <div>
            
            <div className="ag-theme-balham" style={{height: "350px", width: "80%"}}>
                <AgGridReact 
                    columnDefs={columns} 
                    rowData={books}
                    pagination={true}
                    paginationPageSize={10}
                    
                />
            </div>
            <Button onClick={()=>handleClickReturn()}>Return to list</Button>                  
        </div>
    )
}