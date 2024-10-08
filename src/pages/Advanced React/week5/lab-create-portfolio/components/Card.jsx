import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor="white" rounded="xl">
      <Image src={imageSrc} alt={title} rounded="xl" />
      <VStack alignItems="left" padding="10px" spacing={5}>
        <Heading textAlign="left" color="black" size="lg">
          {title}
        </Heading>
        <Text color="black">{description}</Text>
        <HStack>
          <Text color="black" fontWeight="bold">
            See more
          </Text>
          <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
