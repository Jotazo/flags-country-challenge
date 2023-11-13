import ThemeProvider from "../contexts/ThemeContext";

import { PropsWithChildren } from "../interfaces";

import ThemeToggler from "./ThemeToggler";

import "./Layout.css";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <header className="flex justify-between items-center bg-white dark:bg-darkBlue py-6 px-4 transition duration-500 layout-header">
        <h3 className="text-sm font-extrabold text-darkBlueLightText dark:text-white">
          Where in the world?
        </h3>
        <ThemeToggler />
      </header>
      <main className="bg-lightGray dark:bg-darkBlueBg h-[calc(100vh-72px)] transition duration-500">
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
