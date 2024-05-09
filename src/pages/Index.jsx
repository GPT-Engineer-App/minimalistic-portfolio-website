import { Box, Container, Flex, Grid, GridItem, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="center">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Further
          </Heading>
          <Text fontSize="xl" mt={2}>
            With experience and commitment we take you further than capital!
          </Text>
        </Box>

        <Box w="full">
          <Heading as="h2" size="xl" textAlign="center">
            Portfolio companies
          </Heading>
          <Text fontSize="lg" textAlign="center" mt={2}>
            Not a comprehensive list
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={4}>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNb3RvcmljYSUyMGxvZ298ZW58MHx8fHwxNzE1MjQ4MzQ1fDA&ixlib=rb-4.0.3&q=80&w=1080" />
              <Text mt={2}>Generative AI for animation</Text>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSYWR0b25pY3MlMjBsb2dvfGVufDB8fHx8MTcxNTI0ODM0Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Text mt={2}>Private 5G made easy</Text>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxJbnR1aWNlbGwlMjBsb2dvfGVufDB8fHx8MTcxNTI0ODM0Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUZXJhc2klMjBsb2dvfGVufDB8fHx8MTcxNTI0ODM0Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHaWdhcGF5JTIwbG9nb3xlbnwwfHx8fDE3MTUyNDgzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTb25nc2F5JTIwbG9nb3xlbnwwfHx8fDE3MTUyNDgzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHT0ElMkZQTEFOJTIwbG9nb3xlbnwwfHx8fDE3MTUyNDgzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDZW1WaXNpb24lMjBsb2dvfGVufDB8fHx8MTcxNTI0ODM0OHww&ixlib=rb-4.0.3&q=80&w=1080" />
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUcmV5ZCUyMGxvZ298ZW58MHx8fHwxNzE1MjQ4MzQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaXZseSUyMGxvZ298ZW58MHx8fHwxNzE1MjQ4MzQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
            </GridItem>
          </Grid>
        </Box>

        <Box w="full">
          <Heading as="h2" size="xl" textAlign="center">
            Joint investments
          </Heading>
          <Text fontSize="lg" textAlign="center" mt={2}>
            Through other vehicles
          </Text>
        </Box>

        <Box w="full">
          <Heading as="h2" size="xl" textAlign="center">
            Who are we?
          </Heading>
          <Flex justifyContent="center" mt={4}>
            <VStack spacing={2} align="center" mr={8}>
              <Text fontSize="lg">Stefan Lindeberg</Text>
              <Link href="https://www.linkedin.com/in/stefan-lindeberg" isExternal>
                <FaLinkedin size="24px" />
              </Link>
            </VStack>
            <VStack spacing={2} align="center">
              <Text fontSize="lg">Per Björklund</Text>
              <Link href="https://www.linkedin.com/in/per-björklund" isExternal>
                <FaLinkedin size="24px" />
              </Link>
            </VStack>
          </Flex>
        </Box>

        <Box w="full" mt={8}>
          <Flex justifyContent="center">
            <Image src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxCZXN0JTIwQUklMjBXZWJzaXRlJTIwTWFrZXIlMjBsb2dvfGVufDB8fHx8MTcxNTI0ODM0OXww&ixlib=rb-4.0.3&q=80&w=1080" />
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
