import { useState } from 'react';
import { Box, Grid, GridItem, Heading, Text, Button, Flex } from '@chakra-ui/react';

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} minH="100vh">
      {!isOpen ? (
        <>
          {/* Left Side */}
          <GridItem display={{ base: 'none', lg: 'block' }} position="relative" bgImage="url('/images/bg-left.jpg')" bgSize="cover" bgPosition="center">
            {/* Overlay */}
            <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="rgba(0, 0, 0, 0.5)" zIndex={1}></Box>
            {/* Content */}
            <Box position="relative" zIndex={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%" color="white" p={8} textAlign="center">
              <Heading fontSize="4xl" mb={4} textTransform="uppercase">
                Wedding Announcement
              </Heading>
              <Heading fontSize="6xl">TIFFANY & JARED</Heading>
              <Text fontSize="lg" mt={4}>
                "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang
                menjadikannya tiada."
              </Text>
              <Text mt={2} fontStyle="italic" fontWeight="light" fontSize="md">
                — Sapardi Djoko Damono
              </Text>
            </Box>
          </GridItem>

          {/* Right Side */}
          <GridItem position="relative" bgImage="url('/images/bg-right.jpg')" bgSize="cover" bgPosition="center">
            {/* Overlay */}
            <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="rgba(0, 0, 0, 0.5)" zIndex={1}></Box>
            {/* Content */}
            <Box position="relative" zIndex={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%" color="white" p={8} textAlign="center">
              <Heading fontSize="4xl" mb={4} textTransform="uppercase">
                Wedding Announcement
              </Heading>
              <Heading fontSize="6xl">TIFFANY & JARED</Heading>
              <Text fontSize="lg" fontWeight="bold" mt={4}>
                #TImetoshaRE
              </Text>
              <Button colorScheme="teal" size="lg" mt={6} onClick={() => setIsOpen(true)}>
                Open
              </Button>
            </Box>
          </GridItem>
        </>
      ) : (
        <>
          {/* Left Side */}
          <GridItem display={{ base: 'none', lg: 'block' }} position="relative" bgImage="url('/images/bg-left.jpg')" bgSize="cover" bgPosition="center">
            {/* Overlay */}
            <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="rgba(0, 0, 0, 0.5)" zIndex={1}></Box>
            {/* Content */}
            <Box position="relative" zIndex={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%" color="white" p={8} textAlign="center">
              <Heading fontSize="4xl" mb={4} textTransform="uppercase">
                Wedding Announcement
              </Heading>
              <Heading fontSize="6xl">TIFFANY & JARED</Heading>
              <Text fontSize="lg" mt={4}>
                "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang
                menjadikannya tiada."
              </Text>
              <Text mt={2} fontStyle="italic" fontWeight="light" fontSize="md">
                — Sapardi Djoko Damono
              </Text>
            </Box>
          </GridItem>

          {/* Right Side */}
          <GridItem position="relative" bgImage="url('/images/bg-righ.jpg')" bgSize="cover" bgPosition="center">
            {/* Overlay */}
            <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="rgba(0, 0, 0, 0.5)" zIndex={1}></Box>
            {/* Content */}
            <Box position="relative" zIndex={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%" color="white" p={8} textAlign="center">
              <Heading fontSize="4xl" mb={4} textTransform="uppercase">
                Wedding Announcement
              </Heading>
              <Heading fontSize="6xl">TIFFANY & JARED</Heading>
              <Text fontSize="lg" fontWeight="bold" mt={4}>
                #TImetoshaRE
              </Text>
              <Flex>
                <Text fontSize="md" fontWeight="bold" mt={4}>
                  SCROLL TO BEGIN
                </Text>
              </Flex>
            </Box>
          </GridItem>
        </>
      )}
    </Grid>
  );
};
