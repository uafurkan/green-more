import Link from "next/link";
import { FOOTER, LEGAL } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-gm-ink text-gm-bg">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[clamp(24px,3vw,44px)] px-[clamp(18px,3vw,44px)] pb-0 pt-[clamp(44px,6vw,90px)]">
        <div>
          <div className="font-display text-[30px] font-extrabold tracking-[-0.03em]">
            green<span className="text-gm-orange">&amp;</span>more
          </div>
          <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-gm-bg/60">
            Yeşilden fazlası. Her gün, her tabakta.
          </p>
        </div>
        {FOOTER.map((col) => (
          <div key={col.title}>
            <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.14em] text-gm-lime">
              {col.title}
            </div>
            <div className="grid gap-2.5">
              {col.items.map((it) => (
                <Link
                  key={it.label}
                  href={it.href}
                  className="text-[15px] text-gm-bg/72 transition-colors hover:text-gm-lime"
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-3 border-t border-gm-bg/[0.14] px-[clamp(18px,3vw,44px)] py-[22px] pb-10 text-[13px] text-gm-bg/50">
        <span>© 2026 green&amp;more</span>
        <span className="flex flex-wrap gap-x-2 gap-y-1">
          {LEGAL.map((l, i) => (
            <span key={l.href} className="flex items-center gap-2">
              <Link href={l.href} className="transition-colors hover:text-gm-lime">
                {l.label}
              </Link>
              {i < LEGAL.length - 1 && <span>·</span>}
            </span>
          ))}
        </span>
      </div>
    </footer>
  );
}
