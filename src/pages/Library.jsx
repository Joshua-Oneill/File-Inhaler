import { Box, Container, Card, CardContent, Typography, Button, TextField, Grid } from '@mui/material';
import PhotoCard from '../components/photocard';
import { useState, useEffect } from "react";

import { searchPhotos, getPhotos } from '../services/api';

import AddContent from '../components/addContent';
import SearchBar from '../components/SearchBar';

function Library() {
    
    const [searchQuery, setSearchQuery] = useState("")
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleFileUpload = (files) => {
      const uploadedFiles = Array.from(files);

      const newPhotos = uploadedFiles.map((file, index) => ({
        id: `local-${Date.now()}-${index}`,
        title: file.name,
        imageUrl: URL.createObjectURL(file),

      }));

      setPhotos(prev => [...newPhotos, ...prev]);

    };
    
    //generic loading of files behaviour - will load whatever api send (20 at this stage) onto the page when you land
    useEffect(() => {

      const loadPopularPhotos = async () => {
        try {
          const popularPhotos = await getPhotos(5) //function from api.jsx which runs a api query to the photo website to load 20 random photos
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

    //handles the updating of photos when you search for a term - will send this search term to the api
    const searchHandler = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
          const searchResults = await searchPhotos(searchQuery) //loads a function from api.jsx that will passs the search term into the api query and returns the result
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
      <Container maxWidth={false} sx={{ px: 4}}>
        
        <Box sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection : 'row',
          alignItems: 'center',
          gap: 2
        }}>
          <AddContent
            handleFileUpload={handleFileUpload}
          />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={searchHandler}
          />
        </Box>
          
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