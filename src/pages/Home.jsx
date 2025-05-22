import { Box, Card, CardContent, Typography, Button, Container } from '@mui/material';
import PhotoCard from "../components/photocard"
import { useState,useEffect } from "react";
import { Tty } from '@mui/icons-material';
import { getDinoPass } from '../services/dinoPassApi';


function Home() {

    const [password, setPassword] = useState("");
    
    const loadPassword = async () => {
        try {
            const pass = await getDinoPass();
         
            setPassword(pass);
        } catch (err) {
            console.error(err);
            setPassword("Error generating password");
        }
        };

    useEffect(() => {
        loadPassword();
    }, []);

    return (
        
        <Container sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 2,
            mt: 5}}>

            <Card sx={{bgcolor: '#26263C', borderRadius: '15px', boxShadow: 10}}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant='h4'>{password}</Typography>
                    <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet ultrices ligula, in congue leo varius nec. Mauris vel nisl non tortor mattis efficitur. Aenean urna orci, convallis a mi in, ultrices tempor magna. Cras nec ipsum commodo, dapibus lectus id, semper tellus. Quisque massa lorem, bibendum et euismod nec, lobortis ut turpis. Nullam ut lobortis erat. Suspendisse suscipit tincidunt vestibulum. Nulla et molestie odio. Proin bibendum mauris eget mauris scelerisque bibendum. Vestibulum lacinia congue neque, in cursus metus aliquet ut. Morbi sit amet enim fermentum, tincidunt erat id, volutpat nisl. Nulla faucibus egestas sollicitudin. Sed eleifend vestibulum augue sit amet sagittis. Pellentesque lacinia luctus lectus eget viverra. In ultrices ac purus et faucibus.</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Home

// const [searchQuery, setSearchQuery] = useState("")

//     const photos = [
//         {id: 1, title: "Epic day", date: "1-2-24", },
//         {id: 2, title: "BAD DAY", date: "2-2-24", },
//         {id: 3, title: "penis", date: "3-2-24", },
//         {id: 4, title: "car", date: "4-2-24", },
//         {id: 5, title: "mmmmmm black", date: "5-2-24", },
//     ]

//     const searchHandler = (e) => {
//         e.preventDefault()
//         alert(searchQuery)
//     };

//     return <div className="home">

//         <form onSubmit={searchHandler} className="search-form">
//             <input
//                 type="text"
//                 placeholder="hello search Dork"
//                 className="search-input"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button type="submit" className="search-button">Search</button>
//         </form>

//         <div className="photo-grid">
//             {photos.map((photo) =>
//             photo.title.toLowerCase().startsWith(searchQuery) && 
//             (<PhotoCard photoData={photo} key={photo.id}/>
//             ))}
//         </div>
//     </div>