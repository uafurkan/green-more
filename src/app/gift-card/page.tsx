import Link from "next/link";

const AMOUNTS = ["₺250", "₺500", "₺750", "₺1000"];

export default function GiftCardPage() {
  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pt-[clamp(32px,5vw,70px)]">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
          Hediye kartı
        </div>
        <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(44px,8vw,124px)] font-extrabold leading-[0.88] tracking-[-0.045em]">
          İyi yemeği hediye et.
        </h1>
        <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-gm-ink/70">
          Dijital hediye kartı saniyeler içinde e-postayla ulaşır, tüm şubelerde
          ve uygulamada geçerlidir, son kullanma tarihi yoktur.
        </p>
      </section>
      <section className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(20px,3vw,44px)] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(30px,4vw,56px)]">
        <div className="rounded-[30px] bg-gm-ink p-[clamp(26px,3vw,44px)] text-gm-bg">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-lime">
            Bir tutar seç
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {AMOUNTS.map((a) => (
              <span
                key={a}
                className="rounded-full border border-gm-bg/25 px-5 py-3 font-display text-[19px] font-extrabold tracking-[-0.02em]"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-gm-bg/68">
            Özel bir tutar mı istiyorsun? İletişim sayfasından bize yaz, birlikte
            ayarlayalım.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-gm-lime px-[30px] py-4 font-bold text-gm-ink transition-colors hover:bg-gm-bg"
          >
            Hediye kartı al →
          </Link>
        </div>
        <div className="grid gap-3.5">
          {[
            { title: "Anında teslim", body: "Alıcının e-posta adresine dakikalar içinde, istersen özel bir notla birlikte ulaşır." },
            { title: "Her şubede geçerli", body: "Tüm green&more şubelerinde ve uygulama üzerinden sipariş verirken kullanılabilir." },
            { title: "Süresi dolmaz", body: "Bakiye tükenene kadar geçerliliğini korur, ek ücret ya da tarih baskısı yoktur." },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-gm-ink/[0.09] bg-gm-cream p-[clamp(20px,2.2vw,28px)]"
            >
              <h3 className="mb-2 font-display text-[19px] font-bold tracking-[-0.02em]">
                {f.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-gm-ink/62">{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
