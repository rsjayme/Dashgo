import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakaraInputProps,
} from '@chakra-ui/react';
import React from 'react';

interface IInputProps extends ChakaraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: IInputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
