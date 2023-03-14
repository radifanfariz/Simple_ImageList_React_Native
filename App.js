import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "react-query";
import { Main } from "./navigation/Main";
import { NativeBaseProvider } from "native-base";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <NativeBaseProvider>
            <Main />
          </NativeBaseProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </>
  );
}
