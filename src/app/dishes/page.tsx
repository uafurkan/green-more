import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { SIGNATURES } from "@/data/site";

export default function DishesPage() {
  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pt-[clamp(32px,5vw,70px)]">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
          İmza tabaklar
        </div>
        <h1 className="mt-3 max-w-[14ch] font-display text-[clamp(44px,8vw,120px)] font-extrabold leading-[0.9] tracking-[-0.045em]">
          Örnek muhteşem tabaklar.
        </h1>
        <p className="mt-5 max-w-[58ch] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-gm-ink/70">
          Şeflerimizin sezon boyunca en çok üzerinde çalıştığı beş tabak. Her biri
          tek başına bir öğün, hepsi birlikte green&amp;more&apos;un cevabı.
        </p>
      </section>
      <section className="mx-auto grid max-w-[1440px] gap-[clamp(30px,4vw,72px)] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(30px,4vw,64px)]">
        {SIGNATURES.map((s) => (
          <div
            key={s.slug}
            className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(22px,3vw,54px)]"
          >
            <div className="relative h-[clamp(280px,34vw,440px)] overflow-hidden rounded-[32px]">
              <ImagePlaceholder label="İmza tabak fotoğrafı" src={s.image} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div>
              <div className="font-display text-sm font-extrabold tracking-[0.08em] text-gm-orange">
                {s.no}
              </div>
              <h2 className="mt-2 font-display text-[clamp(30px,4.4vw,56px)] font-extrabold leading-[0.98] tracking-[-0.04em]">
                {s.name}
              </h2>
              <p className="mt-3.5 font-serif-italic text-[clamp(19px,2vw,26px)] italic leading-[1.35] text-gm-green">
                {s.hook}
              </p>
              <p className="mt-3.5 max-w-[52ch] text-base leading-relaxed text-gm-ink/68">
                {s.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-gm-ink/[0.18] px-3.5 py-2 text-[13px] font-semibold"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-[26px] flex flex-wrap items-center gap-[18px]">
                <span className="font-display text-[26px] font-extrabold tracking-[-0.03em]">
                  {s.price}
                </span>
                <Link
                  href="/menu"
                  className="rounded-full bg-gm-green px-[26px] py-3.5 font-bold text-gm-bg transition-colors hover:bg-gm-ink"
                >
                  Sipariş ver
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
