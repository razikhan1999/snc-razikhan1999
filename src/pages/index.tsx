import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { LogContextProvider } from "@/context/LogContext";
import { MainLayout } from "@/layouts/MainLayout";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <ReactQueryClientProvider>
      <LogContextProvider>
        <MainLayout />
      </LogContextProvider>
    </ReactQueryClientProvider>
  );
};

export default Home;
