import { ArrowLeft, Coffee } from 'lucide-react';
import { stats } from '@/data';
import { useParallax } from '@/hooks';

export default function Hero() {
  const bgRef = useParallax<HTMLDivElement>(-0.2);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 -top-[10%] h-[120%]">
        <img
          src="https://images.pexels.com/photos/209476/pexels-photo-209476.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="حبوب قهوة محمصة"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-coffee-950/90 via-coffee-900/75 to-coffee-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/95 via-transparent to-coffee-950/60" />
      </div>

      {/* Content */}
      <div className="container-px relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-4 py-2 text-sm font-semibold text-gold-300 backdrop-blur">
            <Coffee className="h-4 w-4" />
            <span>خبرة تمتد لأكثر من 14 عاماً</span>
          </div>

          <h1 className="reveal text-shadow-lg text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-6xl" data-delay="100">
            خبير في صناعة القهوة
            <br />
            <span className="text-gold-400">وإدارة المشاريع </span>
          </h1>

          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl" data-delay="200">
            حلول احترافية في تطوير الخلطات، التحميص، الطحن، تدريب الكوادر، والإدارة
            التشغيلية لمشاريع القهوة.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4" data-delay="300">
            <a href="#contact" className="btn-gold">
              ابدأ مشروعك معنا
              <ArrowLeft className="h-5 w-5" />
            </a>
            <a href="#contact" className="btn-outline">
              تواصل معنا
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4" data-delay="400">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur-md transition-transform hover:-translate-y-1"
            >
              <div className="text-3xl font-extrabold text-gold-400 sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex">
        <span className="text-xs tracking-widest">اكتشف المزيد</span>
        <span className="h-10 w-6 rounded-full border border-white/40 p-1">
          <span className="block h-2 w-full rounded-full bg-gold-400" />
        </span>
      </div>
    </section>
  );
}
