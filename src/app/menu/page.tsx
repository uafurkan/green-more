"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { DISHES, TABS } from "@/data/site";

export default function MenuPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("salata");
  const items = DISHES[tab] ?? [];

  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pt-[clamp(32px,5vw,70px)]">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">Menü</div>
        <h1 className="mt-3 font-display text-[clamp(44px,8vw,120px)] font-extrabold leading-[0.9] tracking-[-0.045em]">
          Hepsi burada.
        </h1>
        <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-gm-ink/70">
          Fiyatlar tüm şubelerde geçerlidir. Her tabak kişiselleştirilebilir; alerjen
          bilgisi kartın detayında yazar.
        </p>
        <div className="my-[clamp(26px,3vw,44px)] flex flex-wrap gap-2.5">
          {TABS.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-full border px-6 py-3 text-[15px] font-bold ${
                  active
                    ? "border-gm-ink bg-gm-ink text-gm-bg"
                    : "border-gm-ink/20 bg-transparent text-gm-ink"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(14px,1.6vw,24px)]">
          {items.map((d) => (
            <div
              key={d.slug}
              className="overflow-hidden rounded-[26px] border border-gm-ink/[0.09] bg-gm-cream transition-transform duration-250 ease-out hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-30px_rgba(13,26,17,0.55)]"
            >
              <div className="relative h-[230px]">
                <ImagePlaceholder label="Tabak fotoğrafı" src={d.image} />
                <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-gm-lime px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em]">
                  {d.tag}
                </div>
              </div>
              <div className="p-[22px]">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[23px] font-bold tracking-[-0.03em]">
                    {d.name}
                  </h3>
                  <span className="whitespace-nowrap text-[17px] font-bold">{d.price}</span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-gm-ink/62">{d.desc}</p>
                <div className="mt-4 flex items-center justify-between gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-[0.06em] text-gm-ink/42">
                    {d.meta}
                  </span>
                  <span className="text-sm font-bold text-gm-green">Detay →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
