export default function ImagePlaceholder({
  label,
  dark = false,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 grid place-items-center ${
        dark
          ? "bg-gm-dark"
          : "bg-[radial-gradient(circle_at_50%_46%,#ffffff_0_27%,#e4dcc6_27.5%_45%,#f0ebdc_45.5%)]"
      }`}
    >
      <span
        className={`px-4 text-center text-xs font-semibold uppercase tracking-wide ${
          dark ? "text-gm-bg/40" : "text-gm-ink/40"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
