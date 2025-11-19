import React from "react";
import { FaStar } from "react-icons/fa";

import { Link } from "react-router";

const GameCard = ({ data }) => {
  const {
    id,
    title,
    coverPhoto,
    category,
    ratings,
    developer,
    description,
    downloadLink,
  } = data;

  return (
    <div className="relative group rounded-2xl overflow-hidden bg-[#0F1724]/70 backdrop-blur-md border border-[#B8FF00]/30 shadow-lg hover:shadow-[0_0_15px_#B8FF00] transition-all duration-300 hover:scale-[1.03]">
      <div className="w-full h-56 overflow-hidden">
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4 text-[#E6F0FF] flex flex-col gap-2">
        <h2 className="text-xl font-bold tracking-wide">{title}</h2>
        <p className="text-sm text-[#B8FF00]">{category}</p>

        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1 text-yellow-400">
            <FaStar className="text-yellow-400" /> {ratings}
          </p>
          <p className="text-sm opacity-80">By {developer}</p>
        </div>

        <p className="text-sm text-gray-300 mt-1 line-clamp-2">
          {description.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </p>

        {/* Buttons */}
        <div className="flex justify-between mt-3">
          <Link
            to={`game-details/${id}`}
            className="border  btn btn-soft btn-success hover:bg-green-800 hover:border-green-800 text-[#B8FF00]"
          >
            Details
          </Link>
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn  bg-transparent border border-[#B8FF00] text-[#B8FF00] hover:bg-[#B8FF00] hover:text-black"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
