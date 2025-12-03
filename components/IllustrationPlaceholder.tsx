import React from "react";
import Image from "next/image";

export const IllustrationPlaceholder = ({ prompt, title, imageSrc, className }: { prompt: string; title: string; imageSrc?: string; className?: string }) => {
  if (imageSrc) {
    return (
      <div className={`rounded-lg overflow-hidden shadow-lg ${className || "my-8"}`}>
        <Image 
          src={imageSrc} 
          alt={title} 
          width={800} 
          height={400} 
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }
  return (
    <div className={`p-6 bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg ${className || "my-8"}`}>
      <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
        Illustration Placeholder: {title}
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">{prompt}</p>
    </div>
  );
};
