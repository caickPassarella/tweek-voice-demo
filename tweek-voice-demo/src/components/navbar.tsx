import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import mainLogo from "../assets/healthcareLogo.png";

export const Navbar: React.FC = () => {
  return (
    <Box px={4} bg={"#d5fff389"}>
      <Flex
        h={16}
        alignItems={"center"}
        w={"100%"}
        justifyContent={"space-between"}
      >
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            {/* Replace this with your logo */}
            <img src={mainLogo} alt="Logo" style={{ height: "40px" }} />
          </Box>
          <Box fontWeight="bold" fontSize="xl" color={"#2b6865"}>
            HealthyCare
          </Box>
        </HStack>
        <Flex alignItems={"center"}>
          <IconButton
            ml={4}
            variant="outline"
            colorScheme="teal"
            aria-label="Logout"
            icon={<DeleteIcon />}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
