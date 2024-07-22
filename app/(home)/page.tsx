"use client";

import News from "@/components/news/News";
import Search from "@/components/search/Search";
import Swipers from "@/components/slider/Swipers";

export default function Page() {
  return (
    <div>
      <Search />
      <Swipers />
      <News />
    </div>
  );
}
