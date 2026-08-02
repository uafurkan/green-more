import { ALLERGENS, DISHES, TABS } from "@/data/site";

export default function AllergensPage() {
  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pt-[clamp(32px,5vw,70px)]">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
          Alerjen rehberi
        </div>
        <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(44px,8vw,120px)] font-extrabold leading-[0.9] tracking-[-0.045em]">
          Tahmine yer yok.
        </h1>
        <p className="mt-5 max-w-[58ch] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-gm-ink/70">
          Her tabağın malzemesi kartında yazılıdır. Aşağıda kategori bazında olası
          alerjenleri listeledik; belirtilmeyen tabaklarda bilinen ana alerjen
          bulunmuyor. Şüpheli bir durumda şubedeki ekibimize danışabilirsin.
        </p>
      </section>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(30px,4vw,56px)]">
        {TABS.map((t) => (
          <div key={t.key} className="mb-[clamp(28px,3.4vw,52px)]">
            <h2 className="mb-3.5 font-display text-[clamp(22px,2.6vw,32px)] font-bold tracking-[-0.03em]">
              {t.label}
            </h2>
            <div className="overflow-hidden rounded-3xl border border-gm-ink/[0.09]">
              {(DISHES[t.key] ?? []).map((d, i) => {
                const allergens = ALLERGENS[d.slug] ?? [];
                return (
                  <div
                    key={d.slug}
                    className={`flex flex-wrap items-center justify-between gap-3 px-[clamp(18px,2vw,28px)] py-4 ${
                      i > 0 ? "border-t border-gm-ink/[0.09]" : ""
                    }`}
                  >
                    <span className="font-semibold">{d.name}</span>
                    {allergens.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {allergens.map((a) => (
                          <span
                            key={a}
                            className="rounded-full bg-gm-lime px-3 py-1.5 text-[12px] font-bold"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-[13px] font-semibold text-gm-ink/40">
                        Bilinen ana alerjen yok
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
