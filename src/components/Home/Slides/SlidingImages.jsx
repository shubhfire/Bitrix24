import { Fade } from "react-slideshow-image";
import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Box, GridItem, Grid, Image, Text, Stack } from "@chakra-ui/react";

const fadeImages = [
  {
    url: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/sites.png.webp?1658307906000",
    caption: "First Slide",
  },
  {
    url: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/crm.png.webp?1658307904000",
    caption: "Second Slide",
  },
  {
    url: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/hr.png.webp?1658307908000",
    caption: "Third Slide",
  },
  {
    url: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/hr.png.webp?1658307908000",
    caption: "",
  },
  {
    url: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/sites.png.webp?1658307906000",
    caption: "",
  },
];
const fadeProperties = {
  duration: 1000,
  transitionDuration: 200,
  infinite: true,
  indicators: true,
};

const SlidingImages = () => {
  return (
    <Box className="slide-container">
      <Fade {...fadeProperties}>
        {fadeImages.map((fadeImage, index) => (
          <Box className="each-fade" key={index}>
            <Stack>
              {/* <GridItem><Text>{fadeImage.caption}</Text></GridItem> */}
              <Box className="image-container">
                <Image w="1400px" h="600px" src={fadeImage.url} />
              </Box>
            </Stack>
          </Box>
        ))}
      </Fade>
    </Box>
  );
};

export default SlidingImages;
