import { useEffect,  } from "react";
import { Stack } from "@mui/material";

import { Outlet, useNavigate } from "react-router-dom";
const NavMenu = () => {

  const navigate = useNavigate();

  const token1 = sessionStorage?.getItem('token2')
  // ! Auto Logout
  useEffect(() => {
   if(!token1?.length){
    navigate('/')
   }
  }, []);


  return (
    <Stack >
     <Outlet />
    </Stack>
  );
};

export default NavMenu;
