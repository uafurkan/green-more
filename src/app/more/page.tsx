import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { SERVICES } from "@/data/site";

const variantClasses: Record<(typeof SERVICES)[number]["variant"], string> = {
  cream: "bg-gm-cream border border-gm-ink/[0.09] text-gm-ink",
  ink: "bg-gm-ink text-gm-bg",
  lime: "bg-gm-lime border border-gm-ink/[0.09] text-gm-ink",
  green: "bg-gm-green text-gm-bg",
};

export default function MorePage() {
  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-[clamp(18px,3vw,44px)] pt-[clamp(32px,5vw,70px)]">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-gm-orange">
          &amp;more
        </div>
        <h1 className="mt-3 max-w-[14ch] font-display text-[clamp(44px,8vw,124px)] font-extrabold leading-[0.88] tracking-[-0.045em]">
          Yemekten sonrası.
        </h1>
        <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.5vw,20px)] leading-relaxed text-gm-ink/70">
          İsimdeki &quot;more&quot; bir süs değil: kurumsal servis, atölyeler,
          market rafı ve topluluk programı.
        </p>
      </section>
      <section className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[clamp(14px,1.8vw,24px)] px-[clamp(18px,3vw,44px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(30px,4vw,60px)]">
        {SERVICES.map((sv) => (
          <div
            key={sv.slug}
            className={`rounded-[26px] p-[clamp(22px,2.4vw,32px)] ${variantClasses[sv.variant]}`}
          >
            <div className="relative mb-5 h-[150px] overflow-hidden rounded-[20px] bg-black/[0.07]">
              <ImagePlaceholder label="Görsel" src={sv.image} />
            </div>
            <h3 className="mb-2.5 font-display text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.03em]">
              {sv.title}
            </h3>
            <p className="mb-[18px] text-[15px] leading-relaxed opacity-72">{sv.body}</p>
            <Link
              href="/contact"
              className="border-b-2 border-current pb-0.5 text-[15px] font-bold"
            >
              {sv.cta}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
