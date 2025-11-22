import React, { useState } from "react";
import {
  Button,
  TextField,
  CircularProgress,
  Typography,
  Box,
  Fade,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";

import BreadcrumbsNav from "../../components/BreadcrumbsNav";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!name || !email || !message) {
      setError("Vul alstublieft alle velden in.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("access_key", "5bf43b8c-42fa-410b-884e-ba442852caf6");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Uw bericht is succesvol verzonden!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(
          data.message ||
            "Het versturen van het bericht is mislukt. Probeer het opnieuw."
        );
      }
    } catch (err) {
      setError("Er is een fout opgetreden. Controleer uw netwerkverbinding.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
      {/* Breadcrumb */}
      <BreadcrumbsNav currentPage="Contact" />

      <Fade in timeout={600}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Neem contact met ons op
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Form Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Contactformulier
              </Typography>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <TextField
                  id="name"
                  label="Naam"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <TextField
                  id="email"
                  label="E-mailadres"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <TextField
                  id="message"
                  label="Bericht"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} /> : null}
                >
                  {loading ? "Verzenden..." : "Verstuur"}
                </Button>

                {success && (
                  <Typography sx={{ mt: 2, color: "green" }}>
                    {success}
                  </Typography>
                )}
                {error && (
                  <Typography sx={{ mt: 2, color: "red" }}>{error}</Typography>
                )}
              </form>
            </Grid>

            {/* Contact Info and Map Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Onze gegevens
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body1">
                  Adres: Moriaanseweg West 20a, 3222 AD Hellevoetsluis
                </Typography>
                <Typography variant="body1">
                  Telefoon: 0181-316896 / 06-29072906
                </Typography>
                <Typography variant="body1">
                  E-mail: info@meubeldiscountbzoon.com
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Openingstijden
                </Typography>
                <Typography variant="body1">
                  Maandag, dinsdag en woensdag: Op afspraak
                </Typography>
                <Typography variant="body1">
                  Donderdag, vrijdag en zaterdag: Open van 10:00 tot 17:00
                  zonder afspraak
                </Typography>
              </Box>

              {/* Embedded Google Map */}
              <Typography variant="h6" gutterBottom>
                Locatie
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                  overflow: "hidden",
                }}
              >
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.740207172813!2d4.120689415799981!3d51.84882197967919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c53d1e1f1e1f41%3A0x6d8f8e1a8a2d1d2b!2sMoriaanseweg%20West%2020A%2C%203222%20AD%20Hellevoetsluis%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1660995328406!5m2!1sen!2sus"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Box>
  );
};

export default Contact;
