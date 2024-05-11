import { useNavigate,useLocation } from "react-router-dom";
import styles from '../styles/bootstrapp.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from 'react-chartjs-2';

export default function Graph(){
    const location = useLocation();
    let books = location.state.books;
    let innerSearch = location.state.searchResult
    console.log(location.state)
    const navigate = useNavigate();
    const handleClickReturn = () => {navigate(-1)};     

    const categories = {
        "1 year or less":[0,1],
        "1-5 years ago":[1,5],
        "5-10 years ago":[5,10],
        "10-25 years ago":[10,25],
        "25-50 years ago":[25,50],
        "50+ years ago":[50,4000],
    };
      
    const counts = {};
    
    for (const category of Object.keys(categories)) {
    counts[category] = 0;
    }
      
    for (const book of books) {
    const publishedDate = book.publishedDate;
    const currentYear = new Date().getFullYear();
    
    if (publishedDate) {
        const yearsAgo = currentYear - publishedDate.getFullYear();
    
        for (const category of Object.entries(categories)) {
        if (yearsAgo >=category[1][0] && yearsAgo < category[1][1]) {              
            counts[category[0]]++;
            break;
        }
        }
    } else {
        counts["50+ years ago"]++;
    }
    }

    const dataIn = {
    labels:Object.keys(counts),
    datasets:[{
        label:`Distribution of publish dates for search query - "${innerSearch}"`,
        data:Object.values(counts),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        
    }]
    }
    return(
        <div>
        <p> This page displays the different periods in which a book was published</p>
            <div className={styles.piechart}>
                <Pie data={dataIn}/> 
                <Button onClick={()=>handleClickReturn()}>Return to list</Button>                  
            </div>
        </div>
    )
}