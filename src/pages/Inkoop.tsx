import { Typography, Container, Box, Button, Stack, Fade } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import BreadcrumbsNav from "../components/BreadcrumbsNav";

export default function Inkoop() {
  return (
    <Container sx={{ py: 4 }}>
      {/* Breadcrumb */}
      <BreadcrumbsNav currentPage="Inkoop" />

      <Fade in timeout={600}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Inkoop
          </Typography>

          <Typography paragraph>
            Naast de verkoop van witgoed en meubelen doen wij ook aan inkoop van
            witgoed. Dit doen wij uitsluitend in onze regio, zodat wij de
            kwaliteit en service kunnen waarborgen.
          </Typography>

          <Typography paragraph>
            Wilt u snel weten of wij iets voor u kunnen betekenen? Stuur ons een
            foto van het apparaat en de prijs die u ervoor wilt hebben. U krijgt
            nog dezelfde dag antwoord.
          </Typography>

          <Typography paragraph>
            Ons e-mailadres is: <strong>info@meubeldiscountbzoon.com</strong>
          </Typography>

          <Typography paragraph>
            U kunt ons ook bellen voor een afspraak:{" "}
            <strong>0181-316896</strong>
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Zo werkt het:
            </Typography>
            <ul>
              <li>Maak een foto van het apparaat dat u wilt verkopen.</li>
              <li>
                Stuur deze foto samen met uw prijsvoorstel naar ons e-mailadres.
              </li>
              <li>
                Wij beoordelen uw aanbod en nemen nog dezelfde dag contact met u
                op.
              </li>
              <li>
                Maak een afspraak om het apparaat langs te brengen of laten
                ophalen.
              </li>
            </ul>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 3 }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              href="mailto:info@meubeldiscountbzoon.com"
            >
              Mail ons
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<PhoneIcon />}
              href="tel:0181316896"
            >
              Bel ons
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Container>
  );
}
