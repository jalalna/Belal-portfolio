type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: Props) {
  return (
    <div className={`reveal max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] ${
            light ? 'text-gold-300' : 'text-gold-500'
          }`}
        >
          <span className="h-px w-6 bg-gold-400" />
          {eyebrow}
          <span className="h-px w-6 bg-gold-400" />
        </div>
      )}
      <h2
        className={`text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-coffee-800'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/75' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
