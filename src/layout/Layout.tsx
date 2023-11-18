import { ThemeToggler } from "@jotazo/react-components-library";

import { PropsWithChildren } from "../interfaces";

import "./Layout.css";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className=" bg-white dark:bg-darkBlue py-6 px-4 transition duration-500 layout-header">
        <div className="container flex justify-between items-center mx-auto">
          <h3 className="text-sm font-extrabold text-darkBlueLightText dark:text-white">
            Where in the world?
          </h3>
          <ThemeToggler variant="animated" />
        </div>
      </header>
      <main className="bg-lightGray dark:bg-darkBlueBg h-[calc(100vh-80px)] transition duration-500">
        {children}
      </main>
    </>
  );
};

export default Layout;
