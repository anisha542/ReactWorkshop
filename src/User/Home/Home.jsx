import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { baseUrl } from '../../Globals/Config';
import axios from 'axios';
import { Box, CircularProgress } from  '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MediaCard() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading]=React.useState(true);
    
     const getBlogs = async () => {
  let res = await axios.get(`${baseUrl}/file`);
  setBlogs(res.data);
  setLoading(false);
     };
     React.useEffect(() =>{
      getBlogs();
     },[]);
  return (
    <Box sx={{width: "80%", margin: "0 auto"}}>
      <Typography varient="h3" sx={{my: 3,textAlign: "center"}}>
        Blogs
        </Typography>
        {loading ?(
          <Box sx={{
            width: "100%",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          >
            <CircularProgress/>
            </Box>
        ):(
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3}}>
        {blogs.map((blog)=>{
          return(
            <Card key={blog.id} sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={blog.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom sx={{color: "blueviolet", fontSize: '16px'}}>
    
          @{blog.author}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title} 
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.description.slice(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button onClick={()=>navigate(`/blog/${blog.id}`)} size="small" >Learn More</Button>
      </CardActions>
    </Card>
          );
        })}
    {/* blogs loop end from here */}
    </Box>
        )}
    </Box>
  );
}
{/* // import axios from 'axios';
// import React from 'react';
// import { baseUrl } from "../../Globals/Config";

// const Home = () => { */}
{/* //   //setting state for blogs variable
//   //default value of blogs=[]
//   const [blogs, setBlogs] = React.useState([]);  
  
//     const getBlogs = async () => { */}
{/* //       let res = await axios.get(`${baseUrl}/file`);
      
//        console.log(res.data[3]);
//       //console.log(res.data[2])
//     };
//     React.useEffect(() => {
//       getBlogs();
//     },[]);
//     return (
//       <div>This is user Home</div> )
// };

// export default Home */}