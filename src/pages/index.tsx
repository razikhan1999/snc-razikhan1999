import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { MainLayout } from "@/layouts/MainLayout";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <ReactQueryClientProvider>
      <MainLayout />
    </ReactQueryClientProvider>
  );
};

export default Home;
