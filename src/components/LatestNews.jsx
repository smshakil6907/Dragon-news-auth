import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function LatestNews() {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-purple-700 text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-10">
        <Link>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          dolore.
        </Link>
        <Link>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          dolore.
        </Link>
        <Link>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          dolore.
        </Link>
      </Marquee>
    </div>
  );
}
