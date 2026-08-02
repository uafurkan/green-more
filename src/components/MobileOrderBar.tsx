"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileOrderBar() {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!narrow) return null;

  return (
    <>
      <div className="fixed inset-x-3 bottom-3 z-80 flex items-center justify-between gap-3 rounded-full bg-gm-ink py-3 pl-[22px] pr-3.5 text-gm-bg shadow-[0_20px_40px_-20px_rgba(13,26,17,0.8)]">
        <span className="text-[15px] font-semibold">Bugün ne yiyoruz?</span>
        <Link
          href="/menu"
          className="rounded-full bg-gm-lime px-5 py-[11px] text-[15px] font-bold text-gm-ink"
        >
          Sipariş ver
        </Link>
      </div>
      <div className="h-[76px] bg-gm-ink" />
    </>
  );
}
