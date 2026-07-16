import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const ClientReview = ({ name, role, image, quote, rating }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center px-4 py-8">
      {/* Avatar */}
      <div
        className="w-[80px] h-[80px] mx-auto mb-[1.5rem] rounded-full overflow-hidden border-2"
        style={{ borderColor: "var(--accent-green)" }}
      >
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Stars */}
      <div className="flex items-center mx-auto mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Name & Role */}
      <h3
        className="text-[20px] font-bold font-heading"
        style={{ color: "var(--text-primary)" }}
      >
        {name}
      </h3>
      <p
        className="text-[14px] font-medium mt-1 mb-4"
        style={{ color: "var(--accent-green)" }}
      >
        {role}
      </p>

      {/* Quote */}
      <p
        className="text-[15px] leading-relaxed w-[90%] md:w-[60%] mx-auto italic"
        style={{ color: "var(--text-secondary)" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
};

export default ClientReview;
