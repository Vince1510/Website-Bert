import {
  Container,
  Box,
  Typography,
  Link as MUILink,
  Stack,
  Divider,
  Link,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { color } from "framer-motion";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 8,
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* left: contact items */}
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  borderRadius: "50%",
                  p: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhoneIcon fontSize="small" />
              </Box>
              <Typography variant="body1">
                <MUILink
                  href="tel:+31181316896"
                  color="inherit"
                  underline="hover"
                >
                  0181-316896
                </MUILink>{" "}
                /{" "}
                <MUILink
                  href="tel:+31629072906"
                  color="inherit"
                  underline="hover"
                >
                  06-29072906
                </MUILink>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  borderRadius: "50%",
                  p: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailIcon fontSize="small" />
              </Box>
              <Typography variant="body1">
                <MUILink
                  href="mailto:info@meubeldiscountbzoon.com"
                  color="inherit"
                  underline="hover"
                >
                  info@meubeldiscountbzoon.com
                </MUILink>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <Box
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  borderRadius: "50%",
                  p: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "2px",
                }}
              >
                <LocationOnIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="body1">
                  <MUILink
                    href="https://www.google.com/maps/search/?api=1&query=Moriaanseweg+west+20a+3222AD+Hellevoetsluis"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    underline="hover"
                  >
                    Moriaanseweg west 20a
                    <br />
                    3222AD Hellevoetsluis
                  </MUILink>
                </Typography>
              </Box>
            </Stack>
          </Stack>

          {/* right: opening hours */}
          <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              Openingstijden
            </Typography>
            <Typography variant="body1">
              Maandag, dinsdag en woensdag op afspraak
              <br />
              Donderdag, vrijdag en zaterdag.
              <br />
              Open van 10.00 t/m 17.00 zonder afspraak.
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />
        {/* bottom note */}
        <Typography
          variant="caption"
          display="block"
          align="center"
          sx={{ opacity: 0.8 }}
        >
          © {new Date().getFullYear()} Meubeldiscount Bzoon. Alle rechten
          voorbehouden.
        </Typography>
        <Typography align="center">
          <Link
            sx={{ color: "white" }}
            href="https://vince1510.github.io/portfolio_v3/"
            target="_blank"
          >
            Gemaakt door Vince van Apeldoorn
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
