import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import characterHeader from "../../src/assets/character.png";
import { SuccesContext } from "../hooks/SuccesContext";

export default function Toast() {
  const succesMessage = useContext(SuccesContext);
 
  return (
    <AnimatePresence>
      {succesMessage?.isSent && (
        <motion.div
          initial={{ right: "-100px", opacity: 0 }}
          animate={{ right: "12px", opacity: 1 }}
          exit={{ right: "-100px", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-3 p-4 rounded-md bg-secondary flex gap-2 items-center"
        >
          <div>
            <img
              src={characterHeader}
              alt="check icon"
              className="w-[28px] "
            />
          </div>
          <div className="text-white capitalize text-sm font-bold">
            Your message has been sent !
          </div>
          <motion.div
            initial={{ width: "0px" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute h-1 rounded-b-md bg-primary bottom-0 right-0"
          ></motion.div>
        </motion.div>
      )}
     </AnimatePresence>
  );
}
