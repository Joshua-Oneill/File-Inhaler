import { Box } from "@mui/material";

import LoginCard from "../components/loginCard";

function LoginPage () {
    
    return(

        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '30vh',
        }}>
            <LoginCard/>
        </Box>

    )
}

export default LoginPage 

