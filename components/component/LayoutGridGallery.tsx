"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
        <h2 className="text-2xl font-bold text-center">
            Exemple d'images généréer par une IA
        </h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
    <p className="font-bold md:text-4xl text-xl text-white">
    Music producer at work
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    A young woman sits at a professional music setup, her hands on a keyboard synthesizer. She's surrounded by audio equipment, monitors, and speakers in what appears to be a home studio. The dim lighting and her focused expression convey the intimate, creative atmosphere of music production.
    </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
  <p className="font-bold md:text-4xl text-xl text-white">
    Contemplative Moment in the City
  </p>
  <p className="font-normal text-base text-white"></p>
  <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    A young man sits quietly at an outdoor café, lost in thought as the city life
    moves around him. The warm sunlight casts gentle shadows, creating a serene
    and introspective atmosphere. This scene captures a peaceful moment of
    reflection amidst the hustle and bustle of urban life.
  </p>
</div>

  );
};
const SkeletonThree = () => {
  return (
    <div>
    <p className="font-bold md:text-4xl text-xl text-white">
      Rocket Launch at Sunset
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      As the sun sets behind distant mountains, powerful rockets are seen launching from a futuristic space facility. The scene is bathed in warm, golden light, highlighting the advanced technology and ambition of space exploration. This moment captures the awe-inspiring blend of human ingenuity and the beauty of the natural world.
    </p>
  </div>
  
  );
};
const SkeletonFour = () => {
  return (
    <div>
  <p className="font-bold md:text-4xl text-xl text-white">
    Collaborative Office Meeting
  </p>
  <p className="font-normal text-base text-white"></p>
  <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    A group of professionals is engaged in a collaborative meeting in a modern
    office setting. The space is bright and well-organized, fostering an
    atmosphere of creativity and teamwork. The meeting participants are focused
    and actively contributing, surrounded by wooden furniture and natural light.
  </p>
</div>

  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/assets/images/gallery/one.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/assets/images/gallery/two.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "assets/images/gallery/three.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/assets/images/gallery/four.png",
  },
];
