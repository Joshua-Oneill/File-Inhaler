import { Box, Container, Card, CardContent, Typography, Button, TextField, Grid } from '@mui/material';
import PhotoCard from '../components/photocard';
import { useState, useEffect } from "react";

import { searchPhotos, getPhotos } from '../services/api';

function Library() {
    
    const [searchQuery, setSearchQuery] = useState("")
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadPopularPhotos = async () => {
        try {
          const popularPhotos = await getPhotos()
          setPhotos(popularPhotos)
        } catch (error) {
          //console.log(err);
          setError("FAILLLL")
        }
        finally {
          setLoading(false);
        }
      }

      loadPopularPhotos();

    }, [])

    const searchHandler = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
          const searchResults = await searchPhotos(searchQuery)
          console.log("Search results:", searchResults)
          setPhotos(searchResults)
          setError(null)
        } catch (err) {
          console.log(err)
          setError("Failed to search movies")

        } finally {
          setLoading(false)
        }

        setSearchQuery("");
    };

    return (
        <Container maxWidth={false} sx={{ px: 4 }}>
        
        <Box
          component="form"
          onSubmit={searchHandler}
          sx={{
            display: "flex",
            gap: 2,
            mb: 4,
            mt: 4,
          }}
        >
          <TextField
            
            fullWidth
            placeholder="hello search Dork"
            variant="outlined"

            sx={{
              "& .MuiOutlinedInput-root": {
                color:'#f2f2f7',
                backgroundColor: '#11111b'
                },
              "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2e2e2e",
                  borderWidth: "3px",
              },
            
            }}

            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </Box>
  
        {/* Photo Grid */}
        <Grid container spacing={3}>
          {photos.map((photo) => (
              <Grid item xs={12} sm={6} md={4} key={photo.id}>
                <PhotoCard photoData={photo} />
              </Grid>
            ))}
        </Grid>
      </Container>
    );
      
}

export default Library

{/* <   Box sx={{
            display: 'flex',
            gap: 4,
            flexWrap: 'wrap',
            justifyContent: 'center',
        }}>
            {photos.map((photo) =>
            photo.title.toLowerCase().startsWith(searchQuery) && 
            (<PhotoCard photoData={photo} key={photo.id}/>
            ))}
    </Box>  */}