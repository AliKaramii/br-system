import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import pathes from "../../../router/pathes";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import { theme } from "../../../assets/themes/theme";

const UserProfileMenu = ({ color }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            display: { xs: "none", md: "block" },
            color: color,
          }}
        >
          شرکت فاطر
        </Typography>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }}>A</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            // mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              //   content: '""',
              display: "none",
              //   position: "absolute",
              //   top: 0,
              //   left: 44,
              //   width: 10,
              //   height: 10,
              //   bgcolor: "background.paper",
              //   transform: "translateY(-50%) rotate(45deg)",
              //   zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> حساب کاربری
        </MenuItem> */}
        <Link
          className="normal-link"
          to={pathes.DASHBOARD}
          style={{
            margin: "8px 16px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <ListItemIcon>
            <Dashboard fontSize="small" />
          </ListItemIcon>
          داشبورد
        </Link>
        <Link
          className="normal-link"
          to={pathes.RESERVEHISTORY}
          style={{
            margin: "16px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <ListItemIcon>
            <Dashboard fontSize="small" />
          </ListItemIcon>
          رزروهای اخیر
        </Link>
        <Divider />
        <MenuItem>
          <Link
            to={pathes.LOGIN}
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            خروج
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserProfileMenu;
