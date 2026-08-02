"use client";

import { useState } from "react";
import { FAQ } from "@/data/site";

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pt-[clamp(32px,5vw,70px)]">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
          Sıkça sorulanlar
        </div>
        <h1 className="mt-3 max-w-[15ch] font-display text-[clamp(44px,8vw,124px)] font-extrabold leading-[0.88] tracking-[-0.045em]">
          Aklında ne var?
        </h1>
      </section>
      <section className="mx-auto max-w-[900px] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(30px,4vw,56px)]">
        <div className="grid gap-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-3xl border border-gm-ink/[0.09] bg-gm-cream"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-[clamp(20px,2.4vw,30px)] py-5 text-left"
                >
                  <span className="font-display text-[clamp(17px,1.8vw,22px)] font-bold tracking-[-0.02em]">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 flex-none place-items-center rounded-full bg-gm-lime text-lg font-bold transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-[clamp(20px,2.4vw,30px)] pb-6 text-[15px] leading-relaxed text-gm-ink/68">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
