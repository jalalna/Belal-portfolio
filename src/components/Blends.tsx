import SectionHeading from './SectionHeading';
import { blends } from '@/data';

export default function Blends() {
  return (
    <section id="blends" className="relative py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="خلطاتنا"
          title="خلطات قهوة احترافية لكل الأذواق"
          subtitle="مجموعة خلطة مصممة بعناية لتناسب كل طرق التحضير، بجودة ثابتة ونكهات مميزة."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {blends.map((b, i) => (
            <article
              key={b.name}
              className="reveal group relative overflow-hidden rounded-3xl shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
              data-delay={(i % 3) * 100}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={b.image}
                  alt={b.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/90 via-coffee-900/30 to-transparent" />

                {/* Number badge */}
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-gold-400/50 bg-coffee-900/50 font-extrabold text-gold-400 backdrop-blur">
                  {b.num}
                </span>
              </div>

              {/* Body */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-extrabold text-white">{b.name}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {b.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
