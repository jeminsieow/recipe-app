import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import recipes from './images/recipes.png';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth="xl">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3">Recipees</Typography>
        <img className={classes.image} src={recipes} alt="recipes" height="80" />
      </AppBar>
      <Grow in>
        <Container maxWidth="xl">
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
