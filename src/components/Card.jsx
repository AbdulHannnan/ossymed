import { motion } from "framer-motion";

const Card = ({ title, icon, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-md cursor-pointer flex flex-col items-center text-center space-y-4 hover:shadow-xl border-[0.5px] border-green-300"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </motion.div>
  );
};

export default Card;
