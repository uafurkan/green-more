import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { FEATURED, PILLARS } from "@/data/site";

const marqueeItems = [
  "günlük yapılan soslar",
  "gizli malzeme yok",
  "elde kurulan tabaklar",
  "her şey adıyla yazılı",
];

const Leaf = () => (
  <svg viewBox="0 0 32 32" className="h-[0.72em] w-[0.72em] flex-none overflow-visible">
    <path
      d="M29 3C15 3 4 8 4 19a9 9 0 0 0 9 9c11 0 16-12 16-25Z"
      fill="#cbf24a"
    />
    <path
      d="M26 6C16 11 10 18 6.5 27.5"
      stroke="#14512f"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pt-[clamp(28px,5vw,64px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] items-end gap-[clamp(28px,4vw,64px)]">
          <div className="gm-rise">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-gm-lime px-4 py-2 text-[13px] font-bold uppercase tracking-[0.04em]">
              <span className="block h-[7px] w-[7px] rounded-full bg-gm-green" />
              Yeni sezon menüsü yayında
            </div>
            <h1 className="mt-[22px] text-balance font-display text-[clamp(52px,9.5vw,148px)] font-extrabold leading-[0.86] tracking-[-0.045em]">
              Yeşilden
              <br />
              <span className="text-gm-green">fazlası</span>
              <span className="text-gm-orange">.</span>
            </h1>
            <p className="mt-[26px] max-w-[46ch] text-pretty text-[clamp(17px,1.6vw,22px)] leading-[1.5] text-gm-ink/72">
              green&amp;more bir salata dükkânı değil; hızlı ama gerçek bir mutfak. Her
              sos günlük yapılır, her tabak elde kurulur, her malzeme adıyla yazılır.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="rounded-full bg-gm-green px-8 py-[17px] text-[17px] font-bold text-gm-bg transition-colors hover:bg-gm-ink"
              >
                Menüyü keşfet
              </Link>
              <Link
                href="/dishes"
                className="rounded-full border-[1.5px] border-gm-ink/25 px-8 py-[17px] text-[17px] font-bold text-gm-ink transition-colors hover:border-gm-ink hover:bg-gm-ink/[0.04]"
              >
                İmza tabaklar →
              </Link>
            </div>
            <div className="mt-11 flex flex-wrap gap-[clamp(20px,3vw,44px)] border-t border-gm-ink/[0.12] pt-[26px]">
              <div>
                <div className="font-display text-[clamp(28px,3.4vw,42px)] font-extrabold leading-none tracking-[-0.03em]">
                  32
                </div>
                <div className="mt-1 text-[13px] text-gm-ink/60">imza tabak</div>
              </div>
              <div>
                <div className="font-display text-[clamp(28px,3.4vw,42px)] font-extrabold leading-none tracking-[-0.03em]">
                  6 dk
                </div>
                <div className="mt-1 text-[13px] text-gm-ink/60">ortalama hazırlık</div>
              </div>
              <div>
                <div className="font-display text-[clamp(28px,3.4vw,42px)] font-extrabold leading-none tracking-[-0.03em]">
                  4.9
                </div>
                <div className="mt-1 text-[13px] text-gm-ink/60">uygulama puanı</div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[clamp(340px,46vw,600px)]">
            <div className="absolute inset-0 overflow-hidden rounded-[999px_999px_40px_40px]">
              <ImagePlaceholder label="Kahraman görsel — imza kâse, üstten" />
            </div>
            <div className="gm-float absolute -left-1.5 bottom-[34px] rounded-[20px] border border-gm-ink/10 bg-gm-bg px-[18px] py-3.5 shadow-[0_18px_40px_-22px_rgba(13,26,17,0.5)]">
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-gm-ink/50">
                Haftanın tabağı
              </div>
              <div className="mt-0.5 font-display text-[23px] font-extrabold leading-[1.1] tracking-[-0.03em]">
                Nar &amp; Tahin Kâsesi
              </div>
            </div>
            <div className="gm-float absolute -right-1 top-[26px] grid h-[clamp(78px,9vw,110px)] w-[clamp(78px,9vw,110px)] place-items-center rounded-full bg-gm-orange text-center text-[11px] font-bold uppercase leading-[1.25] tracking-[0.04em] text-gm-bg [animation-duration:7.5s]">
              Günlük
              <br />
              yapılan
              <br />
              soslar
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[clamp(56px,7vw,110px)] overflow-hidden whitespace-nowrap bg-gm-green py-[22px] text-gm-bg">
        <div className="gm-marquee inline-flex items-center gap-9 pr-9 font-display text-[clamp(22px,3vw,40px)] font-semibold tracking-[-0.02em]">
          {Array.from({ length: 2 }).map((_, rep) =>
            marqueeItems.map((item) => (
              <span key={`${rep}-${item}`} className="inline-flex items-center gap-9">
                <span>{item}</span>
                <Leaf />
              </span>
            ))
          )}
        </div>
      </div>

      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] py-[clamp(56px,7vw,120px)]">
        <div className="mb-[clamp(24px,3vw,44px)] flex flex-wrap items-end justify-between gap-4.5">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
              Örnek tabaklar
            </div>
            <h2 className="mt-2.5 font-display text-[clamp(34px,5.4vw,74px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              Bu hafta masada ne var?
            </h2>
          </div>
          <Link
            href="/menu"
            className="border-b-2 border-gm-lime pb-[3px] font-bold text-[16px] text-gm-green"
          >
            Tüm menü →
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(14px,1.6vw,24px)]">
          {FEATURED.map((d) => (
            <Link
              key={d.slug}
              href="/menu"
              className="block overflow-hidden rounded-[26px] border border-gm-ink/[0.09] bg-gm-cream transition-transform duration-250 ease-out hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-30px_rgba(13,26,17,0.55)]"
            >
              <div className="relative h-[220px]">
                <ImagePlaceholder label="Tabak fotoğrafı" src={d.image} />
                <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-gm-lime px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em]">
                  {d.tag}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[22px] font-bold tracking-[-0.03em]">
                    {d.name}
                  </h3>
                  <span className="whitespace-nowrap text-[17px] font-bold">{d.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gm-ink/62">{d.desc}</p>
                <div className="mt-3.5 text-xs font-bold uppercase tracking-[0.06em] text-gm-ink/42">
                  {d.meta}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gm-ink text-gm-bg">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(30px,4vw,70px)] px-[clamp(18px,3vw,44px)] py-[clamp(56px,7vw,120px)]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-lime">
              Motto
            </div>
            <p className="mt-4 text-balance font-serif-italic text-[clamp(34px,5.2vw,72px)] italic leading-[1.02] tracking-[-0.02em]">
              “İyi yemek acele etmez; biz sadece sizi bekletmeyiz.”
            </p>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-gm-bg/68">
              Hızlı servis ile gerçek mutfak arasında seçim yapmanız gerektiğine
              inanmıyoruz. green&amp;more, ikisini aynı tezgâhta buluşturmak için
              kuruldu.
            </p>
            <Link
              href="/story"
              className="mt-[30px] inline-block rounded-full bg-gm-lime px-[30px] py-4 font-bold text-gm-ink transition-colors hover:bg-gm-bg"
            >
              Hikâyemiz →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="relative h-[clamp(150px,20vw,250px)] overflow-hidden rounded-3xl">
              <ImagePlaceholder label="Mutfak" dark />
            </div>
            <div className="relative mt-[30px] h-[clamp(150px,20vw,250px)] overflow-hidden rounded-[24px_24px_24px_90px]">
              <ImagePlaceholder label="Tabak detayı" dark />
            </div>
            <div className="relative h-[clamp(150px,20vw,250px)] overflow-hidden rounded-[90px_24px_24px_24px]">
              <ImagePlaceholder label="Sos / malzeme" dark />
            </div>
            <div className="relative mt-[30px] h-[clamp(150px,20vw,250px)] overflow-hidden rounded-3xl">
              <ImagePlaceholder label="Mekân" dark />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] py-[clamp(56px,7vw,120px)]">
        <h2 className="mb-[clamp(24px,3vw,48px)] max-w-[16ch] font-display text-[clamp(34px,5.4vw,74px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          Neden <span className="text-gm-green">&amp;more</span>?
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-[clamp(14px,1.6vw,22px)]">
          {PILLARS.map((p) => (
            <div
              key={p.no}
              className="flex min-h-[230px] flex-col justify-between rounded-3xl border border-gm-ink/[0.09] bg-gm-cream p-[clamp(22px,2.4vw,32px)]"
            >
              <div className="font-display text-[15px] font-extrabold text-gm-orange">
                {p.no}
              </div>
              <div>
                <h3 className="mb-2.5 font-display text-[clamp(21px,2.2vw,27px)] font-bold tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-gm-ink/64">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
