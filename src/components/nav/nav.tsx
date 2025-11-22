import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ArrowDropDown } from "@mui/icons-material";
import Hamburger from "../hamburger/hamburger";

export default function Nav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Witgoed Hellevoetsluis
        </Typography>

        <Box
          sx={{
            gap: 1,
            display: { xs: "none", sm: "flex" },
            "@media (max-width:719px)": { display: "none" },
            "@media (min-width:720px)": { display: "flex" },
          }}
        >
          <Button
            component={Link}
            to="/over-ons"
            sx={{
              color: "inherit",
              backgroundColor: isActive("/over-ons")
                ? "rgba(255, 255, 255, 0.15)"
                : "transparent",
            }}
          >
            Over ons
          </Button>

          <Button
            aria-controls={open ? "producten-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleOpen}
            endIcon={
              <ArrowDropDown
                sx={{
                  transition: "transform 0.3s",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            }
            sx={{
              color: "inherit",
              backgroundColor:
                currentPath.startsWith("/meubel") ||
                currentPath.startsWith("/witgoed") ||
                currentPath.startsWith("/unique") ||
                currentPath.startsWith("/happys")
                  ? "rgba(255, 255, 255, 0.15)"
                  : "transparent",
            }}
          >
            Producten
          </Button>

          <Menu
            id="producten-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <MenuItem
              component={Link}
              to="/witgoed-hellevoetsluis"
              selected={isActive("/witgoed-hellevoetsluis")}
              onClick={handleClose}
            >
              Witgoed Hellevoetsluis
            </MenuItem>
            <MenuItem
              component={Link}
              to="/unique-fightstore"
              selected={isActive("/unique-fightstore")}
              onClick={handleClose}
            >
              Unique fight store
            </MenuItem>
            <MenuItem
              component={Link}
              to="/happys-design"
              selected={isActive("/happys-design")}
              onClick={handleClose}
            >
              Happy's design
            </MenuItem>
          </Menu>

          <Button
            component={Link}
            to="/bezorgen"
            sx={{
              color: "inherit",
              backgroundColor: isActive("/bezorgen")
                ? "rgba(255, 255, 255, 0.15)"
                : "transparent",
            }}
          >
            Bezorgen
          </Button>
          <Button
            component={Link}
            to="/inkoop"
            sx={{
              color: "inherit",
              backgroundColor: isActive("/inkoop")
                ? "rgba(255, 255, 255, 0.15)"
                : "transparent",
            }}
          >
            Inkoop
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: "inherit",
              backgroundColor: isActive("/contact")
                ? "rgba(255, 255, 255, 0.15)"
                : "transparent",
            }}
          >
            Contact
          </Button>
        </Box>

        <Box
          sx={{
            display: "none",
            ml: 1,
            "@media (max-width:719px)": { display: "inline-flex" },
          }}
        >
          <Hamburger />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
