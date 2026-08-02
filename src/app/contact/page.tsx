import { CONTACTS } from "@/data/site";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(32px,5vw,70px)]">
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
        İletişim
      </div>
      <h1 className="mb-[clamp(30px,4vw,56px)] mt-3 font-display text-[clamp(44px,8vw,120px)] font-extrabold leading-[0.88] tracking-[-0.045em]">
        Konuşalım.
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(16px,2vw,26px)]">
        {CONTACTS.map((c) => (
          <div
            key={c.title}
            className="rounded-3xl border border-gm-ink/[0.09] bg-gm-cream p-[clamp(22px,2.4vw,32px)]"
          >
            <h3 className="mb-2 font-display text-[22px] font-bold tracking-[-0.03em]">
              {c.title}
            </h3>
            <p className="mb-3.5 text-[15px] leading-relaxed text-gm-ink/62">{c.body}</p>
            <div className="font-bold text-gm-green">{c.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
