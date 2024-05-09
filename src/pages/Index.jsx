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
              <Link href="https://www.motorica.ai/" isExternal>
                <Image src="assets/images/fulllogo-300x61.webp" />
              </Link>
              <Text mt={2}>
                <em>Generative AI for animation</em>
              </Text>
            </GridItem>
            <GridItem>
              <Link href="https://www.radtonics.com/" isExternal>
                <Image src="assets/images/radtonics.svg" />
              </Link>
              <Text mt={2}>
                <em>Private 5G made easy</em>
              </Text>
            </GridItem>
            <GridItem>
              <Link href="https://intuicell.com/" isExternal>
                <Image src="assets/images/intuicell-200x59.webp" />
              </Link>
              <Text mt={2}>
                <em>AI LIKE THE&nbsp;HUMAN MIND</em>
              </Text>
            </GridItem>
            <GridItem>
              <Link href="https://www.terasi.io/" isExternal>
                <Image src="assets/images/terasi-596x157.webp" />
              </Link>
              <Text mt={2}>
                <em>Scalable hardware for 6G and beyond</em>
              </Text>
            </GridItem>
            <GridItem>
              <Link href="https://cemvision.tech/" isExternal>
                <Image src="assets/images/cemvision-1200x628.webp" />
              </Link>
              <Text mt={2}>
                <em>Re-inventing the most important construction material.</em>
              </Text>
            </GridItem>
            <GridItem>
              <Link href="https://www.gigapay.co/" isExternal>
                <Image src="assets/images/gigapay-logo-2-596x159.webp" />
              </Link>
              <Text mt={2}>
                <em>We know how to pay creators globally</em>
              </Text>
            </GridItem>
            <GridItem>
              <Link href="https://songsay.com/home" isExternal>
                <Image src="assets/images/songsay-logo-purple-170x46.webp" />
              </Link>
              <Text mt={2}>
                <em>Let the songs do the talking!</em>
              </Text>
            </GridItem>
            <GridItem>
              <Link href="https://www.goalplan.com/en-us/" isExternal>
                <Image src="assets/images/goalplan-logo-yellow-596x83.webp" />
              </Link>
              <Text mt={2}>
                <em>The complete sales performance platform</em>
              </Text>
            </GridItem>
            <GridItem>
              <Link href="https://www.treyd.io/" isExternal>
                <Image src="assets/images/treyd-1.webp" />
              </Link>
              <Text mt={2}>
                <em>Sell first. Pay suppliers later.</em>
              </Text>
            </GridItem>
            <GridItem>
              <Link href="https://divly.com/" isExternal>
                <Image src="assets/images/divly-logo.svg" />
              </Link>
              <Text mt={2}>
                <em>Crypto taxes&nbsp;made easy</em>
              </Text>
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
