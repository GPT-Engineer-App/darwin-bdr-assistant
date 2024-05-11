import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Darwin®
        </Heading>
        <Text fontSize="lg">v.1 launching soon</Text>
        <Button rightIcon={<FaRocket />} colorScheme="teal" size="lg">
          Hire Darwin
        </Button>
        <Button colorScheme="blue" size="lg">
          Book demo
        </Button>
        <Text fontSize="xl" textAlign="center">
          Hi, I'm Darwin — your new BDR colleague. Darwin will continuously source leads, craft personalized & persuasive messages that book meetings with buyers.
        </Text>
        <Image src="https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE1NDM0ODg0fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="full" alt="Portrait of Darwin" />
        <Text fontSize="xl">Introducing Darwin — your AI colleague.</Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Darwin</Heading>
            <Text mt={4}>Hey Alex - congrats on your pre-seed round of $1M! Noticed on LinkedIn that you’re hiring designers. Kindred Lab has helped leading climate tech companies amplify their brand aligned with their mission. After a quick look on your website, I’ve some ideas for potential improvements. Worth a discussion? Cheers, Darwin</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Alex</Heading>
            <Text mt={4}>Hey Darwin, sounds interesting. Could you tell me more?</Text>
          </Box>
        </Stack>
        <Heading as="h2" size="lg">
          Book meetings — fast.
        </Heading>
        <VStack align="start" spacing={3}>
          <Text>Step 1: Hire Darwin - Sign up and integrate Darwin into your existing team or workflow</Text>
          <Text>Step 2: Train Darwin - Provide Darwin with details about your product to create an ICP.</Text>
          <Text>Step 3: Darwin researches - Darwin researches each potential customer based on dozens of data points.</Text>
          <Text>Step 4: Automated interactions - Darwin personalizes outreach messages tailored to each potential customer</Text>
        </VStack>
        <Text fontSize="xl">Darwin is a top 1% BDR and is 96% cheaper.</Text>
        <VStack align="start" spacing={3}>
          <Text>Research: The right person - Darwin does in-depth research of your product & finds buyers whose pain-point your product solves.</Text>
          <Text>Messaging: The right message - Human personalization and persuasion. No ChatGPT sounding bullshit. Darwin writes value driven messages that book meetings.</Text>
          <Text>Timing: The right time - Darwin finds triggers of buyers to contact them at the right time, such as job changes, news, and data found on the web.</Text>
        </VStack>
        <Text fontSize="xl">The next step in Evolution. Introducing AI-colleagues.</Text>
        <Button rightIcon={<FaRocket />} colorScheme="teal" size="lg">
          Hire Darwin
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
