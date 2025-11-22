import React from "react";
import { Breadcrumbs, Typography, Link as MUILink, Box } from "@mui/material";
import { Link } from "react-router-dom";

interface BreadcrumbsNavProps {
  currentPage: string;
}

const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ currentPage }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <MUILink component={Link} to="/">
          Home
        </MUILink>
        <Typography color="text.primary">{currentPage}</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsNav;
