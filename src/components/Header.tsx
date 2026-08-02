"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-90 border-b border-gm-ink/[0.09] bg-gm-bg/88 backdrop-blur-[14px]">
      <div className="mx-auto flex h-[clamp(64px,7vw,82px)] max-w-[1440px] items-center justify-between gap-5 px-[clamp(18px,3vw,44px)]">
        <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
          <span className="grid h-[30px] w-[30px] flex-none place-items-center rounded-full bg-gm-green">
            <span className="block h-[13px] w-[13px] -rotate-[20deg] rounded-[50%_0_50%_50%] bg-gm-lime" />
          </span>
          <span className="font-display text-[clamp(19px,2.2vw,23px)] font-extrabold tracking-[-0.03em] text-gm-ink">
            green<span className="text-gm-orange">&amp;</span>more
          </span>
        </Link>

        <nav className="hidden items-center gap-[clamp(10px,1.5vw,24px)] text-[15px] font-medium md:flex">
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`whitespace-nowrap border-b-2 pb-[3px] ${
                  active
                    ? "border-gm-lime font-bold text-gm-green"
                    : "border-transparent font-medium text-gm-ink"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/menu"
            className="whitespace-nowrap rounded-full bg-gm-ink px-[22px] py-3 text-[15px] font-bold text-gm-bg transition-colors hover:bg-gm-green"
          >
            Sipariş ver
          </Link>
          <button
            aria-label="Menü"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center gap-[5px] rounded-full border border-gm-ink/[0.18] bg-transparent p-0 md:hidden"
          >
            <span className="block h-0.5 w-[18px] bg-gm-ink" />
            <span className="block h-0.5 w-[18px] bg-gm-ink" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="grid max-h-[72vh] overflow-auto border-t border-gm-ink/[0.08] px-[clamp(18px,3vw,44px)] pb-6 pt-1.5 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-gm-ink/[0.07] py-[13px] font-display text-[25px] font-semibold text-gm-ink"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
