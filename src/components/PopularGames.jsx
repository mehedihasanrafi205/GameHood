import React from "react";
import { useLoaderData } from "react-router";
import GamesCard from "./GamesCard";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const PopularGames = () => {
  const data = useLoaderData();
  const sortedData = data.sort((a, b) => b.ratings - a.ratings);

  return (
    <section className="container mx-auto mt-30">
      <h1 className="font-bold text-3xl md:text-4xl mb-10 text-center  "><span className="border-b-3 border-[#B8FF00] pb-1 secondary-font">Most Popular Games</span></h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sortedData.map((data) => (
          <motion.div key={data.id} variants={cardVariants}>
            <GamesCard data={data}></GamesCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PopularGames;
