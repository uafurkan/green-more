"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="bg-gm-lime">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-[clamp(22px,3vw,54px)] px-[clamp(18px,3vw,44px)] py-[clamp(44px,6vw,90px)]">
        <div>
          <h2 className="font-display text-[clamp(30px,4.4vw,58px)] font-extrabold leading-[0.98] tracking-[-0.04em]">
            Sezon menüsünü ilk sen gör.
          </h2>
          <p className="mt-3.5 max-w-[44ch] text-base leading-relaxed text-gm-ink/70">
            Ayda iki mail: yeni tabaklar, açılışlar, kapalı kapı akşam yemekleri.
          </p>
        </div>
        <div>
          <form
            className="flex flex-wrap gap-2.5"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(!!email.trim());
            }}
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSubscribed(false);
              }}
              placeholder="e-posta adresin"
              type="email"
              className="min-w-0 flex-1 basis-[200px] rounded-full border border-gm-ink/20 bg-white/60 px-[22px] py-4 outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gm-ink px-[30px] py-4 font-bold text-gm-bg"
            >
              Kaydol
            </button>
          </form>
          {subscribed && (
            <div className="mt-3 text-sm font-semibold text-gm-green">
              Listedesin. İlk mail pazartesi.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
