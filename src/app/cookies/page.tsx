export default function CookiesPage() {
  return (
    <section className="mx-auto max-w-[860px] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(32px,5vw,70px)]">
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
        Çerezler
      </div>
      <h1 className="mt-3 font-display text-[clamp(36px,5.6vw,64px)] font-extrabold leading-[0.94] tracking-[-0.04em]">
        Çerez Politikası
      </h1>
      <p className="mt-4 text-sm text-gm-ink/50">Son güncelleme: Ağustos 2026</p>
      <div className="mt-[clamp(24px,3vw,44px)] grid gap-7 text-[16px] leading-relaxed text-gm-ink/72">
        <p>
          Sitemiz, deneyimini iyileştirmek için çerezler kullanır. Bu sayfada
          hangi çerezleri neden kullandığımızı bulabilirsin.
        </p>
        <div>
          <h2 className="mb-2 font-display text-[22px] font-bold tracking-[-0.02em] text-gm-ink">
            Zorunlu çerezler
          </h2>
          <p>
            Oturum açma, sepet bilgisi ve temel site işlevleri için
            gereklidir; devre dışı bırakılamaz.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-[22px] font-bold tracking-[-0.02em] text-gm-ink">
            Performans çerezleri
          </h2>
          <p>
            Hangi sayfaların ziyaret edildiğini anonim olarak ölçerek site
            performansını iyileştirmemize yardımcı olur.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-[22px] font-bold tracking-[-0.02em] text-gm-ink">
            Tercih yönetimi
          </h2>
          <p>
            Tarayıcı ayarlarından çerezleri istediğin zaman silebilir ya da
            engelleyebilirsin; bu, sitenin bazı bölümlerinin düzgün
            çalışmamasına yol açabilir.
          </p>
        </div>
      </div>
    </section>
  );
}
