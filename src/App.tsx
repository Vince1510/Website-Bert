import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./pages/Home/Home.tsx";
import OverOns from "./pages/OverOns";
import WitgoedHellevoetsluis from "./pages/WitgoedHellevoetsluis";
import UniqueFightstore from "./pages/UniqueFightstore";
import HappysDesign from "./pages/HappysDesign";
import Bezorgen from "./pages/Bezorgen";
import Inkoop from "./pages/Inkoop";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/footer";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />

      {/* main content grows to push footer to bottom */}
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route
            path="/witgoed-hellevoetsluis"
            element={<WitgoedHellevoetsluis />}
          />
          <Route path="/unique-fightstore" element={<UniqueFightstore />} />
          <Route path="/happys-design" element={<HappysDesign />} />
          <Route path="/bezorgen" element={<Bezorgen />} />
          <Route path="/inkoop" element={<Inkoop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}
