import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import LinkBehavior from './LinkBehavior';
import logoSena from '../../assets/images/logoSena.png';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { useState } from 'react';


function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-') 
        .replace(/[^\w-]+/g, ''); 
}

const useStyles = makeStyles ( (theme) => ({
    title: {
        flexGrow: 1,
    },
body:{
    backgroundColor: "#fffff",
},
        link: {
            color: 'white',
            textDecoration: 'none',
            margin: theme.spacing(2),
},
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between'
},
        logo: {
            height: '40px',
            marginRight: theme.spacing(2),
},
}))

// export default function Navbar() {
//     const classes = useStyles();
//     return (
//         <AppBar position="static">
//             <Toolbar className= {classes.toolbar}>
//                 <Typography variant="h6" className={classes.title}>
//                     SERVICIO NACIONAL DE APRENDIZAJE - SENA
//                 </Typography>
//                 <div>
//                     <Link to="/home" className={classes.link} >
//                         <Button color="inherit">Home</Button>
//                     </Link>
//                     <Link to="/cursos" className={classes.link} >
//                         <Button color="inherit">Cursos</Button>
//                     </Link>
//                     <Link to="/usuarios" className={classes.link} >
//                         <Button color="inherit">Usuarios</Button>
//                     </Link>
//                     <Link to="/mas-informacion" className={classes.link} >
//                         <Button color="inherit">Mas Infom</Button>
//                     </Link>
//                 </div>
//             </Toolbar>
//         </AppBar>
//     )
// }

export default function Navbar() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <div className={classes.drawer}>
            <List>
            {['Home', 'Cursos', 'Usuarios', 'Mas Informacion'].map((text) => (
                <ListItem color="inherit" component={LinkBehavior} to={`/${normalizeText(text)}`} key={text}>
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
            </List>
        </div>
    );
    return (
        <>
            
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <img src={logoSena} alt="SENA Logo" className={classes.logo} />
                    <Typography variant="h6" className={classes.title}>
                        SERVICIO NACIONAL DE APRENDIZAJE - SENA
                    </Typography>
                    <IconButton
                    edge="start"
                    color="inherit"
                    arial-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ display: {xs: 'block', md: 'none'} }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs:'none', md: 'flex'}}}>
                        {['Home', 'Cursos', 'Usuarios', 'Mas Informacion'].map((text) => {
                            <Button color='inherit' component={LinkBehavior} to={`/${normalizeText(text)}`} key={text}>
                                {text}
                            </Button>
                        })}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </>
        );
}