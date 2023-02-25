import {useEffect, useState} from "react";
import './home.css';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate, useParams } from "react-router-dom";
import PaginationEL from "../components/PaginationEl";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAsync } from "../redux/BookSlice";

const Home = () => {
 
     const [page, setPage] = useState(1)
     const [loading, setLoading] = useState(true)

     const navigate = useNavigate()
     const {id} = useParams();

     const dispatch = useDispatch();
     const books = useSelector((state)=> state.books);

    useEffect(()=> {
        // eslint-disable-next-line no-self-compare
        if(id !== page || page === page){
            navigate(`/${page}`,{replace: true})  
        }  
    }, [page, navigate, id])

    useEffect(() => {
     dispatch(getBooksAsync(page))
    }, [dispatch, page])

    useEffect(() => {
    if(books === null || books === undefined){
        setLoading(true)
    } else {
        setLoading(false)
    }   
    }, [books])

    return (
        <Box sx={{width: "100%"}}>
            <Box sx={{display: "flex", flexDirection: "column", flexWrap:"wrap", justifyContent:"center"}}>
                <Box sx={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
                    <Typography  variant="h3" component="div">Books List</Typography>
                </Box>
                <Box sx={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>current books: {books.count}</Typography>
                </Box>
                <Box sx={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
                    <PaginationEL state={setPage}/>
                </Box>
            </Box>
            <Box sx={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
            {loading && !books ? 
                <Box sx={{display: "flex", flexDirection: "column", flexWrap:"wrap", justifyContent:"center"}}>
                    <CircularProgress /> 
                </Box>
                : 
                books?.books.map((book, index) => ( 
                <Card className="card" sx={{margin:"40px", width: 275, height: 300 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                           Author: {book.book_author}
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} component="div">
                           Title: {book.book_title}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{display:"flex", justifyContent:"center"}}>
                        <Link id="link" sx={{textDecoration: "none"}} to={{
                            pathname:"/book",
                            hash: `${index}`
                        }} state={{
                            data: book
                        }}><Button variant="contained">About</Button></Link>
                    </CardActions>
                </Card>
             ))}
             </Box>
        </Box> 
    );
  }
  
  export default Home;