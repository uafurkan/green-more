"use client";

import { useState } from "react";
import { LOCATIONS } from "@/data/site";

export default function LocationsPage() {
  const [city, setCity] = useState("");
  const [voted, setVoted] = useState(false);

  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pt-[clamp(32px,5vw,70px)]">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
          Şubeler
        </div>
        <h1 className="mt-3 font-display text-[clamp(44px,8vw,124px)] font-extrabold leading-[0.88] tracking-[-0.045em]">
          Nerede yiyoruz?
        </h1>
      </section>
      <section className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(20px,3vw,44px)] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(28px,3vw,52px)]">
        <div className="grid">
          {LOCATIONS.map((l) => (
            <div
              key={l.name}
              className="flex items-center justify-between gap-4 border-b border-gm-ink/[0.12] py-5"
            >
              <div>
                <div className="font-display text-[clamp(21px,2.2vw,28px)] font-bold tracking-[-0.03em]">
                  {l.name}
                </div>
                <div className="mt-1 text-sm text-gm-ink/58">{l.addr}</div>
              </div>
              <span
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-bold ${
                  l.open ? "bg-gm-lime" : "border border-gm-ink/25 bg-transparent"
                }`}
              >
                {l.status}
              </span>
            </div>
          ))}
        </div>
        <div className="rounded-[30px] bg-gm-ink p-[clamp(26px,3vw,44px)] text-gm-bg">
          <h2 className="font-display text-[clamp(26px,3vw,40px)] font-extrabold leading-none tracking-[-0.035em]">
            Sıradaki şube senin mahallende mi?
          </h2>
          <p className="my-4 text-base leading-relaxed text-gm-bg/70">
            Nerede açmamızı istediğini yaz; açılış planını topluluk oylarıyla
            yapıyoruz.
          </p>
          <form
            className="flex flex-wrap gap-2.5"
            onSubmit={(e) => {
              e.preventDefault();
              setVoted(!!city.trim());
            }}
          >
            <input
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setVoted(false);
              }}
              placeholder="Şehir / semt"
              className="min-w-0 flex-1 basis-[180px] rounded-full border border-gm-bg/35 bg-transparent px-5 py-[15px] text-gm-bg outline-none placeholder:text-gm-bg/50"
            />
            <button
              type="submit"
              className="rounded-full bg-gm-lime px-[26px] py-[15px] font-bold text-gm-ink"
            >
              Oy ver
            </button>
          </form>
          {voted && (
            <div className="mt-3.5 text-sm font-semibold text-gm-lime">
              Teşekkürler — oyun sayıldı.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
