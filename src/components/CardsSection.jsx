import Card from "./Card";
import { FaLeaf, FaSyringe, FaFlask, FaEarListen } from "react-icons/fa6";

const CardsSection = () => {
  const cards = [
    { title: "Nutrition", icon: <FaLeaf className="text-green-600"/>, description: "Learn about healthy nutrition." },
    { title: "Phlebotomy", icon: <FaSyringe className="text-orange-600" />, description: "Master blood sample collection." },
    { title: "Lab Tech", icon: <FaFlask className="text-yellow-500" />, description: "Develop lab testing skills." },
    { title: "Audiology", icon: <FaEarListen className="text-red-600" />, description: "Understand hearing science." }
  ];

  return (
    <div className="w-full grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsSection;
