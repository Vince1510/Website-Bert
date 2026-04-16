import React from "react";
import {
  Breadcrumbs,
  Link as MUILink,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Fade,
} from "@mui/material";

import Grid from "@mui/material/GridLegacy";
import { Link } from "react-router-dom";

interface Product {
  name: string;
  image: string;
}

const products: Product[] = Array.from({ length: 24 }, (_, i) => ({
  name: `Witgoed Hellevoetsluis ${i + 1}`,
  image: `/assets/witgoedhellevoetsluis/WitgoedHellevoetsluis${i + 1}.jpg`,
}));

export default function WitgoedHellevoetsluis() {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MUILink component={Link} to="/">
            Home
          </MUILink>
          <Typography color="text.primary">Witgoed Hellevoetsluis</Typography>
        </Breadcrumbs>
      </Box>

      <Fade in timeout={600}>
        <Box>
          {/* Banner */}
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "white",
              py: 3,
              px: 2,
              textAlign: "center",
              borderRadius: 2,
              mb: 4,
              boxShadow: 3,
            }}
          >
            <Typography variant="h5" component="h2" fontWeight="bold">
              3 maanden garantie
            </Typography>
            <Typography variant="body1">
              Al ons witgoed wordt gecontroleerd en gerepareerd voordat het de
              winkel bereikt.
            </Typography>
          </Box>

          {/* Page Title */}
          <Typography variant="h4" gutterBottom>
            Witgoed Hellevoetsluis
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" paragraph>
              Door enorme drukte en omzet snelheid is het niet meer mogelijk om
              de website bij te houden. Voor de actuele voorraad bel ons gerust
              op of kom gezellig langs in de winkel: 0181 316 896 / 06 2907
              2906. Wil je regelmatig een update krijgen van het witgoed dat bij
              ons binnen komt? Wordt lid van onze Facebook pagina.
            </Typography>
            <Typography variant="body1" paragraph>
              Witgoed wordt door ons ingekocht op betrouwbare adressen. Deze
              machines worden eerst nagekeken en eventueel gerepareerd voordat
              ze in de winkel terechtkomen. Op deze machines zit altijd 3
              maanden garantie.
            </Typography>
          </Box>

          {/* Product Grid */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {products.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    sx={{ height: 250, objectFit: "contain" }}
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Informational Section */}
        </Box>
      </Fade>
    </Container>
  );
}
