import { useState } from 'react';
import { useNewArticles, useBooks} from '../api';
import { Book,Headline, LikeCounter,SearchBar,BookDetail } from '../Components/screenElements';
import { useParams,useLocation } from "react-router-dom";
import {useGBooks,BookSearchInterestGraph} from "../api"

// import '../styles/bootstrapp.css'
import styles from '../styles/bootstrapp.module.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function BookSummary() {
    const location = useLocation();
    const { book } = location.state;
  
    return (
        <div>
            
            <BookDetail book={book}/>      
            
        </div>
    );
  }

export default BookSummary;
