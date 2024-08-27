import {
  Box,
  Flex,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export const IncomingPanel: React.FC = () => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex>
          <Flex
            flex="1"
            gap="4"
            alignItems="center"
            justify={"center"}
            flexWrap="wrap"
          >
            <Box>
              <Heading size="sm">Incoming Call</Heading>
              <Text>+5511976270471</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<DeleteIcon />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<DeleteIcon />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<DeleteIcon />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};
