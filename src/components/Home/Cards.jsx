import {
  Box,
  Center,
  Image,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Link,
  Button,
  UnorderedList,
  ListItem,
  Flex,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
function Cards() {
  return (
    <Box  margin='auto'>
      <Box w="80%">
        <Center m="30px" textAlign={'center'}>
          <Heading>How much is Bitrix24?</Heading>
        </Center>{' '}
      </Box>
      <Box></Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} h="10" ml="40px">
          <Text>
            Price per month when paying fort{' '}
            <Link border="2px " borderRadius={'12px'} color="teal.500" href="#">
              1year <Text as="mark">-20%</Text>
            </Link>
          </Text>
        </GridItem>
        <GridItem colStart={3} colEnd={6} h="10" pl="30px">
          <Text>
            Renew plans bought before August 1, 2021{' '}
            <Link border="2px " borderRadius={'12px'} color="teal.500" href="#">
              Archived Planes
            </Link>
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(4, 259px)" gap="5%" textAlign={'center'} m="50px">
        <GridItem
          border={'0px'}
          w="280px"
          borderRadius={'12px'}
          bg="#f5fdd6"
          gap="5px"
        >
          <Box bg="#e3f3a4" borderRadius={'12px'} >
            <Text pt="22px" fontWeight={'bold'}>Free</Text>
          </Box>
          <Center bg="#e3f3a4" pb="44px">
            <Spacer />
            <Text>Start working online and sell more with CRM</Text>
          </Center>
          <Box>
          <Flex ml="32px">
              <Box><Image
              mt="8px"
              w="20px"
             src="https://img.icons8.com/tiny-color/344/experimental-fire-element-tiny-color.png"/></Box>
              <Box><Heading>Unlimted</Heading></Box>
              
              </Flex>
            <Text>users</Text>
          </Box>
          <Heading>100% free</Heading>
          <Button>REGISTER FREE</Button>
          <Heading>5GB</Heading>

          <Box>
            <Heading fontSize={'18px'}> COLLABRATION</Heading>
            <UnorderedList styleType="none">
              <ListItem>chat</ListItem>
              <ListItem>HD Videocalls</ListItem>
              <ListItem>calender</ListItem>
              <ListItem>company workspace</ListItem>
              <ListItem>feed</ListItem>
              <ListItem>knoeledge base</ListItem>
              <ListItem></ListItem>
            </UnorderedList>
            <Heading fontSize={'18px'}>Tasks&projects</Heading>
            <Heading fontSize={'18px'}>CRM</Heading>
            <Heading fontSize={'18px'}>Drive</Heading>
            <Heading fontSize={'18px'}>Contact Center</Heading>
            <Heading fontSize={'18px'}>Website builder</Heading>
          </Box>
        </GridItem>
        {/* ---------------------- */}
         <GridItem
          border={'0px'}
          w="280px"
          borderRadius={'12px'}
          bg="lightcyan"
          gap="5px"
        >
          <Box bg="lightcyan" borderRadius={'12px'}>
          <Text pt="22px" fontWeight={'bold'}>Free</Text>
          </Box>
          <Center bg="lightcyan" pb="44px">
            <Spacer />
            <Text>Start working online and sell more with CRM</Text>
          </Center>
          <Box>
            <Flex ml="32px">
              <Box><Image
              mt="8px"
              w="20px"
             src="https://img.icons8.com/tiny-color/344/experimental-fire-element-tiny-color.png"/></Box>
              <Box><Heading>Unlimted</Heading></Box>
              
              </Flex>
          
            <Text>users</Text>
          </Box>
          <Heading>Rs. 2,790/mo</Heading>
          <Button>REGISTER FREE</Button>
          <Heading>5GB</Heading>

          <Box>
            <Heading fontSize={'18px'}> COLLABRATION</Heading>
            <UnorderedList styleType="none">
              <ListItem>chat</ListItem>
              <ListItem>HD Videocalls</ListItem>
              <ListItem>calender</ListItem>
              <ListItem>company workspace</ListItem>
              <ListItem>feed</ListItem>
              <ListItem>knoeledge base</ListItem>
              <ListItem></ListItem>
            </UnorderedList>
            <Heading fontSize={'18px'}>Tasks&projects</Heading>
            <Heading fontSize={'18px'}>CRM</Heading>
            <Heading fontSize={'18px'}>Drive</Heading>
            <Heading fontSize={'18px'}>Contact Center</Heading>
            <Heading fontSize={'18px'}>Website builder</Heading>
          </Box>
        </GridItem>
        <GridItem
          border={'0px'}
          w="280px"
          borderRadius={'12px'}
          bg="lightcyan"
          gap="5px"
        >
          <Box bg="lightcyan" borderRadius={'12px'}>
          <Text pt="22px" fontWeight={'bold'}>Free</Text>
          </Box>
          <Center bg="lightcyan" pb="44px">
            <Spacer />
            <Text>Start working online and sell more with CRM</Text>
          </Center>
          <Box>
            <Heading>Unlimted</Heading>
            <Text>users</Text>
          </Box>
          <Heading>100% free</Heading>
          <Button>REGISTER FREE</Button>
          <Heading>5GB</Heading>

          <Box>
            <Heading fontSize={'18px'}> COLLABRATION</Heading>
            <UnorderedList styleType="none">
              <ListItem>chat</ListItem>
              <ListItem>HD Videocalls</ListItem>
              <ListItem>calender</ListItem>
              <ListItem>company workspace</ListItem>
              <ListItem>feed</ListItem>
              <ListItem>knoeledge base</ListItem>
              <ListItem></ListItem>
            </UnorderedList>
            <Heading fontSize={'18px'}>Tasks&projects</Heading>
            <Heading fontSize={'18px'}>CRM</Heading>
            <Heading fontSize={'18px'}>Drive</Heading>
            <Heading fontSize={'18px'}>Contact Center</Heading>
            <Heading fontSize={'18px'}>Website builder</Heading>
          </Box>
        </GridItem>
        <GridItem
          border={'0px'}
          w="280px"
          borderRadius={'12px'}
          bg="lightcyan"
          gap="5px"
        >
          <Box bg="lightcyan" borderRadius={'12px'}>
          <Text pt="22px" fontWeight={'bold'}>Free</Text>
          </Box>
          <Center bg="lightcyan" pb="44px">
            <Spacer />
            <Text>Start working online and sell more with CRM</Text>
          </Center>
          <Box>
          <Flex ml="32px">
              <Box><Image
              mt="8px"
              w="20px"
             src="https://img.icons8.com/tiny-color/344/experimental-fire-element-tiny-color.png"/></Box>
              <Box><Heading>Unlimted</Heading></Box>
              
              </Flex>
            <Text>users</Text>
          </Box>
          <Heading>100% free</Heading>
          <Button>REGISTER FREE</Button>
          <Heading>5GB</Heading>

          <Box>
            <Heading fontSize={'18px'}> COLLABRATION</Heading>
            <UnorderedList styleType="none">
              <ListItem>chat</ListItem>
              <ListItem>HD Videocalls</ListItem>
              <ListItem>calender</ListItem>
              <ListItem>company workspace</ListItem>
              <ListItem>feed</ListItem>
              <ListItem>knoeledge base</ListItem>
              <ListItem></ListItem>
            </UnorderedList>
            <Heading fontSize={'18px'}>Tasks&projects</Heading>
            <Heading fontSize={'18px'}>CRM</Heading>
            <Heading fontSize={'18px'}>Drive</Heading>
            <Heading fontSize={'18px'}>Contact Center</Heading>
            <Heading fontSize={'18px'}>Website builder</Heading>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
export default Cards;
