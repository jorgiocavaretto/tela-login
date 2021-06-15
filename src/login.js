import React from 'react';
import { 
    Button, 
    TextField,
    Paper, 
    Box, 
    Grid, 
    IconButton,
    Typography
} from '@material-ui/core'

import InvertColorsIcon from '@material-ui/icons/InvertColors';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' Copyright © '}
      Jorgio Cavaretto 010618026
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://nutricaoesaudeanimal.com.br/wp-content/uploads/2018/09/235940-descubra-as-melhores-estrategias-nutricionais-para-gado-de-corte.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(25, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    inferior: {
        position: "absolute",
        right: "center",
        top: "center"
    }
  }));

  const Login = ( { theme }) => {
    const classes = useStyles()

    return (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={6} md={7} className={classes.image} />
          <Grid item xs={12} sm={6} md={5} component={Paper} >
                      
           <div className={classes.paper}>
              
              <Typography component="h1" variant="h3">
                Farm Software
              </Typography>
              <form >
                <TextField
                  color="secondary"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Usuario"
                />
                <TextField
                  color="secondary"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Senha"
                  type="password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Entrar
                </Button>
                <Box mt={5}>
                  <Copyright />
                </Box>
                <IconButton 
                        edge="start" 
                        color="inherit" 
                        onClick={ theme }
                        className={classes.inferior} >
                        <InvertColorsIcon />
                </IconButton>
              </form>
            </div>
          </Grid>
        </Grid>
      );
  }

  export default Login