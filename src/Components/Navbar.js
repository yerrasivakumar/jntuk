import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Jntuklogo from "../Assets/jntuklogo.jpg";
import { Avatar,  ListItemIcon, Menu, MenuItem, } from '@mui/material'
// import slider1 from "../Assets/slider1.JPEG";
// import slider2 from "../Assets/slider2.JPEG";
// import slider3 from "../Assets/slider3.JPEG";
import { useNavigate } from 'react-router-dom';
import { FormControlLabel, FormHelperText, IconButton, Link, Radio, RadioGroup } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import Venkatasubbaiah from "../Assets/jntuk2.png";
// import JayaSuma from "../Assets/jntuk4.jpeg";
import Paper from "@mui/material/Paper";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
import { styled } from "@mui/material/styles";



import Divider from '@mui/material/Divider';


import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from "@mui/material/Dialog";
import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCookies } from "react-cookie";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from "@mui/styles";
import moment from "moment";
import axios from 'axios';
import LoginIcon from '@mui/icons-material/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles(() => ({
  resize:{

    fontSize:'14px'
  },
  labelRoot: {
    fontSize: '12px',
    marginLeft:'-5px',
   marginTop:'-10px',
    "&$labelFocused": {
      fontSize:'15px',
      marginLeft:'5px',
    }
  },
  labelFocused: {}
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));




const Navbar = () => {
  
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      rollNumber: "",
      age: "",
      group: "",
      phoneNumber: "",
      dateOfBirth: null,
      collegeName: "",
      address: "",
      year: "",
      gender:'',
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        rollNumber: Yup.string().required("Required"),
      age: Yup.number()
        .positive("Age must be a positive number")
        .required("Required"),
      group: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),
      dateOfBirth: Yup.string().required("Required"),
      collegeName: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      year: Yup.string().required("Required"),
      gender: Yup.string().required('Required'),
    }),
    onSubmit: async(values) => {
      values.dateOfBirth = moment(values.dateOfBirth['$d']).format('DD/MM/YYYY')
      try {
        await axios.post('http://localhost:3000/auth/register', values);
        toast.success('User registered successfully');
        setOpen(false);
        navigate('/')
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }// Handle registration logic here
      console.log("siva",values)
    },
  });
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const appBarStyle = {
    borderBottom: "1px solid blue", // Change 'yourColor' to the color you want
  };

  const [cookies, setCookie] = useCookies(["cookieAccepted"]);

  const handleAccept = () => {
    setCookie("cookieAccepted", true, { path: "/", maxAge: 360000000 });
  };
  const handleReject = () => {
    setCookie("cookieAccepted", false, { path: "/", maxAge: 360000000 });
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setOpen1(false)
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
       
  //       width: 250,
  //     },
  //   },
  // };
  const [open1, setOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('NewAlert');
  // const [selectedOption1, setSelectedOption1] = useState('');
 //const navigate = useNavigate();
  const handleClickOpen1 = () => {
      setOpen1(true);
      setOpen(false)
    };
  const handleRadioChange1 = (NewAlert) => {
      setSelectedOption1(NewAlert);
    }
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [adminemail,setAdminemail] = useState('');
  const [adminpassword,setAdminpassword] = useState('');
  //  const [utoken,setUtoken] = useState('');
  const [pdata,setPdata] = useState('');
  const [usedeta,setUsedeta] = useState({
    firstName : '',
    lastName : '',
    age : '',
    phoneNumber : '',
    address : '',
    year : ''
  });
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

 // const [userdate, setUserdate] = useState(null)
  
 const handleClose6 = () => {
  setOpen6(false);
};
const handleClickOpen6 = () => {
  setOpen1(false)
  setOpen6(true);
};

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };
  const handleClickOpen5 = () => {
    setOpen4(false);
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };
  const handleClose1 = () => {
      setOpen1(false);
      // navigate('/UserDashBoard');
      
    };
  
  //   //alert()
  //   //e.preventDefault();
  //   // console.log('test',email)
  //   if (email === "") {
  //     toast.error(`Please Enter Email`);
  //   } 
  //   else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false){
  //     toast.error(`Please Enter valid Email Address`);
  //   }else if (!password.length) {
  //     toast.error("Please Enter Password")
  //   }else if(password.length <= 4){
  //     toast.error("Password minimum 5 Characters and maximum 10 Characters")
  //   }else{
  //     try {
  //       const response = await axios.post('http://localhost:3000/users/login', { email, password });
  
  //       if (response.status === 200) {
  //         const data = response.data;
  //         console.log('Login successful');
  //         console.log('JWT Token:', data.token);
  //       } else {
  //         console.error('Login failed');
  //       }
  //     } catch (error) {
  //       console.error('Error during login:', error);
  //     }
  //   }
    
  // }

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setAdminemail(value);
    } else if (name === 'password') {
      setAdminpassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(selectedOption1 === 'NewAlert'){

      if (email === "") {
        toast.error(`Please Enter Email`);
      } 
      else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false){
        toast.error(`Please Enter valid Email Address`);
      }else if (!password.length) {
        toast.error("Please Enter Password")
      }else if(password.length <= 4){
        toast.error("Password minimum 5 Characters and maximum 10 Characters")
      }
      else{ 
        axios({
          method: "post",
          url: `http://localhost:3000/auth/login`,
          data:{
            'email':email,
            'password':password
          }
        })
        .then((response) => {
          
          setPdata(response?.data?.id)
          // setUtoken(response?.data?.token)
          console.log('sadsad',response?.data?.token)
          toast.success('Login successful');
          sessionStorage.setItem('token1',response?.data?.token)
          sessionStorage.setItem('token2',response?.data?.id)
           navigate("/UserDashBoard")
        })
        .catch((error) => {
          console.log(error?.response?.data?.message);
        });
        
      }
      //console.log('response',pdata);
      // console.log('response1',pdata?.data?.token);
setEmail('');
setPassword('');  
} else{

      if (adminemail === "") {
        toast.error(`Please Enter AdminEmail`);
      } 
      else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adminemail) === false){
        toast.error(`Please Enter valid AdminEmail Address`);
      }else if (!adminpassword.length) {
        toast.error("Please Enter AdminPassword")
      }else if(adminpassword.length <= 4){
        toast.error("AdminPassword minimum 5 Characters and maximum 10 Characters")
      }
      else{ 
  try {
    const response = await axios.post('http://localhost:3000/user/adminLogin', {
      'email': adminemail, 
      'password':adminpassword });
console.log("sivaa",response);
    if (response.status === 200) {
      const data = response.data;
      toast.success('Login successful');
      sessionStorage.setItem('token1',data.token)
      navigate("/AdminDashBoard")
      console.log('JWT Token:', data.token);
    } 
  } catch (error) {
   toast.error(error?.response?.data?.message)
  }
  setAdminemail('');
  setAdminpassword('')
}
 }
 };

    const logout = () =>{
      sessionStorage.clear();
    navigate("/");
    }
  const token = sessionStorage?.getItem('token1')
  const token1 = sessionStorage?.getItem('token2')
  //console.log('idddd',token1);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/auth/students/${token1}`
    })
    .then((response) => {
         console.log('userdetails',response?.data?.student);
         setUsedeta(response?.data?.student)
         })
      .catch((error) => {
        console.log(error?.response?.data?.message);
      });
  }, [pdata])

  //console.log('tetssttst',usedeta)
  
const sumbithandle = (e) =>{
 e.preventDefault();
//  console.log('date', userdate);
 axios({
  method: "put",
  url: `http://localhost:3000/auth/${token1}`,
  data:{
    'firstName':usedeta.firstName,
    'lastName':usedeta.lastName,
    'age':usedeta.age,
    'phoneNumber':usedeta.phoneNumber,
    'address':usedeta.address,
    "year":usedeta.year,
   
  }
})
.then((response) => {
  console.log(response);
  toast.success('User Details Updated Successfully')
  setOpen5(false);
})
.catch((error) => {
  console.log(error?.response?.data?.message);
});
}
   
  return (
    <>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Forgotten password */}
<Box>
<Dialog
        open={open6}
        onClose={handleClose6}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Forgot Password</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'Password'}
                  label={'Password'}
                  fullWidth
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'ConfirmPassword'}
                  label={'ConfirmPassword'}
                  fullWidth
                />
                  </Box>
                  <Box pt={3} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                    <Button variant="contained" onClick={handleClose6}>cancel</Button>
                    </Box>
                    <Box>
    <Button variant="contained" onClick={handleClose6}>submit</Button>
    </Box>
                  </Box>
            </DialogContentText></DialogContent></Dialog>
          </Box>
    {/* login */}
    <Box >
<div>
<Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box justifyContent="center" alignItems={"center"} display={"flex"}>
            <FormControl>
      
      <Box  display={"flex"} alignItems={'center'} justifyContent={'space-around'} >

      <LoginIcon sx={{
                      fontSize: "3rem",
                      color:'blue',
                      borderRadius: "4%",
                      fontSizeAdjust: 3,
                    }} />
      </Box>
     <Box display={"flex"} alignItems={'center'} justifyContent={'space-around'} pt={1} >

     
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="NewAlert"
      >
        <Tooltip title='Mobile Number'>
        <FormControlLabel 
        value="NewAlert"
        checked={selectedOption1 === 'NewAlert'}
        onChange={() => handleRadioChange1('NewAlert')}  control={<Radio />} label='User Login' /></Tooltip>
        <Tooltip title='User Filters'>
        <FormControlLabel  value="NewAlertFilters"
            checked={selectedOption1 === 'NewAlertFilters'}
            onChange={() => handleRadioChange1('NewAlertFilters')} control={<Radio />} label='Admin Login'/></Tooltip>
      
      </RadioGroup>
      </Box>
      <div>
        {selectedOption1 === 'NewAlert' && <div>
        <Stack>
                   <form >
                  <Box pt={2} justifyContent="center" alignItems={"center"} display={"flex"}>
                  <TextField
                  required
                  size="small"
                  placeholder={'Gmail'}
                  label={'Gmail'}
                  fullWidth
                  name="email" value={email} onChange={handleChange}
                />
                  </Box>
                  <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'Password'}
                  label={'Password'}
                  fullWidth
                 name="password" value={password} onChange={handleChange}
                />
                  </Box>
                  </form>
                  </Stack>
            </div>}
        {selectedOption1 === 'NewAlertFilters' && <div>
        <Stack>
                  
        <form >
                  <Box pt={2} justifyContent="center" alignItems={"center"} display={"flex"}>
                  <TextField
                  required
                  size="small"
                  placeholder={'AdminGmail'}
                  label={'AdminGmail'}
                 fullWidth
                  name="email" value={adminemail} onChange={handleChange2}
                />
                  </Box>
                  <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'AdminPassword'}
                  label={'AdminPassword'}
                  fullWidth
                 name="password" value={adminpassword} onChange={handleChange2}
                />
                  </Box>
                  </form>
                 
                  </Stack>
            
            </div>}
           
      </div>
      <Box pt={2}>
                  <Button fullWidth variant="contained"  autoFocus onClick={handleSubmit}>
           Submit
          </Button>
                  </Box>
                  <Box pt={2} display={"flex"} alignItems={'center'} justifyContent={'space-around'} gap={2}>
                    <Box>
                    <Link><Typography sx={{cursor:'pointer'}} onClick={handleClickOpen6} >Forgotten Account ?</Typography>
                     </Link>
                   </Box>
                    <Box>
                    <Link><Typography sx={{cursor:'pointer'}} onClick={handleClickOpen}>Sign up for Registeration </Typography>
                     </Link>
                   </Box>
                  </Box>
    </FormControl>
            </Box>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
          <Tooltip title='Cancel'>
          <Button   variant="contained"  onClick={handleClose1}>Cancel</Button></Tooltip>
          <Tooltip title='Submit'
          ><Button  variant="contained"  autoFocus>
           Submit
          </Button></Tooltip>
        </DialogActions> */}
      </Dialog>
    </div>
    </Box>
    {/* profile page */}
<Box>
<Dialog
        open={open4}
        onClose={handleClose4}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Profile</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pl={'8rem'}>
          <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Typography >FirstName:</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.firstName}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>LastName</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.lastName}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>RollNumber</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.rollNumber}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>Gmail</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.email}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>Age</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.age}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>Group</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.group}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>Gender</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.gender}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>DateOfBirth</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.dateOfBirth}</Typography>
        {/* {moment(usedeta.dateOfBirth).format('YYYY-MM-DD')} */}
        </Grid>
        <Grid item xs={6}>
        <Typography>CollegeName</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.collegeName}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>Address</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.address}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>year</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.year}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>PhoneNumber</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography>{usedeta.phoneNumber}</Typography>
        </Grid>
      </Grid>
    </Box>
        </Box>
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    <Button variant="contained" onClick={handleClickOpen5}>Update</Button>
    <Button variant="contained" onClick={handleClose4}>cancel</Button>
    </Box>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose4}>cancel</Button>
          <Button onClick={handleClose4} autoFocus>
submi         
 </Button>
        </DialogActions> */}
      </Dialog>
</Box>
{/* user updated */}
<Box>
<Dialog
        open={open5}
        onClose={handleClose5}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Edit Details</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'FirstName'}
                  label={'FirstName'}
                  fullWidth
                 name="FirstName" value={usedeta.firstName} onChange={(e) =>setUsedeta({...usedeta,firstName:e.target.value})}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'LastName'}
                  label={'LastName'}
                  fullWidth
                 name="LastName" value={usedeta.lastName}
                 onChange={(e) =>setUsedeta({...usedeta,lastName:e.target.value})}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'Age'}
                  label={'Age'}
                  fullWidth
                 name="Age" value={usedeta.gender} 
                 onChange={(e) =>setUsedeta({...usedeta,gender:e.target.value})}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'PhoneNumber'}
                  label={'PhoneNumber'}
                  fullWidth
                 name="PhoneNumber" value={usedeta.phoneNumber}
                 onChange={(e) =>setUsedeta({...usedeta,phoneNumber:e.target.value})}
                />
                  </Box>
        
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'Address'}
                  label={'FirstName'}
                  fullWidth
                 name="FirstName" value={usedeta.address}
                 onChange={(e) =>setUsedeta({...usedeta,address:e.target.value})}
                />
                  </Box>
          <Box pt={2}>
          <FormControl  size="small" style={{ width: "100%" }}>
      <InputLabel id="yearx">year</InputLabel>
      <Select
        labelId="year"
        id="year"
         value={usedeta.year}
         onChange={(e) =>setUsedeta({...usedeta,year:e.target.value})}
        style={{ width: "100%" }}
        label="year"
        placeholder="year"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'1year'}>1'st year</MenuItem>
        <MenuItem value={'2year'}>2'nd year</MenuItem>
        <MenuItem value={'3year'}>3'rd year</MenuItem>
        <MenuItem value={'4year'}>4'th year</MenuItem>
      </Select>
  
    </FormControl>
                  </Box>
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    <Button variant="contained" onClick={handleClose5}>cancel</Button>
    <Button variant="contained" onClick={sumbithandle}>submit</Button>
    </Box>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose4}>cancel</Button>
          <Button onClick={handleClose4} autoFocus>
submi         
 </Button>
        </DialogActions> */}
      </Dialog>
</Box>

    {/* register dialog */}
      <Box>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md" // Set the desired maximum width (xs | sm | md | lg | xl)
            fullWidth // Set to true to make the dialog take up the full width
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <Box>
                <Box
                  justifyContent="center"
                  alignItems={"center"}
                  display={"flex"}
                >
                  <PersonAddAltOutlinedIcon
                    sx={{
                      fontSize: "3rem",
                      color: `${theme.palette.grey[500]}`,
                      borderRadius: "3%",
                      fontSizeAdjust: 4,
                    }}
                  />
                </Box>
                <Box
                  justifyContent="center"
                  alignItems={"center"}
                  display={"flex"}
                >
                  <Typography
                    variant="h6"
                    color={(theme) => theme.palette.grey[500]}
                    component="h2"
                    guttertop={"true"}
                    textTransform={"uppercase"}
                    fontWeight={300}
                    letterSpacing={1}
                  >
                    User Registeration
                  </Typography>
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" >
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
                  <form onSubmit={formik.handleSubmit}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          <TextField
                            size="small"
                            placeholder="Email"
                            style={{ width: "100%" }}
                            id="email"
                            label="Email"
                            {...formik.getFieldProps("email")}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          <TextField
                            id="password"
                            label="Password"
                            type="password"
                            size="small"
                            placeholder="Password"
                            // style={{ width: "18vw" }}
                            style={{ width: "100%" }}
                            {...formik.getFieldProps("password")}
                            error={
                              formik.touched.password &&
                              Boolean(formik.errors.password)
                            }
                            helperText={
                              formik.touched.password && formik.errors.password
                            }

                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="First Name"
                            id="firstName"
                            label="First Name"
                            {...formik.getFieldProps("firstName")}
                            error={
                              formik.touched.firstName &&
                              Boolean(formik.errors.firstName)
                            }
                            helperText={
                              formik.touched.firstName &&
                              formik.errors.firstName
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Last Name"
                            id="lastName"
                            label="Last Name"
                            {...formik.getFieldProps("lastName")}
                            error={
                              formik.touched.lastName &&
                              Boolean(formik.errors.lastName)
                            }
                            helperText={
                              formik.touched.lastName && formik.errors.lastName
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Roll Number"
                            id="rollNumber"
                            label="Roll Number"
                            {...formik.getFieldProps("rollNumber")}
                            error={
                              formik.touched.rollNumber &&
                              Boolean(formik.errors.rollNumber)
                            }
                            helperText={
                              formik.touched.rollNumber &&
                              formik.errors.rollNumber
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Age"
                            label="Age"
                            id="age"
                            {...formik.getFieldProps("age")}
                            error={
                              formik.touched.age && Boolean(formik.errors.age)
                            }
                            helperText={formik.touched.age && formik.errors.age}
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                         
                          {/* <TextField
                            size="small"
                            style={{ width: "18vw" }}
                            placeholder="Group"
                            id="group"
                            label="Group"
                            {...formik.getFieldProps("group")}
                            error={
                              formik.touched.group &&
                              Boolean(formik.errors.group)
                            }
                            helperText={
                              formik.touched.group && formik.errors.group
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          /> */}
                                           <FormControl  size="small" style={{ width: "100%" }}>
      <InputLabel id="Group">Group</InputLabel>
      <Select
        labelId="Group"
        id="Group"
        style={{ width: "100%" }}
        // value={age}
        // style={{width:'18vw'}}
        label="Group"
        placeholder="Group"
        {...formik.getFieldProps("group")}
        error={
          formik.touched.group &&
          Boolean(formik.errors.group)
        }
        helperText={
          formik.touched.group && formik.errors.group
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'IT'}>IT</MenuItem>
        <MenuItem value={'CSE'}>CSE</MenuItem>
        <MenuItem value={'EEE'}>EEE</MenuItem>
        <MenuItem value={'ECE'}>ECE</MenuItem>
        <MenuItem value={'MECH'}>MECH</MenuItem>
        <MenuItem value={'MET'}>MET</MenuItem>
        <MenuItem value={'MET'}>MET</MenuItem>
      </Select>
      {
        formik.touched.group &&
        Boolean(formik.errors.group) ?<FormHelperText>
        <Typography style={{color:'red',fontSize:'12px',fontWeight:'300'}}>Required</Typography>
      </FormHelperText>:""
      }
      
    </FormControl>
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Phone Number"
                            id="phoneNumber"
                            label="Phone Number"
                            {...formik.getFieldProps("phoneNumber")}
                            error={
                              formik.touched.phoneNumber &&
                              Boolean(formik.errors.phoneNumber)
                            }
                            helperText={
                              formik.touched.phoneNumber &&
                              formik.errors.phoneNumber
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                         
                          {/* <TextField
                            size="small"
                            style={{ width: "18vw" }}
                            placeholder="Date of Birth"
                            id="dob"
                            label="Date of Birth"
                            {...formik.getFieldProps("dob")}
                            error={
                              formik.touched.dob && Boolean(formik.errors.dob)
                            }
                            helperText={formik.touched.dob && formik.errors.dob}
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                        label='select the date'
                       size="small"
                        Select={formik.values.dateOfBirth}
                        onChange={(date) => formik.setFieldValue('dateOfBirth', date
                        )}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="dd/mm/yyyy"
                       sx={{
                        width:'100%',
                        "& .MuiInputBase-input": {
                          height: "8px" 
                        },
                       }}
                       error={ formik.touched.dateOfBirth &&
                        Boolean(formik.errors.dateOfBirth)}
                        helperText={
                          formik.touched.collegeName &&
                          formik.errors.collegeName
                        }
                        
                      style={{ width: "100%" }}
                        renderInput={(props)=><TextField  style={{ width: "100%" }}   
                        sx={{ backgroundColor: 'white',"& .MuiInputBase-input": {
                          height: "15px" ,
                          padding:'none'
                        },"& .MuiOutlinedInput-input": {
                          
                          fontSize: '13px',
                        },
                        }}
                         {...props}/> }
                        
                        />
      {
        formik.touched.dateOfBirth &&
        Boolean(formik.errors.dateOfBirth) ?<FormHelperText>
        <Typography style={{color:'red',fontSize:'12px',fontWeight:'300'}}>Required</Typography>
      </FormHelperText>:""
      }
                        </LocalizationProvider>
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="College Name"
                            id="collegeName"
                            label="College Name"
                            {...formik.getFieldProps("collegeName")}
                            error={
                              formik.touched.collegeName &&
                              Boolean(formik.errors.collegeName)
                            }
                            helperText={
                              formik.touched.collegeName &&
                              formik.errors.collegeName
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {/* <TextField
                  size="small"
                  
                  // style={{width:'18vw'}}
                  placeholder='Year'
                  id="year"
                  label="Year"
                  {...formik.getFieldProps('year')}
                  error={formik.touched.year && Boolean(formik.errors.year)}
                  helperText={formik.touched.year && formik.errors.year}
                  > */}
                          <FormControl  size="small" style={{ width: "100%" }}>
      <InputLabel id="yearx">Gender</InputLabel>
      <Select
        labelId="gender"
        id="gender"
        // value={age}
        // style={{width:'18vw'}}
        style={{ width: "100%" }}
        label="gender"
        placeholder="gender"
        {...formik.getFieldProps('gender')}
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        helperText={formik.touched.gender && formik.errors.gender}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'M'}>Male</MenuItem>
        <MenuItem value={'F'}>Female</MenuItem>
        <MenuItem value={'o'}>Others</MenuItem>
        
      </Select>
      {
        formik.touched.gender &&
        Boolean(formik.errors.gender) ?<FormHelperText>
        <Typography style={{color:'red',fontSize:'12px',fontWeight:'300'}}>Required</Typography>
      </FormHelperText>:""
      }
    </FormControl>
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {/* <TextField
                  size="small"
                  
                  // style={{width:'18vw'}}
                  placeholder='Year'
                  id="year"
                  label="Year"
                  {...formik.getFieldProps('year')}
                  error={formik.touched.year && Boolean(formik.errors.year)}
                  helperText={formik.touched.year && formik.errors.year}
                  > */}
                          <FormControl  size="small" style={{ width: "100%" }}>
      <InputLabel id="yearx">year</InputLabel>
      <Select
        labelId="year"
        id="year"
        // value={age}
        // style={{width:'18vw'}}
        style={{ width: "100%" }}
        label="year"
        placeholder="year"
        {...formik.getFieldProps('year')}
                  error={formik.touched.year && Boolean(formik.errors.year)}
                  helperText={formik.touched.year && formik.errors.year}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'1year'}>1'st year</MenuItem>
        <MenuItem value={'2year'}>2'nd year</MenuItem>
        <MenuItem value={'3year'}>3'rd year</MenuItem>
        <MenuItem value={'4year'}>4'th year</MenuItem>
      </Select>
      {
        formik.touched.year &&
        Boolean(formik.errors.year) ?<FormHelperText>
        <Typography style={{color:'red',fontSize:'12px',fontWeight:'300'}}>Required</Typography>
      </FormHelperText>:""
      }
    </FormControl>
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={12} xs={12} md={12}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="large"
                            style={{ width: "100%" }}
                            placeholder="Address"
                            id="address"
                            label="Address"
                            {...formik.getFieldProps("address")}
                            error={
                              formik.touched.address &&
                              Boolean(formik.errors.address)
                            }
                            helperText={
                              formik.touched.address && formik.errors.address
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box pt={2} display={'flex'} alignContent={'center'} justifyContent={'center'}>
                    <Button fullWidth type="submit" variant="contained" color="primary">
                     submit
                    </Button>
                    </Box>
                    <Box pt={2} display={'flex'} alignContent={'center'} justifyContent={'center'} >
                      <Typography sx={{cursor:'pointer'}} onClick={handleClickOpen1}>Already have an account?</Typography>
                    </Box>
                  </form>
                </Stack>
              </DialogContentText>
            </DialogContent>
            {/* <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button autoFocus>Submit</Button>
            </DialogActions> */}
          </Dialog>
        </div>
      </Box>

      {/* CardHeader */}
      <Box sx={{ flexGrow: 1 }}  display={"flex"}
              alignContent={"center"}
              flexDirection={"row"}>
        <AppBar
          position="fixed"
          style={appBarStyle}
          sx={{ backgroundColor: "white" }}
        >
          <Toolbar>
            <Tooltip title="Jntuk-ucev">
              <img
                src={Jntuklogo}
                style={{ width: "70px", height: "70px" }}
                alt="Jntuklogo"
              />
            </Tooltip>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Box
              display={"flex"}
              alignContent={"center"}
              flexDirection={"row"}
              gap={2}
            >
              {token===null?(
                
<Box  display={"flex"}
              alignContent={"center"}
              flexDirection={"row"}gap={2} >
                <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: " #041f62" }}
                  onClick={handleClickOpen1}
                >
                  Login
                </Button>
                </Box>
              
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: " #041f62" }}
                  onClick={handleClickOpen}
                >
                  Signup
                </Button>
              </Box>
          </Box>
              ):(
                <Box display={"flex"}
                alignContent={"center"}
                flexDirection={"row"}gap={2}>
                  <Box>
                  <Button
                  variant="contained"
                  sx={{ backgroundColor: " #041f62" }}
                  onClick={()=>navigate('/ContactUs')}
                >
                Contact
                </Button>
                </Box>
                <Box>
                  {/* */}
                 <Box mt={'-6px'} sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
       <Tooltip title="Account settings">
         <IconButton
           onClick={handleClick}
           size="small"
           sx={{ ml: 2 }}
           aria-controls={open ? 'account-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
         >
           <Avatar sx={{ width: 40, height: 40 }}>S</Avatar>
         </IconButton>
       </Tooltip>
     </Box>
     <Menu
       anchorEl={anchorEl}
       id="account-menu"
       open={open2}
       onClose={handleClose2}
       onClick={handleClose2}
       PaperProps={{
         elevation: 0,
         sx: {
           overflow: 'visible',
           filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
           mt: 1.5,
           '& .MuiAvatar-root': {
             width: 32,
             height: 32,
             ml: -0.5,
             mr: 1,
           },
           '&:before': {
             content: '""',
             display: 'block',
             position: 'absolute',
             top: 0,
             right: 14,
             width: 10,
             height: 10,
             bgcolor: 'background.paper',
             transform: 'translateY(-50%) rotate(45deg)',
             zIndex: 0,
           },
         },
       }}
       transformOrigin={{ horizontal: 'right', vertical: 'top' }}
       anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
     >
       <MenuItem onClick={handleClose2}>
        <Button onClick={handleClickOpen4}>
         <Avatar  />

          Profile
          </Button>
       </MenuItem>
       <MenuItem onClick={handleClose2}>
        <Button
         onClick={handleClickOpen5}>
         <EditIcon /> 
         Edit Profile
         </Button>
       </MenuItem>
       <Divider />
       <MenuItem onClick={handleClose2}>
         <ListItemIcon>
           <PersonAdd fontSize="small" />
         </ListItemIcon>
         Add another account
       </MenuItem>
       <MenuItem onClick={handleClose2}>
         <ListItemIcon>
           <Settings fontSize="small" />
         </ListItemIcon>
         Settings
       </MenuItem>
       <MenuItem onClick={handleClose2}>
       <Button color="error"
                  // sx={{ backgroundColor: " #041f62" }}
                  onClick={logout}
                >
         <ListItemIcon>
           <Logout fontSize="small" color="error" />
         </ListItemIcon>
         
                 
                  LOGOUT
                </Button>
       </MenuItem>
     </Menu>
                </Box>
                </Box>
              )
           
              }
             
            </Box>
          </Toolbar>
        </AppBar>
      </Box>


     

      
      {/* cookie */}
      <Paper sx={{ backgroundColor: "#D4D4D4" }} elevation={2}>
        <Stack
          flexDirection={{ md: "column", sm: "column" }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          pb={1}
        >
          <Box>
            {cookies.cookieAccepted === undefined && (
              <div className="cookie-consent">
                <p style={{ fontSize: "13px" }}>
                  We use cookies to enhance browser experience, serve
                  personalized ads or content, and analyze our traffic
                </p>
                <button onClick={handleReject}>Reject All</button>
                <button onClick={handleAccept}>Accept All</button>
              </div>
            )}
          </Box>
        </Stack>
      </Paper>
      {/* footer part */}

      {/* <Paper sx={{ backgroundColor: "#D4D4D4" }} elevation={2}>
        <Stack
          flexDirection={{ md: "column", sm: "column" }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          pb={1}
        >
          <Box>
            <Typography fontSize={"10px"}>
              Disclaimer: The translation into various languages is provided for
              the benefit of visitors. JNTUH is not responsible for any wrong
              interpretations/mistakes. For authenticated information in this
              site, please contact pa2registrar@jntuh.ac.in
            </Typography>
          </Box>
          <Typography
            fontSize={"13px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
            }}
          >
            © JNTUK-UCEV 2023 Copyright: ALL RIGHTS ARE RESERVED.
          </Typography>
        </Stack>
      </Paper> */}
    </>
  );
};

export default Navbar;
