import SectionHeading from './SectionHeading';
import { whyChooseUs } from '@/data';

export default function WhyChooseUs() {
  return (
    <section className="relative bg-cream-200/60 py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="لماذا نحن"
          title="لماذا تختار خبرتنا لمشروعك"
          subtitle="نجمع بين الخبرة العملية والمعايير العالمية لنقدم حلولاً تليق بمشاريع القهوة المتميزة."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className="reveal group rounded-3xl bg-white p-7 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
                data-delay={(i % 3) * 100}
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-coffee-50 text-gold-600 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-coffee-900">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-coffee-800">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
