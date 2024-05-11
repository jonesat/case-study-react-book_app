import React from "react";
import {useState, useEffect} from "react";
import {useLocation,useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import Pagination from "react-bootstrap/Pagination";
import Row from 'react-bootstrap/Row';

// import style from '../styles/bootstrapp.css'
import styles from '../styles/bootstrapp.module.css'

import {Book,SearchBar,BookDetail } from '../Components/screenElements';
import {useBooks} from '../api';


export default function Search(){ 
    const location = useLocation();
    const search = location.state.innerSearch;    
    const { loading, books, error } = useBooks(search);
    
    const navigate = useNavigate();
    const viewTable = (books,search)=>{
        navigate(`/table/${search}`,{state:{books }})
    }

    const viewGraph = (books,search)=>{
        
        navigate(`/graph/${search}`,{state: { books:books,searchResult:search }})
    }
    
    const numOfBooksPerPage = 5;
    let [active, setActive] = useState(1);
    const totalpages = Math.ceil(books.length / numOfBooksPerPage)
    let pages = [];
        
    
    for (let number = 1; number <= totalpages; number++) {
        pages.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => setActive(number)}
            >
                {number}
            </Pagination.Item>
      );
    }
    
    
    if (loading){
        return <p>Loading... </p>;
    }
    
    if (error){
        return <p>Error: {error.message}</p>;
    }
    
    return(
        <div>            
            <h2>Search results for {search} - {books.length} results  </h2>
            {search!==undefined? books.slice((active-1)*numOfBooksPerPage, (active)*numOfBooksPerPage).map((book)=>( <Book {...book}/> )) :''}
            <div className="container d-flex justify-content-center">
                <Pagination size="sm" totalPages={totalpages} activePage={active/numOfBooksPerPage}>
                    <Pagination.Prev onClick={() => {
                        if (active > 1) {
                            setActive(active - 1);
                        }}}/>
                    {pages}
                    <Pagination.Next
                        onClick={() => {
                            if (active <= totalpages) {
                                setActive(active + 1);
                            }
                        }}
                    />
                </Pagination>
            </div>
            <h3> <Button onClick={()=>viewTable(books,search)}> See in table view</Button>  <Button onClick={()=>viewGraph(books,search)}> See in a graphical view</Button></h3>
            
        </div>    
    )
}




