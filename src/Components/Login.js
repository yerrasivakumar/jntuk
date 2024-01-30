
import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import slider1 from "../Assets/slider1.JPEG";
import slider2 from "../Assets/slider2.JPEG";
import slider3 from "../Assets/slider3.JPEG";
import { Avatar, IconButton, Paper } from '@mui/material';
import Venkatasubbaiah from "../Assets/jntuk2.png";
import JayaSuma from "../Assets/jntuk4.jpeg";
import Rajeswara from "../Assets/Dr.R.Rajeswara-Rao-CSE.jpg";
import Srikumar from "../Assets/sir.jpeg";
import sivamani from "../Assets/sivamani.jpg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useTheme } from '@emotion/react';
import LoginIcon from '@mui/icons-material/Login';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: `${slider2}`,
  },
  {
    imgPath: `${slider1}`,
  },
  {
    imgPath: `${slider3}`,
  },
];


const Login = () => {
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
   <>
   <Box>
   <Box>
        <Box>
          <Paper
            square
            elevation={1}
            sx={{
              display: "flex",
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      height: "80vh",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      overflow: "hidden",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      </Box>
   </Box>
   {/* adminstration */}
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
            <Grid

              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item sm={3} lg={3} xs={12} md={3}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: blue[500] }}
                            aria-label="recipe"
                          >
                            V
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Prof.Dr.K.Venkatasubbaiah"
                        subheader="Hon’ble Vice-Chancellor"
                      />
                      <CardMedia
                        component="img"
                        height="354"
                        image={Venkatasubbaiah}
                        alt="Venkatasubbaiah"
                       
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        "The hostels of JNTUK UCE Vizianagaram are started in the year 2010 at this hill top campus with an aim to provide charmed life to the Student"
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton
                          aria-label="add to favorites"
                          color="primary"
                        >
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={3} lg={3} xs={12} md={3}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: blue[500] }}
                            aria-label="recipe"
                          >
                            J
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Prof. Dr. G. Jaya Suma"
                        subheader="Register "
                      />
                      <CardMedia
                        component="img"
                        height="354"
                        image={JayaSuma}
                        alt="JayaSuma"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        "The hostels of JNTUK UCE Vizianagaram are started in the year 2010 at this hill top campus with an aim to provide charmed life to the Student"
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton
                          aria-label="add to favorites"
                          color="primary"
                        >
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={3} lg={3} xs={12} md={3}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: blue[500] }}
                            aria-label="recipe"
                          >
                            S
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Prof. K. Srikumar"
                        subheader="PROFESSOR & PRINCIPA"
                      />
                      <CardMedia
                        component="img"
                        height="354"
                        image={Srikumar}
                        alt="Prof. K. Srikumar"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        "The hostels of JNTUK UCE Vizianagaram are started in the year 2010 at this hill top campus with an aim to provide charmed life to the Student"
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton
                          aria-label="add to favorites"
                          color="primary"
                        >
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={3} lg={3} xs={12} md={3}>
                <Box>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: blue[500] }}
                            aria-label="recipe"
                          >
                            S
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Mr.D.D.V.SivaRam Rolangi"
                        subheader="Asst.Professor"
                      />
                      <CardMedia
                        component="img"
                        height="354"
                        image={sivamani}
                        alt="sivamani"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          "The hostels of JNTUK UCE Vizianagaram are started in the year 2010 at this hill top campus with an aim to provide charmed life to the Student"
                         
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton
                          aria-label="add to favorites"
                          color="primary"
                        >
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Paper>
   </Box>
   </>
  )
}

export default Login