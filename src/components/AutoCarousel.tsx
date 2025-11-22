import { Box, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./AutoCarousel.scss";

interface CarouselImage {
  src: string;
  caption: string;
  topic: string;
}

interface AutoCarouselProps {
  images: CarouselImage[];
  interval?: number;
}

export default function AutoCarousel({
  images,
  interval = 6000,
}: AutoCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Box className="carousel-wrapper">
      {images.map((img, i) => (
        <Box
          key={i}
          className={`carousel-slide ${i === index ? "active" : ""}`}
        >
          <Box>
            <img src={img.src} alt={img.caption} />
            <Box className="overlay-text">
              <Typography variant="h6">{img.topic}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
      <IconButton className="arrow-button left" onClick={handlePrev}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton className="arrow-button right" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
