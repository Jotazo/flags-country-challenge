import { motion } from "framer-motion";

import CountriesList from "./components/CountriesList/CountriesList";
import Header from "./components/Header/Header";

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="container px-4 pt-4 mx-auto"
    >
      <Header />
      <CountriesList />
    </motion.div>
  );
};

export default MainPage;
