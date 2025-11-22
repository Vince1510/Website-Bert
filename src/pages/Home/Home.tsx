import { Typography, Container, Box, Button } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import AutoCarousel from "../../components/AutoCarousel";
import "./Home.scss";

const meubeldiscountImages = Array.from({ length: 24 }, (_, i) => ({
  src: `/assets/meubeldiscount/meubeldiscount${i + 1}.jpg`,
  caption: `Meubeldiscount ${i + 1}`,
  topic: "Meubeldiscount",
}));

const witgoedImages = Array.from({ length: 24 }, (_, i) => ({
  src: `/assets/witgoedhellevoetsluis/WitgoedHellevoetsluis${i + 1}.jpg`,
  caption: `Witgoed Hellevoetsluis ${i + 1}`,
  topic: "Witgoed Hellevoetsluis",
}));

const fightStoreImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/assets/uniquefightstore/UniqueFightstore${i + 1}.jpg`,
  caption: `Unique Fight Store ${i + 1}`,
  topic: "Unique Fight Store",
}));

const happyDesignImages = Array.from({ length: 13 }, (_, i) => ({
  src: `/assets/happysdesign/happysdesign${i + 1}.jpg`,
  caption: `Happy's Design ${i + 1}`,
  topic: "Happy's Design",
}));

const sections = [
  {
    title: "Witgoed Hellevoetsluis",
    description:
      "Betrouwbaar en betaalbaar tweedehands witgoed o.a. wasmachines, drogers, koelkasten en enz, deze machines zijn gecontroleerd door een monteur en worden geleverd met 3 maanden garantie.",
    images: witgoedImages,
    link: "/witgoed-hellevoetsluis",
  },
  {
    title: "Happy's Design",
    description:
      "Unieke, handgemaakte decoraties en gepersonaliseerde cadeaus. Deze persoonlijke cadeau's geven een leuk tintje aan uw huis of verras iemand met een leuk geschenk.",
    images: happyDesignImages,
    link: "/happys-design",
  },

  {
    title: "Unique Fight Store",
    description:
      "Alles voor de vechtsporter. Van handschoenen en scheenbeschermers tot sportkleding enz. Topmerken voor training en competitie.",
    images: fightStoreImages,
    link: "/unique-fightstore",
  },
];

export default function Home() {
  return (
    <Box component="main">
      {/* Header Text Section */}
      <Box sx={{ py: { xs: 4, sm: 6 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            gutterBottom
            sx={{
              typography: { xs: "h6", sm: "h4", md: "h3" },
              fontWeight: { xs: "bold" },
            }}
          >
            Welkom op de website van Witgoed Hellevoetsluis, Unique Fightstore
            en Happys Design!
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ typography: { xs: "body2", sm: "h6" } }}
          >
            De winkel op de Moriaanseweg west 20a te Hellevoetsluis. Deze
            bestaat uit 3 afdelingen zie hier onder.
          </Typography>
        </Container>
      </Box>

      {/* Header Image with Overlay Text */}
      <Box
        className="header-hero"
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image */}
        <img
          src="/assets/Meubeldiscount.png"
          alt="Meubeldiscount"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>

      {/* Carousel Sections in 2x2 Grid */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {sections.map((section, index) => {
            return (
              <Grid
                container
                item
                xs={12}
                spacing={4}
                direction={index % 2 === 0 ? "row" : "row-reverse"}
                key={section.title}
                sx={{ mb: 4, alignItems: "center" }}
              >
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography
                      variant="h5"
                      className="carousel-title"
                      gutterBottom
                    >
                      {section.title}
                    </Typography>
                    <Typography paragraph sx={{ minHeight: { md: "80px" } }}>
                      {section.description}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <AutoCarousel images={section.images} interval={4000} />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
