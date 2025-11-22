import {
  Breadcrumbs,
  Link as MUILink,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Producten() {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MUILink component={Link} to="/">
            Home
          </MUILink>
          <Typography color="text.primary">Producten</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h4" gutterBottom>
        Producten
      </Typography>
      <Typography>Een overzicht van onze producten.</Typography>
    </Container>
  );
}
