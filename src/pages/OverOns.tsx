import { Typography, Container, Box, Paper, Stack, Fade } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Grid from "@mui/material/GridLegacy";
import BreadcrumbsNav from "../components/BreadcrumbsNav";

export default function OverOns() {
  const images = [
    {
      src: "/assets/witgoed.jpg",
      text: "Witgoed Afdeling",
      href: "/witgoed-hellevoetsluis",
    },
    {
      src: "/assets/unique-fightstore.jpg",
      text: "Unique Fightstore",
      href: "/unique-fightstore",
    },
    {
      src: "/assets/happysdesign/happysdesign6.jpg",
      text: "Happy's Design",
      href: "/happys-design",
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <BreadcrumbsNav currentPage="Over ons" />

      <Fade in timeout={600}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Over ons
          </Typography>

          {/* Openingstijden */}
          <Box sx={{ mt: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Nieuwe openingstijden
            </Typography>
            <Paper sx={{ p: 3, backgroundColor: "#f9f9f9" }}>
              <Stack spacing={1}>
                <Box display="flex" alignItems="center">
                  <AccessTimeIcon sx={{ mr: 1, color: "primary.main" }} />
                  <Typography>
                    Maandag, dinsdag en woensdag: op afspraak
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <PhoneIcon sx={{ mr: 1, color: "primary.main" }} />
                  <Typography>Bel 0181-316896 of 06-29072906</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <AccessTimeIcon sx={{ mr: 1, color: "primary.main" }} />
                  <Typography>
                    Donderdag, vrijdag en zaterdag: 10:00 t/m 17:00 zonder
                    afspraak
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>

          {/* Bedrijfsinformatie */}
          <Box sx={{ mt: 3 }}>
            <Typography paragraph>
              Onze winkel bestaat al meer dan 20 jaar en is gevestigd aan de
              Moriaanseweg west 20a te Hellevoetsluis. Deze winkel wordt al
              jaren met veel plezier gerund door eigenaar Bert Zoon.
            </Typography>
            <Typography paragraph>
              We zijn begonnen met nieuwe en tweedehandse meubelen, later zijn
              er nog diverse afdelingen bijgekomen, zoals een inkt refill
              station en een vechtsportwinkel. Sinds 2013 is er ook een grote
              tweedehands witgoed afdeling bijgekomen (Witgoed Hellevoetsluis).
              Deze afdeling groeit elke week en neemt een belangrijke plaats in
              onze winkel, waardoor de tweedehands meubelafdeling steeds kleiner
              wordt.
            </Typography>
            <Typography paragraph>
              Op deze afdeling worden diverse machines verkocht, waaronder
              wasmachines, drogers, koelkasten, vriezers, vaatwassers en
              fornuizen. Service staat bij ons hoog in het vaandel, daarom zijn
              alle machines nagekeken door een monteur en zit er altijd 3
              maanden garantie op.
            </Typography>
            <Typography paragraph>
              In 2019 werd de tweedehands afdeling nog kleiner en de ruimte
              wordt nu opgevuld met nieuwe meubelen uit partij. Dit zijn zeer
              aantrekkelijke prijzen. Stap gerust eens binnen in onze winkel en
              laat je verrassen door ons assortiment. Met deze afdeling zijn wij
              helaas gestopt.
            </Typography>
          </Box>

          {/* Images Section */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h5" gutterBottom>
              Onze Winkel
            </Typography>
            <Grid container spacing={3}>
              {images.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Link to={item.href} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 200,
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: 2,
                        cursor: "pointer",
                        "& img": { transition: "transform 0.3s" },
                        "&:hover img": { transform: "scale(1.05)" },
                      }}
                    >
                      <Box
                        component="img"
                        src={item.src}
                        alt={`Winkel afbeelding ${index + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          bgcolor: "rgba(0,0,0,0.5)",
                          color: "white",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          px: 2,
                          opacity: 0,
                          transition: "all 0.3s ease",
                          "&:hover": { opacity: 1 },
                        }}
                      >
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          {item.text}
                        </Typography>
                        <ArrowForwardIcon
                          sx={{
                            fontSize: 30,
                            mt: 1,
                            transition: "transform 0.3s",
                            "&:hover": { transform: "translateY(-5px)" },
                          }}
                        />
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Fade>
    </Container>
  );
}
