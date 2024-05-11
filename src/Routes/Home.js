import { SearchBar } from '../Components/screenElements';
import { useNavigate } from "react-router-dom";
import Search from '../Routes/Search'

import styles from '../styles/bootstrapp.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function Home(){
    const navigate = useNavigate();
    const onSearch = (innerSearch)=>{
        navigate(`/search/${innerSearch}`,{state: { innerSearch }})
    }
    return(
        <div className={styles.searchcontainer}>            
            <SearchBar onSubmit={onSearch}/>  
        </div>            
    )
}