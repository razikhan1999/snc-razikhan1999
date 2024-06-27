import PersonSection from "@/components/PersonSection";
import classNames from "classnames";
import { Inter } from "next/font/google";
import { FunctionComponent, PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center gap-4",
      )}
    >
      <PersonSection />
    </main>
  );
};
