import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text color="pink.500" as="span" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
          mr="4"
          px="4"
        />

        <Icon fontSize={20} as={RiSearchLine} />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Raphael Jayme</Text>
            <Text color="gray.300" fontSize="small">
              raphael@avaloon.com.br
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Raphael Jayme"
            src="https://github.com/rsjayme.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
