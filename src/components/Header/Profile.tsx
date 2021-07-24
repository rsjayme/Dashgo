import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export function Profile() {
	return (
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
	);
}
