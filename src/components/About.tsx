import { Check } from 'lucide-react';

const points = ['تصميم الخلطات', 'التحميص والطحن', 'تدريب الكوادر', 'إدارة العمليات'];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="reveal reveal-from-right relative">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src="https://images.pexels.com/photos/4820676/pexels-photo-4820676.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="تحميص حبوب القهوة"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white p-5 shadow-card sm:block lg:-left-8">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gold-400 text-coffee-900">
                <span className="text-lg font-extrabold">14+</span>
              </div>
              <div>
                <div className="font-bold text-coffee-800">عاماً من الخبرة</div>
                <div className="text-sm text-muted">في صناعة القهوة</div>
              </div>
            </div>
          </div>
          {/* Decorative ring */}
          <div className="absolute -top-5 -right-5 -z-10 h-32 w-32 rounded-full border-2 border-gold-400/30" />
        </div>

        {/* Copy */}
        <div className="reveal reveal-from-left">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
            <span className="h-px w-6 bg-gold-400" />
            من نحن
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-coffee-800 sm:text-4xl">
            خبرة عميقة في صناعة القهوة
            <span className="block text-gold-500">وإدارة المشاريع</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            نقدم خبرة متخصصة تمتد لأكثر من 14 عاماً في تطوير وإدارة مشاريع القهوة، تشمل
            تصميم الخلطات، الإشراف على التحميص والطحن، تدريب الكوادر، وإدارة العمليات
            التشغيلية وفق أعلى معايير الجودة.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2.5 rounded-xl bg-white p-3.5 shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-400 text-coffee-900">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-coffee-800">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
