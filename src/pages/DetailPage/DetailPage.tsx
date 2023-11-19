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
      <main className="w-full flex flex-col gap-12 md:flex-row dark:text-white text-darkBlueLightText">
        <img
          src={country.flag}
          alt={country.name}
          className="rounded-md object-cover flex-1 max-w-[560px] md:max-h-[280px] xl:max-h-none"
        />
        <InfoSection country={country} />
      </main>
    </motion.div>
  );
};

export default DetailPage;
