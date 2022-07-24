import {
  border,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Stack,
  Image,
  UnorderedList,
  Spacer,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import SlidingImages from "../../../src/components/Home/Slides/SlidingImages";

const Htop = () => {
  return (
    <Box
      mt="150px"
      backgroundImage="url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4NiIgaGVpZ2h0PSI5MzEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjE2MiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTU5Ljk0IDUwMy4xMTNjLTI0LjEzIDY1Ljk5Ni00Ni4wNiAxMTguMjQ3LTg5LjYgMTczLjQzOC00OS42OCA2Mi45ODEtMTI4LjM1MSA5MC4zMzctMTg3LjcyNCA5NC42NTItNTkuMzczIDQuMzE2LTEzMS44MjktOS42NzktMTg4LjIzMi01OC43MDgtNTAuNTg4LTQzLjk3NC03MC44NTEtODMuODE5LTkyLjYwMi0xNDkuMzIyLTIxLjYxMi02NS4wNzgtNDEuMjc5LTEzNi44NzYtMTYuMDE0LTIwMy42NjMgMjQuNTE5LTY0LjgyNCA5OC4yOTQtODkuNDMzIDE0NS44NTQtMTM5LjU4NyA1Ni44OTMtNTkuOTk3IDgwLjk1Ny0xODAuNjMzIDE1OS40OS0xODIuNDIgODAuMTU1LTEuODIzIDg3LjgxIDEyOS44NTYgMTUyLjEwOCAxNzUuMzMxIDYwLjggNDMuMDAxIDE3NS43IDUuNzE5IDIwNC4yNCA3Ni42OTQgMjguMTIgNjkuOTE4LTYwLjQ2IDEzOS41NzYtODcuNTIgMjEzLjU4NXoiIGZpbGw9IiMyRkM2RjYiLz48cGF0aCBvcGFjaXR5PSIuMTg2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwNy4yNjcgODg2LjA4NWMtNTcuNDE2IDIxLjYwNS0xMjAuODQxIDU1LjM1Ny0xNzcuMjg0IDQxLjY4NC01Ni40NjQtMTMuNjc4LTY3Ljc0Ni02Ni41ODEtOTAuNDktMTA2LjU1MS0yMS4xNzQtMzcuMjE1LTQ4LjU4Mi03NC43LTM2LjU1My0xMTYuNzI1IDExLjkxMi00MS42MjIgNTIuMDM4LTc5LjM1OCAxMDAuMjEyLTEwNS42ODcgNDMuMjk4LTIzLjY2NCA5Ni44OC0yNi41OCAxNDguMTYtMzAuMDU4IDQ0LjA3OC0yLjk5IDg0LjI4IDMuNDIyIDEyNS40MTQgMTEuNTAyIDQ4LjM1NiA5LjQ5OSAxMDEuNDU5IDEzLjM1MyAxMzQuNTg1IDM5LjU2OSAzOC42OTUgMzAuNjIyIDgxLjMyOSA3Mi4zODEgNjEuNjExIDExNS42OTktMjAuMDA2IDQzLjk1NS0xMDAuNzM3IDUzLjczLTE1MS45MzggODIuNzQ5LTM5LjU5OSAyMi40NDQtNjkuNjIyIDUxLjIyNS0xMTMuNzE3IDY3LjgxOHoiIGZpbGw9IiNCM0U2MDAiLz48cGF0aCBvcGFjaXR5PSIuMTIyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01OTAuNTQyIDcxMi44MDJjLTU3Ljk2NyA4LjU4My0xMTcuODQ3LTguODk3LTE2NS40MDQtMzYuMzY1LTQ2LjcyMS0yNi45ODUtNzMuMjM3LTY5LjUwMi05My40NzMtMTEzLjE1Ny0yMC41MzUtNDQuMy0zOC4yNTctOTEuNjIyLTIyLjgwNC0xMzcuNjgzIDE1LjYwNy00Ni41MTggNTguOTktODIuOTYgMTA2LjU5My0xMTIuMDYxIDQ2LjgwMi0yOC42MTIgMTAxLjIwMy01MC4zNjggMTU5LjM4LTUwLjUzNSA1Ni44NjktLjE2NCAxMDguMTk3IDIyLjY5NCAxNTMuODg4IDQ5LjYzNCA0NC4xOTQgMjYuMDU3IDkxLjkwNiA1Ni42NjQgMTAwLjkxNSAxMDAuNjAxIDguNjU3IDQyLjIxNi0zNi40NyA3Ny42MDMtNTYuMTYyIDExNy42NDctMTcuMTUzIDM0Ljg4NS0yMi4zMzkgNzIuNDY2LTUxLjY2MiAxMDEuNjI3LTM1LjUyIDM1LjMyMy03Ni4yNjkgNzIuMTQ4LTEzMS4yNzEgODAuMjkyeiIgc3Ryb2tlPSIjNTVEMEUwIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4=')"
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      bgSize="750px"
    >
      <Center mb="50px">
        {" "}
        <Heading>Bitrix24. Your ultimate workspace.</Heading>
      </Center>

      <Flex
        w="80%"
        alignItems=""
        gap="20"
        margin="auto"

        //bg="black"
        // _before={{
        //   content: '""',
        //   bgImage:
        //     'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4NiIgaGVpZ2h0PSI5MzEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjE2MiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTU5Ljk0IDUwMy4xMTNjLTI0LjEzIDY1Ljk5Ni00Ni4wNiAxMTguMjQ3LTg5LjYgMTczLjQzOC00OS42OCA2Mi45ODEtMTI4LjM1MSA5MC4zMzctMTg3LjcyNCA5NC42NTItNTkuMzczIDQuMzE2LTEzMS44MjktOS42NzktMTg4LjIzMi01OC43MDgtNTAuNTg4LTQzLjk3NC03MC44NTEtODMuODE5LTkyLjYwMi0xNDkuMzIyLTIxLjYxMi02NS4wNzgtNDEuMjc5LTEzNi44NzYtMTYuMDE0LTIwMy42NjMgMjQuNTE5LTY0LjgyNCA5OC4yOTQtODkuNDMzIDE0NS44NTQtMTM5LjU4NyA1Ni44OTMtNTkuOTk3IDgwLjk1Ny0xODAuNjMzIDE1OS40OS0xODIuNDIgODAuMTU1LTEuODIzIDg3LjgxIDEyOS44NTYgMTUyLjEwOCAxNzUuMzMxIDYwLjggNDMuMDAxIDE3NS43IDUuNzE5IDIwNC4yNCA3Ni42OTQgMjguMTIgNjkuOTE4LTYwLjQ2IDEzOS41NzYtODcuNTIgMjEzLjU4NXoiIGZpbGw9IiMyRkM2RjYiLz48cGF0aCBvcGFjaXR5PSIuMTg2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwNy4yNjcgODg2LjA4NWMtNTcuNDE2IDIxLjYwNS0xMjAuODQxIDU1LjM1Ny0xNzcuMjg0IDQxLjY4NC01Ni40NjQtMTMuNjc4LTY3Ljc0Ni02Ni41ODEtOTAuNDktMTA2LjU1MS0yMS4xNzQtMzcuMjE1LTQ4LjU4Mi03NC43LTM2LjU1My0xMTYuNzI1IDExLjkxMi00MS42MjIgNTIuMDM4LTc5LjM1OCAxMDAuMjEyLTEwNS42ODcgNDMuMjk4LTIzLjY2NCA5Ni44OC0yNi41OCAxNDguMTYtMzAuMDU4IDQ0LjA3OC0yLjk5IDg0LjI4IDMuNDIyIDEyNS40MTQgMTEuNTAyIDQ4LjM1NiA5LjQ5OSAxMDEuNDU5IDEzLjM1MyAxMzQuNTg1IDM5LjU2OSAzOC42OTUgMzAuNjIyIDgxLjMyOSA3Mi4zODEgNjEuNjExIDExNS42OTktMjAuMDA2IDQzLjk1NS0xMDAuNzM3IDUzLjczLTE1MS45MzggODIuNzQ5LTM5LjU5OSAyMi40NDQtNjkuNjIyIDUxLjIyNS0xMTMuNzE3IDY3LjgxOHoiIGZpbGw9IiNCM0U2MDAiLz48cGF0aCBvcGFjaXR5PSIuMTIyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01OTAuNTQyIDcxMi44MDJjLTU3Ljk2NyA4LjU4My0xMTcuODQ3LTguODk3LTE2NS40MDQtMzYuMzY1LTQ2LjcyMS0yNi45ODUtNzMuMjM3LTY5LjUwMi05My40NzMtMTEzLjE1Ny0yMC41MzUtNDQuMy0zOC4yNTctOTEuNjIyLTIyLjgwNC0xMzcuNjgzIDE1LjYwNy00Ni41MTggNTguOTktODIuOTYgMTA2LjU5My0xMTIuMDYxIDQ2LjgwMi0yOC42MTIgMTAxLjIwMy01MC4zNjggMTU5LjM4LTUwLjUzNSA1Ni44NjktLjE2NCAxMDguMTk3IDIyLjY5NCAxNTMuODg4IDQ5LjYzNCA0NC4xOTQgMjYuMDU3IDkxLjkwNiA1Ni42NjQgMTAwLjkxNSAxMDAuNjAxIDguNjU3IDQyLjIxNi0zNi40NyA3Ny42MDMtNTYuMTYyIDExNy42NDctMTcuMTUzIDM0Ljg4NS0yMi4zMzkgNzIuNDY2LTUxLjY2MiAxMDEuNjI3LTM1LjUyIDM1LjMyMy03Ni4yNjkgNzIuMTQ4LTEzMS4yNzEgODAuMjkyeiIgc3Ryb2tlPSIjNTVEMEUwIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4=)',
        //   bgSize: 'cover',
        //   fontWeight: '600',

        //   display: 'block',
        //   border: '2px solid red',
        // }}
      >
        <Box>
          <Heading
            color={"#0053aa"}
            fontSize="21px"
            lineHeight={"21px"}
            fontFamily="sans-serif"
          >
            {" "}
            Collobration
          </Heading>
        </Box>
        <Box>
          <Heading
            color={"#0053aa"}
            fontSize="21px"
            lineHeight={"21px"}
            fontFamily="sans-serif"
          >
            CRM
          </Heading>
        </Box>
        <Box>
          <Heading
            color={"#0053aa"}
            fontSize="21px"
            lineHeight={"21px"}
            fontFamily="sans-serif"
          >
            CRM
          </Heading>
        </Box>
        <Box>
          <Heading
            color={"#0053aa"}
            fontSize="21px"
            lineHeight={"21px"}
            fontFamily="sans-serif"
          >
            Sites&Stores
          </Heading>
        </Box>
        <Box>
          <Heading
            color={"#0053aa"}
            fontSize="21px"
            lineHeight={"21px"}
            fontFamily="sans-serif"
          >
            Task&Project
          </Heading>
        </Box>
      </Flex>

      <Grid w="" mt="25px" h="500px" templateColumns="repeat(2, 1fr)">
        <GridItem w="400px" ml="190px">
          <Grid>
            {" "}
            <UnorderedList styleType="none" gap="15px">
              <ListItem>Tasks</ListItem>
              <ListItem>Pojects</ListItem>
              <ListItem> Calender</ListItem>
              <ListItem> Free Templates</ListItem>
              <ListItem>Drive</ListItem>
              <ListItem>Task Automation</ListItem>
              <ListItem>Feed</ListItem>
              <ListItem> Rules</ListItem>
              <ListItem> Web widgets</ListItem>
            </UnorderedList>
          </Grid>
        </GridItem>

        <GridItem w="100%" ml="120px">
          {/* <Image w="80%" src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/sites.png.webp?1658307906000"/> */}

          <SlidingImages />
        </GridItem>
      </Grid>

      <Grid
        w="100%"
        h="140px"
        bg="#32c2f6"
        templateColumns="repeat(3, 1fr)"
        color="white"
        gap="30px"
      >
        <GridItem>
          {" "}
          <Box
            w="190px"
            h="44px"
            borderRadius={"12px"}
            border="2px"
            mt="60px"
            ml="300px"
            fontSize={"30px"}
          >
            10,000,000
          </Box>
        </GridItem>
        <GridItem>
          {" "}
          <Text mt="60px" fontSize={"22px"} h="32px" w="100%">
            organizations have chosen Bitrix24
          </Text>
        </GridItem>
        <GridItem>
          <Text mt="60px" fontSize={"22px"}>
            available in <span bg="white">18</span> languages
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default Htop;
