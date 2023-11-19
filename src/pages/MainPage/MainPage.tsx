import { motion } from "framer-motion";

import useAppStore from "../../store/useAppStore";

import CountriesList from "./components/CountriesList/CountriesList";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";

const MainPage = () => {
  const loading = useAppStore((state) => state.loading);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="container px-4 pt-4 mx-auto min-h-[calc(100dvh-80px)] flex flex-col"
    >
      <Header />
      {loading ? <Loading /> : <CountriesList />}
    </motion.div>
  );
};

export default MainPage;
