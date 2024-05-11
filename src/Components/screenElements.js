import {useState,useEffect,useContext} from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-balham.css"
// import '../styles/bootstrapp.css'
import styles from '../styles/bootstrapp.module.css'


import { getAuthorWorks } from "../api";
import { BrowserRouter as Router, Routes,Route,Link,NavLink } from "react-router-dom";
import {useGBooks,BookSearchInterestGraph} from "../api"

import Home from '../Routes/Home'
import BookSummary from '../Routes/BookSummary'
import { useNavigate,useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup'

import InputGroup from 'react-bootstrap/InputGroup';


// Study this:::::::::::
// import { Link, NavLink, Routes, Router } from "react-router-dom";

// const Book = ({ book }) => {
//   return (
//     <div>
//       <h1>{book.title}</h1>
//       {Object.entries(book).map((key, value) => (
//         <p>{`The book has feature: ${key} with value: ${value}`}</p>
//       ))}

//       <Link to="/bookdetail?isbn={book.isbn}">Get Book Detail</Link>
//       {/* <BookSearchInterestGraph bootTitle={book.title}/> */}
//     </div>
//   );
// };

// const App = () => {
//   const [book, setBook] = useState({
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     description: "The Great Gatsby is a novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922.",
//   });

//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/book">Book</Link>
//           </li>
//         </ul>
//         <Book book={book} />
//       </div>
//     </Router>
//   );
// };

// export default App;

export function Book(book){  
 
  const navigate = useNavigate();
  const handleClick = () => {   
    navigate(`/books/${book.title}`,{state: { book }})  
  };     
  return(

    <Card className={styles.card} id={`Book-${book.title}`}>
      
        <Card.Img className={styles.cimg}variant="bottom"src={book.imageLinks.thumbnail} alt="Book Cover" />      
        <Card.Body className={styles.cbody}>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle>Author: {book.authors}</Card.Subtitle>
          <Card.Text>{book.searchInfo.textSnippet} </Card.Text>
        </Card.Body>
        <Card.Footer className={styles.cfooter}>
          <Button onClick={()=>handleClick()}>Get Book Detail</Button>      
        </Card.Footer>
    </Card>
  );
}

export function SearchBar(props){
  const [innerSearch, setInnerSearch]= useState("")
 
  return(
    <Form className={styles.searchform}onSubmit={ (event)=>{
      event.preventDefault();
      props.onSubmit(innerSearch)}}>
    <InputGroup 
      className={styles.search}>
      <Form.Control
        placeholder="Search for your favourite books!"
        aria-label="Search Bar"
        aria-describedby="search-button"
        name="search"
        type="text"
        id="search"
        onChange={(e)=>setInnerSearch(e.target.value)}
        value={innerSearch}
      />
      
    <Button id="search-button" type="submit">Search</Button>
  </InputGroup>
  </Form>
  )
}



export function BookDetail(props){
  const { loading, works, error } = getAuthorWorks(props.book.authors);
  const navigate = useNavigate();
  const handleClickReturn = () => {            
    navigate(-1)
    
  };     

  const ratingsLI = ((book)=>{
    let requirementsBool = []
    requirementsBool.push(book.averageRating!=="Unknown averageRating")
    requirementsBool.push(book.ratingsCount!=="Unknown ratingCount")
    if (requirementsBool.every((bool)=>bool)){
      return (
        <li>
          {`Avg Rating: ${book.averageRating} from ${book.ratingsCount} reviews.`}
        </li>
        )
    }
  })

  const buyButton = (book)=>{
    let requiredFields =  ["listPrice","buyLink","currencyCode"]
    let requirementsBool = []
   

 

    props.book.saleInfo.saleability ==="FOR_SALE"? requirementsBool.push(true):requirementsBool.push(false)
    
    requiredFields.map((field)=>props.book.saleInfo[field]==="undefined"?requirementsBool.push(false):requirementsBool.push(true))
    
    if (requirementsBool.every((bool)=>bool)){
      return(
        <li>
          <Button href={props.book.saleInfo.buyLink}>
            Buy Now: {`$${props.book.saleInfo.listPrice.amount} ${props.book.saleInfo.listPrice.currencyCode}`}
          </Button>                         
        </li>
      )
    }
  }


  if (loading){
    return <p>Loading... </p>;
  }

  if (error){
        return <p>Error: {error.message}</p>;
  }

  return (
    <div>
    <Card className={styles.detailcard}>
        <Card.Header>{props.book.title}</Card.Header>
        <Card.Body className={styles.detailbody}>
        <Card.Img className={styles.detailimg}src={props.book.imageLinks.thumbnail} alt="Book Cover"/>
        <Card.Text>
          <ul>
            <li>Author: {props.book.authors}</li>
            <li>Genre: {props.book.categories}</li>
            <li>Published Date: {props.book.publishedDate.toLocaleDateString()}</li>
            {props.book.pageCount>0?<li>Page Count: {props.book.pageCount}</li>:""}
            {ratingsLI(props.book)}
            {typeof props.book.isbn10 ==="undefined"?"":<li>ISBN10: {props.book.isbn10}</li>}
            {buyButton(props.book)}
            
           
          </ul>      
        {props.book.description}
        </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button onClick={()=>handleClickReturn()}>Return to list</Button>      
        </Card.Footer>
      </Card>
      <CardGroup className={styles.detailcard}>
        <Card.Title className="styles.detailtitle">{works!==[]?`You might also like by ${props.book.authors}`:''}</Card.Title>
        <Card.Body className={styles.detailbody}>          
          <CardGroup className={styles.authorcardgroup}>
            {works!==undefined? works.map((work)=>( <Work {...work}/> )) :''}
          </CardGroup>        
        </Card.Body> 
      </CardGroup>
      </div>
  );
};


export function Work(work){  
 
  const navigate = useNavigate();
  const handleClick = () => {   
    navigate(`/search/${work.title}`,{state: { innerSearch:work.title }})  
  };     
  return(    
    <Card className={styles.authorcard} id={`Work-${work.title}`}>
          <Card.Body className={styles.authorcardbody}>
          <Card.Title>{work.title}</Card.Title>
          <Card.Subtitle>Author: {work.author_name}</Card.Subtitle>
          <Card.Text>Page Count: {work.number_of_pages_median} </Card.Text>
        </Card.Body>
        <Card.Footer className={styles.authorcardfooter}>
          <Button onClick={()=>handleClick()}>Search for this book!</Button>      
        </Card.Footer>
    </Card>    
  );
}