import useGetImages from "../hooks/useGetImages";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Center,
} from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";

export const Home = ({ navigation }) => {
  const { data, isLoading, isError, isSuccess } = useGetImages();
  return (
    <Center flex="1">
      {isLoading && (
        <>
          <Text fontSize="3xl" bold>
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
        <>
          <Box>
            <Heading fontSize="xl" p="4" pb="3">
              Image List
            </Heading>
            <FlatList
              px="2"
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.post}
                  onPress={() => navigation.push("Detail", { id: item.id })}
                >
                  <Box pl={["0", "4"]} pr={["3", "5"]} py="2">
                    <HStack
                      space={[2, 3]}
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Avatar
                        size="48px"
                        source={{
                          uri: item.thumbnailUrl,
                        }}
                      />
                      <VStack>
                        <Text
                          pr="20"
                          _dark={{
                            color: "warmGray.50",
                          }}
                          color="white"
                          bold
                        >
                          {item.title}
                        </Text>
                        <Text
                          color="white"
                          _dark={{
                            color: "warmGray.200",
                          }}
                        >
                          {`id: ${item.id}`}
                        </Text>
                        <Text
                          color="white"
                          _dark={{
                            color: "warmGray.200",
                          }}
                        >
                          {`albumId: ${item.albumId}`}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </Box>
        </>
      )}
    </Center>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    _dark: {
      backgroundColor: "gray",
    },
  },
});
