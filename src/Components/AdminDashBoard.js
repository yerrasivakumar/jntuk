import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TableBody,
  TableRow,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TextField,
  Tooltip,
  Grid,
  TableCell,
  tableCellClasses,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from '@emotion/styled';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';








function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const AdminDashBoard = () => {


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#cccccc",
      color: "#343434",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    borderRight: "1.5px solid #ababab",
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "1px", // Adjust the thickness of the horizontal lines as needed
      backgroundColor: "#ababab", // Customize the color of the horizontal lines
    },
  }));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [users, setUsers] = useState([{}]);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [fooduser,setFooduser] = useState([{}])
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [totalFoodCount, setTotalFoodCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [fromdate, setFromdate] = useState();
  // useEffect(() => {
  //   const response =  axios.get('http://localhost:3000/auth/AlluserDetails');
    
  // }, []);


  const moment = require('moment');
const today = moment();
const tt = today.format('YYYY-MM-DD');

  //console.log('hello',tt)

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/auth/AlluserDetails`
    })
      .then((response) => {
        console.log('sivaqqqqq',response?.data?.femaleCount);
        setUsers(response?.data?.formattedStudents);
        setMaleCount(response?.data?.maleCount)
        setFemaleCount(response?.data?.femaleCount)
        setTotalCount(response?.data?.totalCount)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if(fromdate === undefined){
      axios({
        method: "get",
        url: `http://localhost:3000/auth/attendance/${tt}`
      })
        .then((response) => {
          console.log('food details',response);
           setFooduser(response?.data?.users);
           setYesCount(response?.data?.presentCount)
           setNoCount(response.data?.absentCount)
           setTotalFoodCount(response?.data?.totalCount)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
  }, []);
 
  const handleSearch = () =>{
    axios({
      method: "get",
      url: `http://localhost:3000/auth/attendance/${fromdate}`
    })
      .then((response) => {
        console.log('food details',response);
         setFooduser(response?.data?.users);
         setYesCount(response?.data?.presentCount)
         setNoCount(response.data?.absentCount)
         setTotalFoodCount(response?.data?.totalCount)
      })
      .catch((error) => {
        console.log(error);
      });
  }
const [seachtext,setSeachtext] = useState('')
 //const [seachdata,setSeachdata] = useState([])
 const handleChange1 =(e)=>{
  setSeachtext(e.target.value);
  if(!e.target.value){
   // window.location.reload();
   
 
    axios({
      method: "get",
      url: `http://localhost:3000/auth/AlluserDetails`
    })
      .then((response) => {
        console.log('sivaqqqqq',response?.data?.femaleCount);
        setUsers(response?.data?.formattedStudents);
        setMaleCount(response?.data?.maleCount)
        setFemaleCount(response?.data?.femaleCount)
        setTotalCount(response?.data?.totalCount)
      })
      .catch((error) => {
        console.log(error);
      });
 

  }
}
  const HandelSearch1 = (e) => {
    if (!seachtext) {
      toast.error('Please Enter the RollNumber')
    } else{
      setUsers(users?.filter(item => item?.rollNumber === seachtext))
    }
  }

  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
 const [ausername,setAusername] = useState('');
  const [agmail,setAgmail] = useState('');
  const [apassword,setApassword] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [employeeId,setEmployeeId] = useState('');
 
const sumbithandle = () =>{
  if(!ausername){
  toast.error('Enter a UserName')
  }else if(!agmail){
    toast.error('Enter a Gmail')
  }else if(!apassword){
    toast.error('Enter a Password')
  }
  else if(!employeeId){
    toast.error('Enter a EmplyeeId')
  }
  else if(!phoneNumber){
    toast.error('Enter a PhoneNumber')
  }
  else{
    
  
  axios({
    method: "post",
    url: `http://localhost:3000/user/adminRegistration`,
    data:{
      'username':ausername,
      'email':agmail,
      'password':apassword,
      'employeeId':employeeId,
      'phonenumber':phoneNumber,

    }
  })
  .then((response) => {
   // console.log(response);
    setOpen(false);
    toast.success('Admin Registration Successfully')
   
  })
  .catch((error) => {
    toast.error(error?.response?.data?.message);
  });
  setAgmail('');
  setApassword('');
  setAusername('');
  setEmployeeId('');
  setPhoneNumber('')
} 
}


const [selectedFile, setSelectedFile] = useState(null);

const handleFileChange = (event) => {
  setSelectedFile(event.target.files[0]);
};

const handleUpload = async () => {
  if(!selectedFile){
 toast.error('Please upload a file')
  }else{
  try {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const base64String = fileReader.result.split(',')[1];

      // Make a POST request to the server with the base64 string
      fetch('http://localhost:3000/user/api/images/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ base64Image: base64String }),
      })
        .then(response => response.json(
          toast.success('Image Upload the Successfully')
        ))
       
        // .then(data => console.log(data))
      
        .catch(error => console.error('Error uploading image:', error));
    };

    // Read the selected file as a base64-encoded string
    fileReader.readAsDataURL(selectedFile);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}
};

  return (
    <>

<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Admin-Registeration</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'UserName'}
                  label={'UserName'}
                  fullWidth
                 name="UserName" value={ausername}
                 onChange={(e)=>setAusername(e.target.value)}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'AdminGmail'}
                  label={'AdminGmail'}
                  fullWidth
                 name="AdminGmail" value={agmail}
                 onChange={(e)=>setAgmail(e.target.value)}
                />
                  </Box>
         
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'Password'}
                  label={'Password'}
                  fullWidth
                 name="Password" value={apassword}
                 onChange={(e)=>setApassword(e.target.value)}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'EmployeeId'}
                  label={'EmployeeId'}
                  fullWidth
                 name="EmployeeId" value={employeeId}
                 onChange={(e)=>setEmployeeId(e.target.value)}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'PhoneNumber'}
                  label={'PhoneNumber'}
                  fullWidth
                 name="PhoneNumber" value={phoneNumber}
                 onChange={(e)=>setPhoneNumber(e.target.value)}
                />
                  </Box>
         
       
      
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    <Button variant="contained" onClick={handleClose}>cancel</Button>
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








    <Box>
      <Navbar/>
    </Box>
{/* tabs */}
<Box pt={7}>
<Box  sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="AdminDashBoard" {...a11yProps(0)} />
          <Tab label="Food Count" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Paper
        elevation={3}>
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

<Grid item sm={12} lg={12} xs={12} md={12}>
  <Box display="flex" alignItems={'center'} justifyContent={'space-between'} p={1} flexDirection={"row"} >
    <Box><Typography variant='h5' color={'black'}>AdminDashBoard</Typography></Box>
    <Box><Button  onClick={handleClickOpen} variant='contained'>Admin-create</Button></Box>
  </Box>
</Grid>

           </Grid>
    </Box></Stack></Paper>
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

<Grid item sm={3} lg={4} xs={12} md={3}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'14vh'} flexDirection={'column'} gap={2} backgroundColor={'#ff6600'}>
               <Box>Total Students</Box>
               <Box> {totalCount}</Box>
                </Box>
              </Grid>
<Grid item sm={3} lg={4} xs={12} md={3}>
                <Box display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} height={'14vh'}  flexDirection={'column'}backgroundColor={'#00cccc'}>
                <Box>Total Boys</Box>
               <Box>{maleCount}</Box>
                </Box>
              </Grid>
<Grid item sm={3} lg={4} xs={12} md={3}>
                <Box display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} height={'14vh'} flexDirection={'column'}backgroundColor={'#80ff00'}>
                <Box>Total Girls</Box>
               <Box>{femaleCount}</Box>
                </Box>
              </Grid>

<Grid item sm={12} lg={12} xs={12} md={12}>
<Box display={'flex'} gap={3} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} backgroundColor={''}>
               <Box>


               <TextField label='RollNumber' 
                size='small'
                value={seachtext}
                onChange={handleChange1}
                />
               </Box>
               <Box>
              <Button onClick={HandelSearch1} variant='contained' size='small'>Search</Button>
               </Box>
                </Box>
              </Grid>
<Grid item sm={12} lg={12} xs={12} md={12}>
                <Box  >
               <Box>
               <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
                minWidth: 800,
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
              }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    borderBottom: "1.5px solid #888888",
                    fontSize: "2rem",
                  }}
                >
                  <StyledTableCell >
                    <b>Email</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>FirstName</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>LastName</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>RollNumber</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Age</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Group</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>phoneNumber</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>DateOfBirth</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Year</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Gender</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>CollegeName</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Address</b>
                  </StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={users.length + 2}>
                        <Typography p={5} textAlign="center">
                          <CircularProgress />
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : users.length ? (
                    users.map((eachItem) => (
                      <TableRow key={eachItem.id}>
                        <StyledTableCell align="left">
                         {eachItem.email}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.firstName}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.lastName}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.rollNumber}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.age}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.group}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.phoneNumber}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.dateOfBirth}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.year}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.gender}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.collegeName}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.address}
                  </StyledTableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={users.length + 2}>
                        <Typography p={5} textAlign="center">
                          NO Data Available
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
            </Table>
          </TableContainer>
               </Box>
                </Box>
              </Grid>
           </Grid>
    </Box></Stack></Paper>
    </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Paper
        elevation={3}>
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

<Grid item sm={12} lg={12} xs={12} md={12}>
  <Box display="flex" alignItems={'center'} justifyContent={'space-between'} p={1} flexDirection={"row"} >
    <Box><Typography variant='h5' color={'black'}>Food-Count-DashBoard</Typography></Box>
    <Box > <Button sx={{mr:'10px'}} component="label" variant='contained'>
          Upload image
        <input hidden accept="image/*" multiple type="file"  onChange={handleFileChange} 
      />
      </Button>
      <Button  variant='contained' onClick={handleUpload}>Submit</Button></Box>
   
    {/* <Box><Button  variant='contained'>Admin-create</Button></Box> */}
  </Box>
</Grid>

           </Grid>
    </Box></Stack></Paper>
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
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'14vh'} flexDirection={'column'} gap={2} backgroundColor={'#00cccc'}>
               <Box>Total FoodCount</Box>
               <Box> {totalFoodCount}</Box>
                </Box>
              </Grid>
<Grid item sm={4} lg={4} xs={12} md={4}>
                <Box display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} height={'14vh'}  flexDirection={'column'}backgroundColor={' #99ff99'}>
                <Box>Total YesCount</Box>
               <Box>{yesCount}</Box>
                </Box>
              </Grid>
<Grid item sm={4} lg={4} xs={12} md={4}>
                <Box display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} height={'14vh'} flexDirection={'column'}backgroundColor={'#ffbf00'}>
                <Box>Total NOCount</Box>
               <Box>{noCount}</Box>
                </Box>
              </Grid>

<Grid item sm={12} lg={12} xs={12} md={12} >
                <Box display={'flex'} gap={3} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} backgroundColor={''}>
                <Box>


<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker
 size="small"
 value={fromdate}
 inputFormat="DD/MM/YYYY"

 onChange={(newValue) => {
   if(newValue){
    setFromdate(moment(newValue['$d'])?.format('YYYY-MM-DD'));
   }
   else{
    setFromdate('')
   }
   

 //  console.log(moment(newValue['$d']).format('YYYY-MM-DD'))
 }}
 
 renderInput={(params) => 
 
 <TextField
   size="small"
   
   sx={{
     backgroundColor:'white',
    
     border:'1px solid black',
     "&.MuiDateField-root": {
       height: "10px" 
     },

   }}
     

   
   {...params} />
 }
/>
</LocalizationProvider>
</Box>
               <Box>
              <Button variant='contained' size='small' onClick={handleSearch}>Search</Button>
               </Box>
                </Box>
              </Grid>
<Grid item sm={12} lg={12} xs={12} md={12}>
                <Box  >
               <Box>
               <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
                minWidth: 800,
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
              }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    borderBottom: "1.5px solid #888888",
                    fontSize: "2rem",
                  }}
                >
                  
                  <StyledTableCell >
                    <b>Gmail</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>FirstName</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>LastName</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>RollNumber</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Age</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Group</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>phoneNumber</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>DateOfBirth</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Year</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Gender</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>CollegeName</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Address</b>
                  </StyledTableCell>
                 
                  
                  
                </TableRow>
              </TableHead>
              <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={fooduser.length + 2}>
                        <Typography p={5} textAlign="center">
                          <CircularProgress />
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : fooduser.length ? (
                    fooduser.map((eachItem) => (
                      <TableRow key={eachItem.id}>
                        <StyledTableCell align="left">
                         {eachItem.email}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.firstName}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.lastName}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.rollNumber}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.age}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.group}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.phoneNumber}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.dateOfBirth}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.year}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.gender}
                  </StyledTableCell>
                        
                       
                        <StyledTableCell align="left">
                         {eachItem.collegeName}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.address}
                  </StyledTableCell>
                    
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={fooduser.length + 2}>
                        <Typography p={5} textAlign="center">
                          NO Data Available
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
            </Table>
          </TableContainer>
               </Box>
                </Box>
              </Grid>
           </Grid>
    </Box></Stack></Paper>
    </Box>
      </CustomTabPanel>
    
    </Box>
</Box>
{/* heading */}


    <Box mt={'-7px'}>
    
    </Box>

   

    <Box>
      <Footer/>
    </Box>
    </>
  )
}

export default AdminDashBoard