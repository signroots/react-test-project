import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
    card:{
        marginBottom:theme.spacing(5)
    },
    media:{
        height:250,
        [theme.breakpoints.down("sm")]:{
            height:150,

        },
    },
  
}))

const Post = () =>{
  const classes=useStyles()
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media}
            image="img1.jpg"
            title="my post"
            />
            <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                Lorem Ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
            
            
        </CardActionArea>
    </Card>
  )
 
    
  
}

export default Post;
