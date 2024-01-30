import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import Modal from 'react-modal';
import { Box, Button, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import userBanner from '../Assets/userBanner.jpg'
import breakfast from '../Assets/breakfast.jpg'
import lunch from '../Assets/lunch.jpg'
import dinner from '../Assets/dinner.jpg'
import meals from '../Assets/veg-meals.jpg'
import boystimetable from '../Assets/boys.jpg'
import girlstimetable from '../Assets/girls.jpg'
import Card from "@mui/material/Card";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CardMedia from "@mui/material/CardMedia";
import canteen1 from '../Assets/cant1.webp';
import canteen2 from '../Assets/cant2.jpg';
import canteen3 from '../Assets/cant3.jpg'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';


const UserDashBoard = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
// useEffect(()=>{
// if(sessionStorage.getItem('token1') ===''){
//   navigate('/')
// }
// },[])
  useEffect(() => {
    const now = new Date();
    const targetOpenTime = new Date(now);
    targetOpenTime.setHours(9, 59, 1 ); // 5 pm

    const targetCloseTime = new Date(now);
    targetCloseTime.setHours(9, 60, 10); // 6 pm

    const openTimer = setTimeout(() => {
      setIsModalOpen(true);
    }, targetOpenTime - now);

    const closeTimer = setTimeout(() => {
      setIsModalOpen(false);
    }, targetCloseTime - now);

    // Clean up timers when the component unmounts
    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);
const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width:'20%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none', // Remove border
      padding: '20px', // Decrease padding
      borderRadius: '8px', // Add border-radius
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Add box shadow
    },
  };

  const token1 = sessionStorage?.getItem('token2')
  const [choice,setChoice] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!choice){
     toast.error('Please Selected the one option')
    }else{
   
        axios({
          method: "post",
          url: `http://localhost:3000/auth/attendance`,
          data:{
            'studentId':token1,
            'present':choice
          }
        })
        .then((response) => {
          console.log(response);
          toast.success(response.data.message);
          setIsModalOpen(false)
        })
        .catch((error) => {
          console.log(error?.response?.data?.message);
        });
    }  
      
 };


 const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/api/images/all');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
  const Handle = (src)=>{
    console.log("ssss",src);
    let a = document.createElement('a')
    a.href = src
    a.download=src
    a.click()
     }
  return (
    <>
<Box display={'flex'} justifyContent={'center'} flexDirection={'column'} >
<Modal  isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}  style={customStyles}> 
       <Box display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
        <Box>
          <IconButton >
            <AddAlertIcon  sx={{
                      fontSize: "2.5rem",
                      borderRadius: "4%",
                      fontSizeAdjust: 4,
                    }}/>
          </IconButton>
        </Box>
       <Box pb={1}> <Typography variant='h5' color={'red'}>Today Meals</Typography></Box>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Do you want Meals</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={choice}
        onChange={(e)=>setChoice(e.target.value)}
      >
        <FormControlLabel value="true" control={<Radio />} label="Yes" />
        <FormControlLabel value="false" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <Button variant='contained' onClick={handleSubmit}>submit</Button>
       </Box>
      </Modal>
      </Box>
    <Box>
    <Navbar/>
    {/* banner */}
   <Box mt={'3.5rem'}>
  <img src={userBanner} alt='userbanner' style={{width: '100%',
             height: '70vh',
             backgroundSize:'cover',
             backgroundPosition:'center',
             overflow: 'hidden'
             }}/>
   </Box>
   {/* about us */}
   <Box>
   <Paper sx={{ p: 2, backgroundColor: "white" }} elevation={2}>
        <Stack
          flexDirection={{ md: "row", sm: "column",lg:'column' }}
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"}
         
        ></Stack>
        <Typography sx={{fontSize:'2rem'}} textAlign={'center'} color={'blue'}>JNTUK-INFORMATION</Typography>
        <Typography sx={{fontFamily:'sans-serif',fontSize:'1rem'}} textAlign={'center'}>JNTUK-UCEV offers a wide range of accommodation which is located in the campus. Our hostel consists of more than 700 beds which makes the students more convenient. Catering services are supervised by the hostel committees where it provides hygienic food. Dispensary is available with a qualified doctor which has the facilities for first-aid and minor ailments. Ambulance facilities are available round the clock. The hostellers are expected to follow strictly all the hostel rules, as decided by the wardens.</Typography>
        </Paper>
   </Box>
   {/* images */}
   <Box>
   <Paper sx={{ backgroundColor: "white" }} elevation={2}>
        <Stack
          flexDirection={{
            xs: "column",
            md: "column",
            sm: "row",
            lg: "column",
          }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          pb={1}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >

<Grid item sm={3} lg={3} xs={12} md={3}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="354"
                        image={breakfast}
                        alt="breakfast"
                      />
                    
                    </Card>
                  </Box>
                </Box>
              </Grid>
<Grid item sm={3} lg={3} xs={12} md={3}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="354"
                        image={lunch}
                        alt="lunch"
                      />
                    
                    </Card>
                  </Box>
                </Box>
              </Grid>
<Grid item sm={3} lg={3} xs={12} md={3}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="354"
                        image={dinner}
                        alt="dinner"
                      />
                    
                    </Card>
                  </Box>
                </Box>
              </Grid>
<Grid item sm={3} lg={3} xs={12} md={3}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="354"
                        image={meals}
                        alt="meals"
                      />
                    
                    </Card>
                  </Box>
                </Box>
              </Grid>
           </Grid>
    </Box></Stack></Paper>
   </Box>
   
   {/* time- table */}
   <Box pt={1}>
   <Paper sx={{ backgroundColor: "white" }} pt={1} elevation={2}>
        <Stack
          flexDirection={{
            xs: "column",
            md: "column",
            sm: "row",
            lg: "column",
          }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          pb={1}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
             <Grid item sm={6} lg={6} xs={12} md={6}>
             <Box justifyContent={"center"}
          display={"flex"}
          alignItems={"center"} >
                    <Card sx={{ maxWidth: 745 }}>
                      <CardMedia
                        component="img"
                        height="354"
                        
                        image={boystimetable}
                        alt="timetable"
                      />
                    
                    </Card>
                  </Box>
              
              </Grid> 
             <Grid item sm={6} lg={6} xs={12} md={6}>
             <Box justifyContent={"center"}
          display={"flex"}
          alignItems={"center"} >
                    <Card sx={{ maxWidth: 745 }}>
                      <CardMedia
                        component="img"
                        height="354"
                        
                        image={girlstimetable}
                        alt="timetable"
                      />
                    
                    </Card>
                  </Box>
              {/* <Box pt={1} justifyContent={"center"}
          display={"flex"}
          alignItems={"center"} gap={0}>
                <Typography textAlign={'center'}>Monday</Typography>
                <Typography  textAlign={'center'}>Tuesday</Typography>
                <Typography  textAlign={'center'}>Wednessday</Typography>
                <Typography  textAlign={'center'}>thrusday</Typography>
                <Typography  textAlign={'center'}>Friday</Typography>
                <Typography  textAlign={'center'}>Saturday</Typography>
                <Typography  textAlign={'center'}>Sunday</Typography>
              </Box> */}
              
               
              
              </Grid> 
              
              
   </Grid></Box></Stack></Paper>
   </Box>
   {/* menu card */}
   
   {/* mess photos */}
   <Box>
   <Paper sx={{ backgroundColor: "white" }} elevation={2}>
        <Stack
          flexDirection={{
            xs: "column",
            md: "column",
            sm: "row",
            lg: "column",
          }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          pb={1}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >

<Grid item sm={4} lg={4} xs={12} md={4}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="354"
                        image={canteen1}
                        alt="canteen1"
                      />
                    
                    </Card>
                  </Box>
                </Box>
              </Grid>
<Grid item sm={4} lg={4} xs={12} md={4}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="354"
                        image={canteen2}
                        alt="canteen2"
                      />
                    
                    </Card>
                  </Box>
                </Box>
              </Grid>
<Grid item sm={4} lg={4} xs={12} md={4}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="354"
                        image={canteen3}
                        alt="canteen3"
                      />
                    
                    </Card>
                  </Box>
                </Box>
              </Grid>

           </Grid>
    </Box></Stack></Paper>
    <Box pt={1} display={'flex'} justifyContent={'center'} flexDirection={'row'}> 
    {
      images.length>0?(<p>{images.map((image, index) => (
        <p key={index}>
         
         <div >
         <img
            src={`data:${image.contentType};base64,${image.base64Data}`}
            alt={`Image ${index}`}
            style={{ maxWidth: '800px', maxHeight: '400px' }}
            onClick={()=>{Handle(`data:${image.contentType};base64,${image.base64Data}`)}}
          />
        
         </div>
        </p>
      ))}</p>):(<p><h5>Mess bill image comming soon</h5></p>)
    }
    
     {/* <Box>
     <Box> <h5>Mess bill image comming soon</h5></Box>
        {images.map((image, index) => (
          <p key={index}>
           
           <div >
           <img
              src={`data:${image.contentType};base64,${image.base64Data}`}
              alt={`Image ${index}`}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
          
           </div>
          </p>
        ))}
        </Box> */}
      </Box>
   </Box>
    <Footer/>
    </Box>
    </>
  )
}

export default UserDashBoard