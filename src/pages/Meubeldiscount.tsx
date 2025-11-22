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
  name: `Meubeldiscount ${i + 1}`,
  image: `/assets/meubeldiscount/meubeldiscount${i + 1}.jpg`,
}));

export default function Meubeldiscount() {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MUILink component={Link} to="/">
            Home
          </MUILink>
          <Typography color="text.primary">Meubeldiscount</Typography>
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
              Kwalitatieve meubels tegen scherpe prijzen
            </Typography>
            <Typography variant="body1">
              Wij zijn gespecialiseerd in nieuwe en tweedehands meubelen en
              diverse kleine artikelen.
            </Typography>
          </Box>

          {/* Page Title */}
          <Typography variant="h4" gutterBottom>
            Meubeldiscount
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Wij zijn gespecialiseerd in het verkopen van nieuwe en tweedehands
            meubelen, evenals diverse kleine artikelen voor in huis. Bij
            Meubeldiscount vind je een breed assortiment van kwalitatieve
            meubels tegen scherpe prijzen. Of je nu op zoek bent naar een
            comfortabele bank, een stijlvolle eettafel, een praktische kast of
            leuke accessoires, wij hebben voor ieder wat wils.
          </Typography>

          {/* Product Grid */}
          <Grid container spacing={3}>
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
        </Box>
      </Fade>
    </Container>
  );
}
