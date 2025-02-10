import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
      <AppBar position="static" color="primary" sx={{ backgroundColor: '#000' }}>
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="news">News</Button>
            <Button color="inherit" component={Link} to="schedule">Schedule</Button>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
 