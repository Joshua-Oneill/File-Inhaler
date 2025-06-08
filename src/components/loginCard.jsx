import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";

function LoginCard() {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Hey");
  };

  return (
    <Card>
      <CardContent>
        <Box
          component="form"
          onSubmit={submitHandler}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            minWidth: "30vh",
          }}
        >
          {/* <Typography color="white">Username</Typography> */}
          <TextField
            name="Email"
            placeholder="ex@mple.com.au"
            variant="outlined"
          />

          <Typography color="white">Password</Typography>
          <TextField placeholder="...." variant="outlined" />

          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default LoginCard;
