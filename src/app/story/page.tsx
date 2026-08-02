import { STATS, VISION } from "@/data/site";

export default function StoryPage() {
  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pb-[clamp(40px,5vw,80px)] pt-[clamp(32px,5vw,70px)]">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
          Hikâye · Vizyon
        </div>
        <h1 className="mt-3 max-w-[15ch] font-display text-[clamp(44px,8vw,124px)] font-extrabold leading-[0.88] tracking-[-0.045em]">
          Bir öğün, bir günü değiştirir.
        </h1>
        <div className="mt-[clamp(28px,3vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(24px,3vw,64px)]">
          <p className="text-[clamp(17px,1.6vw,21px)] leading-relaxed text-gm-ink/72">
            green&amp;more, &quot;sağlıklı yemek&quot; sözünün bir fedakârlık gibi
            anlatılmasından sıkılmış bir ekip tarafından kuruldu. Bize göre iyi
            malzeme cezalandırmaz, ödüllendirir: doğru pişirme, doğru asit, doğru
            çıtırlık.
          </p>
          <p className="text-[clamp(17px,1.6vw,21px)] leading-relaxed text-gm-ink/72">
            Bu yüzden menümüzü kalori tablolarıyla değil, tatla kurduk. Sonuç: hızlı
            serviste restoran ciddiyeti, restoranda ise gündelik bir rahatlık.
          </p>
        </div>
      </section>

      <section className="bg-gm-green text-gm-bg">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(22px,3vw,44px)] px-[clamp(18px,3vw,44px)] py-[clamp(48px,6vw,110px)]">
          {VISION.map((v) => (
            <div key={v.kicker} className="border-t-2 border-gm-lime/50 pt-5">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-lime">
                {v.kicker}
              </div>
              <h3 className="mb-2.5 mt-3 font-display text-[clamp(24px,2.8vw,36px)] font-bold tracking-[-0.03em]">
                {v.title}
              </h3>
              <p className="text-base leading-relaxed text-gm-bg/72">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] py-[clamp(48px,6vw,110px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(18px,2vw,32px)]">
          {STATS.map((st) => (
            <div
              key={st.label}
              className="rounded-3xl border border-gm-ink/[0.09] bg-gm-cream p-[clamp(22px,2.4vw,32px)]"
            >
              <div className="font-display text-[clamp(38px,5vw,64px)] font-extrabold leading-none tracking-[-0.04em] text-gm-green">
                {st.n}
              </div>
              <div className="mt-2.5 text-[15px] leading-snug text-gm-ink/62">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
