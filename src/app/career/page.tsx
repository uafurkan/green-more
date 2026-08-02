import Link from "next/link";
import { CAREERS } from "@/data/site";

export default function CareerPage() {
  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pt-[clamp(32px,5vw,70px)]">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
          Kariyer
        </div>
        <h1 className="mt-3 max-w-[15ch] font-display text-[clamp(44px,8vw,124px)] font-extrabold leading-[0.88] tracking-[-0.045em]">
          Mutfakta yerin hazır.
        </h1>
        <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-gm-ink/70">
          Mutfaktan tezgâha, şube liderliğinden merkez ofise; green&amp;more
          büyürken ekibimiz de büyüyor.
        </p>
      </section>
      <section className="mx-auto grid max-w-[1440px] gap-3.5 px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(30px,4vw,56px)]">
        {CAREERS.map((c) => (
          <div
            key={c.slug}
            className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-gm-ink/[0.09] bg-gm-cream p-[clamp(22px,2.4vw,32px)]"
          >
            <div>
              <h3 className="font-display text-[clamp(21px,2.2vw,28px)] font-bold tracking-[-0.03em]">
                {c.title}
              </h3>
              <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-gm-ink/62">
                {c.body}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-gm-lime px-3.5 py-1.5 text-[13px] font-bold">
                  {c.location}
                </span>
                <span className="rounded-full border border-gm-ink/[0.18] px-3.5 py-1.5 text-[13px] font-semibold">
                  {c.type}
                </span>
              </div>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full bg-gm-green px-[26px] py-3.5 font-bold text-gm-bg transition-colors hover:bg-gm-ink"
            >
              Başvur
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
