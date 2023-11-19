import { motion } from "framer-motion";

import useAppStore from "../../store/useAppStore";

import { Country } from "../../interfaces";

import { ArrowBackIcon } from "../../assets/Icons";

import InfoSection from "./InfoSection/InfoSection";

interface Props {
  country: Country;
}

const DetailPage: React.FC<Props> = ({ country }) => {
  const setCountrySelected = useAppStore((state) => state.setCountrySelected);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="container p-6 mx-auto flex flex-col gap-12 max-w-7xl xl:px-0"
    >
      <button
        className="inputs flex items-center gap-4 !py-2 !px-6 bg-white self-start"
        onClick={() => setCountrySelected(null)}
      >
        <ArrowBackIcon /> Back
      </button>
      <main className="w-full flex flex-col xl:flex-row gap-12 md:px-8 xl:px-0 dark:text-white text-darkBlueLightText">
        <img
          src={country.flag.svg}
          alt={country.flag.alt}
          className="rounded-md object-fill flex-1  md:max-h-[380px] xl:max-h-none xl:min-h-[400px] xl:max-w-[560px] "
        />
        <InfoSection country={country} />
      </main>
    </motion.div>
  );
};

export default DetailPage;
