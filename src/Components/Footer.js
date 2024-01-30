import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Paper from "@mui/material/Paper";
const Footer = () => {
  return (
    <Box>
        <Paper sx={{ backgroundColor: "#D4D4D4" }} elevation={2}>


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
            © JNTUK-GVCEV 2023 Copyright: ALL RIGHTS ARE RESERVED.
          </Typography>
        </Stack>
      </Paper>
    </Box>
  )
}

export default Footer