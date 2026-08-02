export default function TermsPage() {
  return (
    <section className="mx-auto max-w-[860px] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(32px,5vw,70px)]">
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
        Kullanım Koşulları
      </div>
      <h1 className="mt-3 font-display text-[clamp(36px,5.6vw,64px)] font-extrabold leading-[0.94] tracking-[-0.04em]">
        Kullanım Koşulları
      </h1>
      <p className="mt-4 text-sm text-gm-ink/50">Son güncelleme: Ağustos 2026</p>
      <div className="mt-[clamp(24px,3vw,44px)] grid gap-7 text-[16px] leading-relaxed text-gm-ink/72">
        <p>
          Web sitemizi veya uygulamamızı kullanarak aşağıdaki koşulları kabul
          etmiş sayılırsın. Hizmetlerimiz Türkiye Cumhuriyeti yasalarına
          tabidir.
        </p>
        <div>
          <h2 className="mb-2 font-display text-[22px] font-bold tracking-[-0.02em] text-gm-ink">
            Siparişler
          </h2>
          <p>
            Sipariş onayı, ödeme onaylandıktan sonra gerçekleşir. Stok
            durumuna bağlı olarak bir kalem menüden geçici olarak kaldırılabilir;
            bu durumda bedeli iade edilir.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-[22px] font-bold tracking-[-0.02em] text-gm-ink">
            Club üyeliği
          </h2>
          <p>
            Club puanları devredilemez ve nakde çevrilemez. Üyelik istediğin
            zaman uygulama üzerinden sonlandırılabilir.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-[22px] font-bold tracking-[-0.02em] text-gm-ink">
            Sorumluluk sınırı
          </h2>
          <p>
            green&amp;more, menü kartında belirtilen alerjen bilgisinin
            doğruluğu için elinden geleni yapar; ciddi alerjisi olan
            müşterilerin sipariş öncesi şube ekibiyle teyit etmesini öneririz.
          </p>
        </div>
      </div>
    </section>
  );
}
