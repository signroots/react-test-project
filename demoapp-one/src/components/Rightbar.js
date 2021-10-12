import { Avatar, Container , Divider, ImageList, ImageListItem,  Link,  makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";



const useStyles = makeStyles((theme)=>({
  container:{
    paddingTop: theme.spacing(10)
  },
  title:{
    fontSize:16,
    fontWeight:500,
    color:"#555"
  },
  link:{
    marginRight:theme.spacing(2),
    color:"#555",
    fontSize:16
  },
  
}))

const Rightbar = () =>{
  const classes=useStyles()
  return (
  <Container className={classes.container}>
    <Typography className={classes.title} gutterBottom >Online Friends</Typography>
    <AvatarGroup max={6} style={{marginBottom:20}}>
      <Avatar alt="Remy Sharp" src="img1.jpg" />
      <Avatar alt="Travis Howard" src="img1.jpg" />
      <Avatar alt="Cindy Baker" src="img1.jpg" />
      <Avatar alt="Agnes Walker" src="img.jpg" />
      <Avatar alt="Trevor Henderson" src="img1.jpg" />
      <Avatar alt="Agnes Walker" src="img1.jpg" />
      <Avatar alt="Trevor Henderson" src="img1.jpg" />
    </AvatarGroup>
    <Typography className={classes.title} gutterBottom >Gallery</Typography>
    <ImageList rowHeight={160} className={classes.ImageList} cols={4} >
     
        <ImageListItem>
          <img src="img1.jpg" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="img1.jpg" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="img1.jpg" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="img1.jpg" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="img1.jpg" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="img1.jpg" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="img1.jpg" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="img1.jpg" alt="" />
        </ImageListItem>
      

    </ImageList>
    <Typography className={classes.title} gutterBottom>
      Categories

    </Typography>

    <Link href="#" className={classes.link} variant="body2"> Food</Link>
    <Link href="#" className={classes.link} variant="body2"> Sport</Link>
    <Divider flexItem style={{marginBottom:10}} />
    <Link href="#" className={classes.link} variant="body2"> Science</Link>
    <Link href="#" className={classes.link} variant="body2"> Movies</Link>
    <Link href="#" className={classes.link} variant="body2"> Sport</Link>
    
    
  </Container>
  ) 
}

export default Rightbar;
