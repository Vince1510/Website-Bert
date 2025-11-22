import {
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
  Fade,
} from "@mui/material";

import Grid from "@mui/material/GridLegacy";
import BreadcrumbsNav from "../components/BreadcrumbsNav";

export default function Bezorgen() {
  return (
    <Container sx={{ py: 4 }}>
      {/* Breadcrumb */}
      <BreadcrumbsNav currentPage="Bezorgen" />

      <Fade in timeout={600}>
        <Grid container spacing={4}>
          {/* Left side - text and table */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Bezorgen
            </Typography>

            <Typography paragraph>
              Wij bezorgen op werkdagen van 9:30 t/m 17:00 (in de avond in
              overleg). In het weekend is de bezorging ook in overleg.
            </Typography>

            <Typography paragraph>
              Wij kunnen in heel Nederland bezorgen. De kosten voor bezorging in
              Hellevoetsluis en omgeving is 15 euro. Is het verder dan 10 km dan
              maken wij een scherpe prijs voor u, dit is altijd in overleg met
              de eigenaar Bert Zoon.
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Bezorgoptie</TableCell>
                    <TableCell>Kosten</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Bezorgen in Hellevoetsluis en omgeving
                    </TableCell>
                    <TableCell>15 euro</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bezorgen buiten een straal van 10 km</TableCell>
                    <TableCell>in overleg</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Oude apparaat meenemen</TableCell>
                    <TableCell>gratis</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Koelkasten en vriezers meenemen</TableCell>
                    <TableCell>15 euro</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Apparaat naar boven (trappen)</TableCell>
                    <TableCell>25 euro</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Aansluiten trekschakelaar</TableCell>
                    <TableCell>15 euro</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Right side - images */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" gap={2}>
              <img
                src="/assets/Bezorgen.png"
                alt="Bezorgen"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
}
