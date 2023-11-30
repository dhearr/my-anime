"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;
    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        ref={searchRef}
        placeholder="cari anime ....."
        className="w-full p-2 rounded-lg"
        onKeyDown={handleSearch}
      />
      <button>
        <MagnifyingGlass
          size={24}
          className="absolute end-2 top-2"
          onClick={handleSearch}
        />
      </button>
    </div>
  );
};

export default InputSearch;
