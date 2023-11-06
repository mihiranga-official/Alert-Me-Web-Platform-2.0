import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from '../images/img1.jpg';
export default function MediaCard() {
    return (
        
        <Card sx={{ maxWidth: 465, marginTop: 18 }}>

            <CardMedia
                component="img" 
                src={Image}       
                alt="cardpic"
                height="140"     
                title="green iguana"
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color={"red"}>
                    Emergency Alert For Gampaha District !
                </Typography>
                <Typography variant="body1" color="text.primary" fontWeight={"bold"}>
                    The Department of Irrigation says minor flooding is expected in
                    low-lying areas adjacent to the Kelani River during the next six to 12 hours.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"  >Share</Button>
                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    );
}