import { useState } from 'react';
import { Box, Flex, Heading, Text, IconButton, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

export const OpeningSection = () => {
  const images = ['/images/slide-1.jpg', '/images/slide-2.jpg', '/images/slide-3.jpg', '/images/slide-4.jpg', '/images/slide-5.jpg'];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={6}>
      {/* Text Section */}
      <Box textAlign="center" mb={8}>
        <Text fontSize="sm" fontWeight="light" letterSpacing="widest" mb={2}>
          DEAR MR-MRS-MS, FAMILY & FRIENDS
        </Text>
        <Heading fontSize="3xl" mb={4}>
          Welcome to Tiffany & Jared’s Wedding Website
        </Heading>
        <Text fontSize="lg" fontWeight="light" maxW="600px" mx="auto">
          Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
        </Text>
      </Box>

      {/* Image Slider */}
      <Box position="relative" w="80%" maxW="800px" overflow="hidden">
        <MotionBox key={currentIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}>
          <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} borderRadius="md" />
        </MotionBox>

        {/* Navigation Buttons */}
        <IconButton aria-label="Previous Slide" icon={<ChevronLeftIcon />} position="absolute" top="50%" left="0" transform="translateY(-50%)" size="lg" onClick={handlePrev} zIndex={2} />
        <IconButton aria-label="Next Slide" icon={<ChevronRightIcon />} position="absolute" top="50%" right="0" transform="translateY(-50%)" size="lg" onClick={handleNext} zIndex={2} />
      </Box>
    </Flex>
  );
};
