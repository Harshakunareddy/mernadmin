import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  // Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  PersonOutline,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";

// import profileImage from "assets/profile.jpeg";

import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  // InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);


  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");


  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          
          {/* <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween> */}


          
          <FlexBetween
            gap="3rem"
            p="0.1rem 1.5rem"

          >
            
            <Typography variant="h4" fontWeight="bold">
              Admin Panel
            </Typography>

          </FlexBetween>

        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        {isNonMediumScreens ? 

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                height="50px"
                width="50px"
                marginTop="20px"
                borderRadius="50%"
                sx={{ color: "#ffd166" }}
              >
                <PersonOutline />
              </Box>
              
                  
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.85rem"
                    sx={{ color: theme.palette.secondary[100] }}
                >
                    {/* {user.name} */}
                    Vehk
                  </Typography>
                  <Typography
                    fontSize="0.75rem"
                    sx={{ color: theme.palette.secondary[200] }}
                  >
                    {/* {user.occupation} */}
                    Admin
                  </Typography>
                </Box> 
                
              
              
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>


              <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
              </Menu>
            </FlexBetween>
            :
                <div> 

                </div>
        }

        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
