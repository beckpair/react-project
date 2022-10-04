import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { CardForm } from '../../components/CardForm';
import { getAuth } from 'firebase/auth';

export const DataTable= () => {

    let { cardData, getData } = useGetData();

    return (
        <div style={{ height: 400, width: '100%' }}>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="../../assets/images/the_fool.png"
                                alt="the fool" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Fool
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Upright: Beginnings, innocence, spontaneity, free-spirited
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="../../assets/images/the_magician.png"
                                alt="the magician" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Magician
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Upright: Manifestation, resourcefulness, power, inspired action
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="../../assets/images/high_priestess.png"
                                alt="high priestess" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    High Priestess
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Upright: Intuition, sacred knowledge, divine feminine, subconscious
                                </Typography>
                                <Button>Update</Button>
                                <Button variant='contained' color='secondary'>Delete</Button>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="../../assets/images/the_empress.png"
                                alt="the empress" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Empress
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Upright: Feminity, beauty, nature, nurturing, abundance
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box> <br />
        <Button>Update</Button>
        <Button variant='contained' color='secondary'>Delete</Button>
        </div>
      );
}