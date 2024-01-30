import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import about from '../Assets/aboutus-2.webp'
import JayaSuma from "../Assets/jntuk4.jpeg";
import Venkatasubbaiah from "../Assets/jntuk2.png";
import clg from "../Assets/clg.jpg";
import {
    Box,
    Button,
    Card,
    Stack,
    TableBody,
    TableRow,
    Typography,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TextField,
    Grid,
    TableCell,
    tableCellClasses,
    CardMedia,
  } from "@mui/material";
import styled from '@emotion/styled';

const Contactus = () => {
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
  return (

    <>
    <Box>
        <Navbar/>
        <Box mt={'3rem'}>
  <img src={about} alt='userbanner' style={{width: '100%',
             height: '50vh',
             backgroundSize:'cover',
             backgroundPosition:'center',
             overflow: 'hidden'
             }}/>
   </Box>
   <Box>
   <Paper sx={{ p: 2, backgroundColor: "white" }} elevation={2}>
        <Stack
          flexDirection={{ md: "row", sm: "column",lg:'column' }}
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"}
         
        ></Stack>
        <Typography sx={{fontSize:'2rem'}} textAlign={'center'} color={'blue'}>About us</Typography>
        <Typography sx={{fontFamily:'sans-serif',fontSize:'1rem'}} textAlign={'center'}>JNTUK-GVCEV offers a wide range of accommodation which is located in the campus. Our hostel consists of more than 700 beds which makes the students more convenient. Catering services are supervised by the hostel committees where it provides hygienic food. Dispensary is available with a qualified doctor which has the facilities for first-aid and minor ailments. Ambulance facilities are available round the clock. The hostellers are expected to follow strictly all the hostel rules, as decided by the wardens.</Typography>
        </Paper>
   </Box>
{/* room */}
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
     <Grid item sm={6} lg={6} xs={12} md={6}>
      <Box>
     <Typography backgroundColor={'#b3ff1a'}  textAlign={'center'} variant='h5'>
      BOYS Hostel
     </Typography>
     <Box pt={1} backgroundColor={'#888844'}>
     <Typography variant='h6' textAlign={'center'}>
     Total Number.of Rooms : 109
     </Typography>
     </Box>
     <Box pt={1} backgroundColor={' #888844'}>
     <Typography variant='h6' textAlign={'center'}>
     Hostel Inmates Boys : 655
     </Typography>
     </Box>
     </Box>
     </Grid>
     <Grid item sm={6} lg={6} xs={12} md={6}>
      <Box >
     <Typography backgroundColor={'#b3ff1a'}  textAlign={'center'} variant='h5'>
     Girls Hostel
     </Typography>
     <Box pt={1} backgroundColor={'#888844'}>
     <Typography variant='h6' textAlign={'center'}>
     Total Number.of Rooms : 119
     </Typography>
     </Box>
     <Box pt={1} backgroundColor={'#888844'}>
     <Typography variant='h6' textAlign={'center'}>
     Hostel Inmates Girls : 380
     </Typography>
     </Box>
     </Box>
     </Grid>
    
     
     
</Grid></Box></Stack></Paper>
   </Box>

{/* admission */}
        <Box>
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
             <Grid item sm={12} lg={12} xs={12} md={12}>
                
                <Typography variant='h5' backgroundColor={'grey'} textAlign={'center'}>
                HOSTEL ADMISSION FEE
                </Typography>
                <Box pt={2}>
                <Typography variant='h6' color={'red'}  textAlign={'center'}>
                The following is the hostel admission fee for Boys and Girls B.Tech/M.Tech/MCA students during the academic year 2015-16
                </Typography>
                </Box>
                <Box pt={1}>
                <Typography variant='h5' color={'black'} textAlign={'center'}>
                At the time of Admission
                </Typography>
                </Box>
                <Box>
                <Stack
          flexDirection={{ md: "row", sm: "column" }}
          marginLeft={"0rem"}
          pt={2}
          pb={1}
        >
          <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
                minWidth: 700,
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
                  <StyledTableCell align="left" width={-1}>

                    <b>S.NO.</b>
                  </StyledTableCell>
                  <StyledTableCell >
                    <b>	Description</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>	Rates</b>
                  </StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
               
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    Establishment Charges(Per term)
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    1400
                    </StyledTableCell>  
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    Room rent
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    600
                    </StyledTableCell>  
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      3
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    Water Charges and Electrical Charges
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    600
                    </StyledTableCell>  
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      4
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    Caustion deposit
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    3000
                    </StyledTableCell>  
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      5
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    Admission Fee
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    500
                    </StyledTableCell>  
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      6
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    Tin and Audit(per year)
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    300
                    </StyledTableCell>  
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      7
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    Miscellaneous fee(print and stationary)
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    400
                    </StyledTableCell>  
                  </StyledTableRow>
                  <StyledTableRow >
                    
                    <StyledTableCell align="center">
                   
                    </StyledTableCell>  
                    <StyledTableCell align="center">
                    Total
                    </StyledTableCell>  
                    <StyledTableCell align="left">
                    <span style={{backgroundColor:'red'}}> 6800</span>
                   
                    </StyledTableCell>  
                  </StyledTableRow>
                
              </TableBody>
            </Table>
          </TableContainer>
          <Paper />
        </Stack>
                </Box>
                <Box pt={1}>
                <Typography variant='h5' color={'black'} textAlign={'center'}>
                2nd Term
                </Typography>
                </Box>

                <Box>
                <Stack
          flexDirection={{ md: "row", sm: "column" }}
          marginLeft={"0rem"}
          pt={2}
          pb={1}
        >
          <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
                minWidth: 700,
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
                  <StyledTableCell align="left" width={-1}>

                    <b>S.NO.</b>
                  </StyledTableCell>
                  <StyledTableCell >
                    <b>	Description</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>	Rates</b>
                  </StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
               
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    Establishment Charges(Per term)
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    1400
                    </StyledTableCell>  
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    Room rent
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    600
                    </StyledTableCell>  
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      3
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    Water Charges and Electrical Charges
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    600
                    </StyledTableCell>  
                  </StyledTableRow>
                  <StyledTableRow >
                    
                    <StyledTableCell align="center">
                   
                    </StyledTableCell>  
                    <StyledTableCell align="center">
                    Total
                    </StyledTableCell>  
                    <StyledTableCell align="left">
                   <span style={{backgroundColor:'red'}}>2600</span> 
                    </StyledTableCell>  
                  </StyledTableRow>
                
                
                
              </TableBody>
            </Table>
          </TableContainer>
          <Paper />
        </Stack>
                </Box>


                </Grid>       
      </Grid></Box></Stack></Paper>
        </Box>

        <Box>
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
             <Grid item sm={12} lg={12} xs={12} md={12}>
                <Typography variant='h6' textAlign={'center'} color={'red'}>Monthly mess charges have to be paid at the rate of. Rs.54/-per day for boys and Rs.46/-per day for girls.</Typography>
                
                </Grid></Grid></Box></Stack></Paper>
        </Box>
        <Box>
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
          <Stack sx={{ width: "100%" }}>
            <Grid container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
             <Grid item sm={12} lg={6} xs={12} md={6}>
             <Box display={'flex'} >
                <Box>
                <Card sx={{width:'55vw'}}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={clg}
                        alt="clg"
                      />
                    <Typography textAlign={'center'}>
                 JNTUK-College
                    </Typography>
                    </Card>
              <Box justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"} flexDirection={'row'}  >
              <Card sx={{ maxWidth: 145 }}>
                      <CardMedia
                        component="img"
                        height="164"
                        image={Venkatasubbaiah}
                        alt="Venkatasubbaiah"
                      />
                    <Typography textAlign={'center'}>
                    Prof.Dr.K.
                    Venkatasubbaiah
                    </Typography>
                    </Card>
                    <Card sx={{ maxWidth: 145 }}>
                      <CardMedia
                        component="img"
                        height="164"
                        image={JayaSuma}
                        alt="JayaSuma"
                      />
                    <Typography textAlign={'center'}>
                    Prof. Dr. G. Jaya Suma
                    </Typography>
                    </Card>
              </Box>
              <Box></Box>
                </Box>
                <Box>
               
                </Box>
                    
                  </Box>
                
                </Grid>
                
             <Grid item sm={12} lg={6} xs={12} md={6}>
               <Box pt={'6rem'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
               <Typography variant='h5' textAlign={'center'}>Contact-Us</Typography></Box>
               <Stack  display={'flex'} alignItems={'center'} justifyContent={'center'}>
                   <form >
                  <Box pt={2} justifyContent="center" alignItems={"center"} display={"flex"}>
                  <TextField
                  required
                  size="small"
                  placeholder={'Gmail'}
                  label={'Gmail'}
                  style={{ width: "30vw" }}
                  name="email"
                />
                  </Box>
                  <Box pt={2} justifyContent="center" alignItems={"center"} display={"flex"}>
                  <TextField
                  required
                  size="large"
                  placeholder={'Address'}
                  label={'Address'}
                  style={{ width: "30vw", }}
                  name="Address"
                />
                  </Box>
                  <Box pt={2}>
                  <Button fullWidth variant='contained'>Submit</Button>
                  </Box>
                  </form>
                  
                  </Stack>
               
                
                </Grid>
                
                
                
                </Grid></Stack></Stack></Paper>
                </Box>

        
        <Footer/>
    </Box>
    </>
  )
}

export default Contactus