import ImagePlaceholder from "@/components/ImagePlaceholder";
import { APP_FEATURES } from "@/data/site";

export default function AppPage() {
  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(28px,4vw,70px)] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(32px,5vw,70px)]">
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
          green&amp;more Club
        </div>
        <h1 className="mt-3 font-display text-[clamp(42px,7vw,104px)] font-extrabold leading-[0.9] tracking-[-0.045em]">
          Sırada değil, masada.
        </h1>
        <div className="mt-[30px] grid gap-3.5">
          {APP_FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-3.5">
              <span className="mt-[3px] block h-6 w-6 flex-none -rotate-[20deg] rounded-[50%_0_50%_50%] bg-gm-lime" />
              <div>
                <div className="text-[17px] font-bold">{f.title}</div>
                <div className="text-[15px] leading-relaxed text-gm-ink/62">{f.body}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="cursor-pointer rounded-full bg-gm-ink px-[30px] py-4 font-bold text-gm-bg">
            iOS için indir
          </span>
          <span className="cursor-pointer rounded-full border-[1.5px] border-gm-ink/25 px-[30px] py-4 font-bold text-gm-ink">
            Android için indir
          </span>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="aspect-[9/19] w-[min(300px,80vw)] rounded-[44px] bg-gm-ink p-3 shadow-[0_40px_80px_-40px_rgba(13,26,17,0.7)]">
          <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-[#e9e3d2]">
            <ImagePlaceholder label="Uygulama ekranı" />
          </div>
        </div>
      </div>
    </section>
  );
}
