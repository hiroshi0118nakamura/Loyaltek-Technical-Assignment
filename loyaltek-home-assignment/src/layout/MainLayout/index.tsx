import {
  HeaderBarContainer,
  NavbarContainer,
  StatusbarContainer,
} from "containers";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { navbarState } = useSelector((store: RootState) => store.screen);
  return (
    <div className="w-full h-full relative">
      <HeaderBarContainer />
      <div className="flex w-full h-[calc(100vh-40px)]">
        <NavbarContainer />
        <div
          className={`flex flex-col justify-between absolute transition-all h-[calc(100vh-40px)] bg-gray-300 dark:bg-gray-950 ${
            navbarState
              ? "left-0 w-full"
              : "w-[calc(100vw-320px)] left-80 tablet:left-0 mobile:left-0 tablet:w-full mobile:w-full"
          }`}
        >
          {children}
          <StatusbarContainer />
        </div>
      </div>
    </div>
  );
};

export const withMainLayout =
  (Page: React.FC): React.FC =>
  () => {
    return (
      <MainLayout>
        <Page />
      </MainLayout>
    );
  };
