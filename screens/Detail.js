import useGetImageDetail from "../hooks/useGetImageDetail";

import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Container,
  Image,
} from "native-base";

export const Detail = ({ route }) => {
  const { id } = route && route.params;
  const { data, isLoading, isError, isSuccess } = useGetImageDetail(id);
  return (
    <Center flex="1">
      {isLoading && (
        <>
          <Text bold fontSize="3xl">
            Loading...
          </Text>
        </>
      )}
      {isError && (
        <>
          <Center h="100%" w="100%" bg="red.500">
            <Text color="black" fontSize="3xl" bold>
              Error !!!
            </Text>
          </Center>
        </>
      )}
      {isSuccess && (
        <VStack>
          <Center>
            <Image
              source={{
                uri: data.url,
              }}
              alt="image"
              size="2xl"
            />
          </Center>
          <Container bg="coolGray.300" rounded="2xl" py="5" px="5" mt="5">
            <Center w="100%">
                <Text w="100%" fontSize="xl" bold underline>Description</Text>
            </Center>
            <Text color="black" fontSize="lg">
              {`id: ${data.id}`}
            </Text>
            <Text color="black" fontSize="lg" >
              {`albumId: ${data.albumId}`}
            </Text>
            <Text color="black" fontSize="lg" >
              {`url: ${data.url}`}
            </Text>
          </Container>
        </VStack>
      )}
    </Center>
  );
};
