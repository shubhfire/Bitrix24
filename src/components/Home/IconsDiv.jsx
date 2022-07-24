import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
function IconsDiv() {
  return (
    <Stack mt="80px">
      <Center fontSize={"32px"} fontFamily="sans-serif" fontWeight={"400"}>
        Bitrix24 in the Press
      </Center>
      <Box>
        <Grid templateColumns="repeat(5,1fr)">
          <GridItem>
            <Image
              src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_forbes.png.webp?1658307908000"
              alt=""
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcmag.png.webp?1658307908000"
              alt=""
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcworld.png.webp?1658307908000"
              alt=""
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_techradar.png.webp?1658307908000"
              alt=""
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_zdnet.png.webp?1658307908000"
              alt=""
            />
          </GridItem>
        </Grid>
      </Box>

      <Box>
        <Flex>
          <Box flex="1" ml="40px">
            <Heading>Bitrix24 on premise</Heading>
            <Text noOfLines={[1, 2, 3, 4]}>
              You can use the self-hosted version of Bitrix24 to run on your
              server. You get full control over data, source code access, and
              additional tools, such as helpdesk and e-learning, as well as
              integration and customization options.
            </Text>
            <Button
              mt="20px"
              border={"2px solid mediumturquoise"}
              borderRadius="12px"
              color="#32c2f6"
            >
              Learn More
            </Button>
          </Box>
          <Box flex="1">
            <Image src="https://www.bitrix24.in/upload/optimizer/converted/images/content_common/images/tools/inc/tools_inc_on-premise_3.png.webp?1658307908000" />
          </Box>
        </Flex>
      </Box>

      <Box m="auto">
        <Center>
          {" "}
          <Heading>Readu to try?</Heading>
        </Center>
      </Box>
      <Box>
        <Center>
          {" "}
          <Button bg="#bdf300" borderRadius="10px">
            RIGISTER FREE
          </Button>
        </Center>
      </Box>
    </Stack>
  );
}
export default IconsDiv;
