import { Box, Button, Typography, } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  display: 'none',
});


function AddContent ({handleFileUpload}) {
    return (
        
        <Button 
            sx={{backgroundColor : '#242439'}}
            component="label"
            variant="contained"
            startIcon={<UploadFileIcon/>}
            >
                Add Files
                <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleFileUpload(e.target.files)}
                />
            </Button>
        
    )
}

export default AddContent