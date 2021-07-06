import React from 'react'

//material-ui components
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

//components
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

//images
import memories from './images/memories.png'
const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography varaint="h2" align="center">Memories</Typography>
                <img src={memories} alt="memories" height=""/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;