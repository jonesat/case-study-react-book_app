import { SearchBar } from '../Components/screenElements';
import { useNavigate } from "react-router-dom";
import Search from '../Routes/Search'

// import '../styles/bootstrapp.css'
import styles from '../styles/bootstrapp.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function About(){
    return(
        <div>
            <h1> Knockoff Google books project</h1>
            <p>This web app was made after observing my wife's book reading behaviours and her use of digital tools like "Goodreads".</p>
            <p>Inspired by that I wanted to make an app that could interact with online systems to get and display book information.</p>
        </div>
    )
}