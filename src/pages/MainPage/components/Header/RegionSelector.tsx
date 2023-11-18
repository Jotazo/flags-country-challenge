import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronDownIcon } from "../../../../assets/Icons";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

const RegionSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [regionSelected, setRegionSelected] = useState("");

  const onToggleOpen = () => setIsOpen((prev) => !prev);

  const onSelectRegion = (region: string) => {
    setRegionSelected(region);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <span
        onClick={onToggleOpen}
        className="w-[200px] bg-white inputs flex justify-between items-center cursor-pointer "
      >
        {regionSelected === "" ? "Filter by Region" : regionSelected}
        <ChevronDownIcon />
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="buenafuente"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="absolute inputs w-full top-[58px] flex flex-col gap-2 bg-white"
          >
            {REGIONS.map((region, index) => (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeInOut",
                }}
                onClick={() => onSelectRegion(region)}
                className="cursor-pointer"
                key={region}
              >
                {region}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegionSelector;