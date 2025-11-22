import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleDrawer = (next: boolean) => () => setOpen(next);
  const toggleProducts = () => setProductsOpen((p) => !p);

  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Box sx={{ display: "inline-flex" }}>
      <IconButton
        aria-label="open navigation"
        edge="end"
        color="inherit"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 280 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItemButton
              component={Link}
              to="/"
              onClick={toggleDrawer(false)}
              selected={isActive("/")}
              sx={{
                "&.Mui-selected": { color: "secondary.main" },
                "&.Mui-selected .MuiListItemIcon-root": {
                  color: "secondary.main",
                },
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/over-ons"
              onClick={toggleDrawer(false)}
              selected={isActive("/over-ons")}
              sx={{
                "&.Mui-selected": { color: "secondary.main" },
                "&.Mui-selected .MuiListItemIcon-root": {
                  color: "secondary.main",
                },
              }}
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Over ons" />
            </ListItemButton>

            <ListItemButton onClick={toggleProducts}>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="Producten" />
              {productsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={productsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  { path: "/meubeldiscount", label: "Meubeldiscount" },
                  {
                    path: "/witgoed-hellevoetsluis",
                    label: "Witgoed Hellevoetsluis",
                  },
                  { path: "/unique-fightstore", label: "Unique fight store" },
                  { path: "/happys-design", label: "Happy's design" },
                ].map((item) => (
                  <ListItemButton
                    key={item.path}
                    component={Link}
                    to={item.path}
                    onClick={toggleDrawer(false)}
                    selected={isActive(item.path)}
                    sx={{
                      pl: 4,
                      "&.Mui-selected": { color: "secondary.main" },
                      "&.Mui-selected .MuiListItemIcon-root": {
                        color: "secondary.main",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <ShoppingBagIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <Divider />

            {[
              {
                path: "/bezorgen",
                label: "Bezorgen",
                icon: <LocalShippingIcon />,
              },
              { path: "/inkoop", label: "Inkoop", icon: <StoreIcon /> },
              { path: "/contact", label: "Contact", icon: <ContactMailIcon /> },
            ].map((item) => (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
                selected={isActive(item.path)}
                sx={{
                  "&.Mui-selected": { color: "secondary.main" },
                  "&.Mui-selected .MuiListItemIcon-root": {
                    color: "secondary.main",
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
