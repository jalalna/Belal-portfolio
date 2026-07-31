import { Check } from 'lucide-react';
import type { Feature } from '@/data';

export default function FeatureRow({ feature }: { feature: Feature }) {
  const { eyebrow, title, subtitle, image, bullets, reverse, dark, id } = feature;

  return (
    <section id={id} className={`scroll-mt-20 py-20 lg:py-28 ${dark ? 'bg-coffee-900' : ''}`}>
      <div className="container-px grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div
          className={`reveal ${reverse ? 'reveal-from-left lg:order-1' : 'reveal-from-right lg:order-2'} relative`}
        >
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src={image}
              alt={title}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-full bg-gold-400/20" />
        </div>

        {/* Copy */}
        <div
          className={`reveal ${reverse ? 'reveal-from-right lg:order-2' : 'reveal-from-left lg:order-1'}`}
        >
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
            <span className="h-px w-6 bg-gold-400" />
            {eyebrow}
          </div>
          <h2
            className={`text-3xl font-extrabold leading-tight sm:text-4xl ${
              dark ? 'text-white' : 'text-coffee-800'
            }`}
          >
            {title}
          </h2>
          <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-muted'}`}>
            {subtitle}
          </p>

          <ul className="mt-7 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-400 text-coffee-900">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className={`font-medium ${dark ? 'text-white/90' : 'text-coffee-700'}`}>
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
