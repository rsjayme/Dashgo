import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
	RiSearchLine,
	RiNotificationLine,
	RiUserAddLine,
} from 'react-icons/ri';
import { Logo } from './Header/Logo';
import { NotificationsNav } from './Header/NotificationsNav';
import { Profile } from './Header/Profile';
import { SearchBox } from './Header/SearchBox';

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
			<Logo />
			<SearchBox />

			<Flex align="center" ml="auto">
				<NotificationsNav />

				<Profile />
			</Flex>
		</Flex>
	);
}
