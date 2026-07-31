import { ArrowLeft } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { services } from '@/data';

export default function Services() {
  return (
    <section id="services" className="relative bg-cream-200/60 py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="خدماتنا"
          title="حلول متكاملة لمشاريع القهوة"
          subtitle="نقدم خدمات احترافية تغطي كل مراحل صناعة القهوة، من تطوير الخلطة حتى إدارة التشغيل اليومي."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="reveal group overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
                data-delay={(i % 3) * 100}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/70 to-transparent" />
                  <span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-2xl bg-gold-400 text-coffee-900 shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-coffee-800">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 transition-colors hover:text-gold-500"
                  >
                    اعرف المزيد
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
