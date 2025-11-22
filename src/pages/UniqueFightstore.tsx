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

const products: Product[] = Array.from({ length: 8 }, (_, i) => ({
  name: `Unique Fight Store ${i + 1}`,
  image: `/assets/uniquefightstore/UniqueFightstore${i + 1}.jpg`,
}));

export default function UniqueFightstore() {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <MUILink component={Link} to="/">
            Home
          </MUILink>
          <Typography color="text.primary">Unique Fightstore</Typography>
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
              Kickboks artikelen van topkwaliteit
            </Typography>
            <Typography variant="body1">
              Unique Fight Store in Hellevoetsluis biedt alles voor kickboxers
              en vechtsportliefhebbers.
            </Typography>
          </Box>

          {/* Page Title */}
          <Typography variant="h4" gutterBottom>
            Unique Fightstore
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Unique Fightstore is een winkel in Hellevoetsluis en is
            gespecialiseerd in het verkopen van kickboks artikelen. Bij ons vind
            je handschoenen, beschermers, bokszakken, trainingskleding en andere
            accessoires om je training naar een hoger niveau te tillen.
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
