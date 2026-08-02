export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-[860px] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(32px,5vw,70px)]">
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
        Gizlilik
      </div>
      <h1 className="mt-3 font-display text-[clamp(36px,5.6vw,64px)] font-extrabold leading-[0.94] tracking-[-0.04em]">
        Gizlilik Politikası
      </h1>
      <p className="mt-4 text-sm text-gm-ink/50">Son güncelleme: Ağustos 2026</p>
      <div className="mt-[clamp(24px,3vw,44px)] grid gap-7 text-[16px] leading-relaxed text-gm-ink/72">
        <p>
          green&amp;more olarak, uygulama ve web sitemiz üzerinden topladığımız
          kişisel verileri yalnızca sipariş, teslimat ve hesap yönetimi
          amacıyla işleriz. Verilerini açık rızan olmadan üçüncü taraflarla
          pazarlama amacıyla paylaşmayız.
        </p>
        <div>
          <h2 className="mb-2 font-display text-[22px] font-bold tracking-[-0.02em] text-gm-ink">
            Topladığımız veriler
          </h2>
          <p>
            Ad, iletişim bilgileri, sipariş geçmişi, ödeme yöntemi bilgisi
            (kart numarası hariç) ve uygulama kullanım verileri; hizmet
            kalitesini artırmak ve yasal yükümlülükleri yerine getirmek
            amacıyla saklanır.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-[22px] font-bold tracking-[-0.02em] text-gm-ink">
            Haklarının
          </h2>
          <p>
            Verilerine erişme, düzeltme, silme ve işlenmesine itiraz etme
            hakkına sahipsin. Taleplerini merhaba@greenandmore.co adresine
            iletebilirsin.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-[22px] font-bold tracking-[-0.02em] text-gm-ink">
            Veri güvenliği
          </h2>
          <p>
            Tüm veriler şifreli bağlantılar üzerinden iletilir ve yetkisiz
            erişime karşı endüstri standardı güvenlik önlemleriyle korunur.
          </p>
        </div>
      </div>
    </section>
  );
}
