
import { Box, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

function PhotoCard({photoData}) {
    
    function onHideClick() {
        alert("Hidden")
    }

    return (
        
        <Card sx={{
            borderRadius: '20px',
            background: '#242439',
            boxShadow:  '-8px 8px 8px #0e0e17, 8px -8px 8px #13131F'
        }}>

            <CardMedia 
                component="img"
                height="350"
               
                image={photoData.src.medium}
                alt={photoData.alt || 'Pexels photo'}
                sx={{
                    objectFit: 'cover'
                    //contain will avoid altering image to fit the card
                    //cover will stretch/crop/modify image to fit size of card
                }}


            
            />

            <CardContent sx={{ textAlign: 'center' }}>
                {/* <img src='..\fileIcon.png' alt="this failed"/> */}
                <Typography variant='h4'color='#D6D6DA'> {photoData.photographer} </Typography>
                <Typography variant='p' color='#D6D6DA'> {photoData.alt} </Typography>
                {/* <img src={photoData.src.medium} /> */}
            </CardContent>
        </Card>
    )
        
}

export default PhotoCard
