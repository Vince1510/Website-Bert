import React from "react";
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Fade,
} from "@mui/material";

import Grid from "@mui/material/GridLegacy";
import BreadcrumbsNav from "../components/BreadcrumbsNav";

interface Product {
  name: string;
  image: string;
}

const products: Product[] = Array.from({ length: 13 }, (_, i) => ({
  name: `Happy's Design ${i + 1}`,
  image: `/assets/happysdesign/happysdesign${i + 1}.jpg`,
}));

export default function HappysDesign() {
  return (
    <Container sx={{ py: 4 }}>
      {/* Breadcrumb */}
      <BreadcrumbsNav currentPage="Happy's Design" />

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
              Persoonlijke cadeaus met passie en oog voor detail
            </Typography>
            <Typography variant="body1">
              Van bedrukt textiel en gegraveerd hout tot unieke luiertaarten en
              feestelijke traktaties.
            </Typography>
          </Box>

          {/* Page Title */}
          <Typography variant="h4" gutterBottom>
            Happy's Design
          </Typography>

          {/* Description */}
          <Typography sx={{ mb: 4 }}>
            Wij zijn een jong en enthousiast bedrijf uit Hellevoetsluis,
            gespecialiseerd in het bedrukken van textiel en het graveren van
            hout. Daarnaast maken wij met zorg en liefde prachtige luiertaarten,
            originele coffee & tea pakketjes en leuke traktaties voor
            verjaardagen. Ook hebben wij een wierookafdeling met diverse geuren
            en accessoires om sfeer en ontspanning in huis te brengen.
          </Typography>

          <Typography sx={{ mb: 4 }}>
            Onze kracht zit in het persoonlijke karakter van elk product. Of het
            nu gaat om een uniek bedrukt shirt, een gegraveerde snijplank, een
            gepersonaliseerde luiertaart of een feestelijke traktatie: wij
            zorgen ervoor dat jouw cadeau of product nét dat beetje extra krijgt
            en onvergetelijk wordt.
          </Typography>

          <Typography sx={{ mb: 4 }}>
            Met passie, oog voor detail en liefde voor ambacht maken wij van elk
            product iets bijzonders.
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
