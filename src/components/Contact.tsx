import { Phone, Mail, MessageCircle, Coffee} from 'lucide-react';
import { contact } from '@/data';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-coffee-900 py-24 lg:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/19162213/pexels-photo-19162213.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-coffee-900/60" />
      </div>

      <div className="container-px relative z-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-gold-300">
            <span className="h-px w-6 bg-gold-400" />
            تواصل معنا
            <span className="h-px w-6 bg-gold-400" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            جاهزون للتعاون على مشروعك
            <span className="block text-gold-400">القادم في صناعة القهوة</span>
          </h2>
          <p className="mt-4 text-lg text-white/75">
            تواصل معنا اليوم وابدأ رحلتك نحو مشروع قهوة ناجح ومتميز.
          </p>
        </div>

        {/* Contact cards */}
        <div className="reveal mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3" data-delay="100">
          <a
            href={contact.phoneHref}
            className="group flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/10"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400 text-coffee-900 transition-transform group-hover:scale-110">
              <Phone className="h-6 w-6" />
            </span>
            <div>
              <div className="text-sm text-white/60">اتصل بنا</div>
              <div className="mt-1 font-bold text-white" dir="ltr">{contact.phone}</div>
            </div>
          </a>

          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/10"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400 text-coffee-900 transition-transform group-hover:scale-110">
              <MessageCircle className="h-6 w-6" />
            </span>
            <div>
              <div className="text-sm text-white/60">واتساب</div>
              <div className="mt-1 font-bold text-white" dir="ltr">{contact.whatsapp}</div>
            </div>
          </a>

          <a
            href={contact.emailHref}
            className="group flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/10"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400 text-coffee-900 transition-transform group-hover:scale-110">
              <Mail className="h-6 w-6" />
            </span>
            <div>
              <div className="text-sm text-white/60">البريد الإلكتروني</div>
              <div className="mt-1 font-bold text-white" dir="ltr">{contact.email}</div>
            </div>
          </a>
        </div>

        {/* CTA */}
        <div className="reveal mt-10 flex flex-col items-center gap-4" data-delay="200">
         
          
        </div>
      </div>

      {/* Footer bar */}
      <footer className="relative z-10 border-t border-white/10 bg-coffee-950/40">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-400 text-coffee-900">
              <Coffee className="h-4 w-4" />
            </span>
            <span className="font-extrabold"> بلال النابلسي</span>
          </div>

          

          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </footer>
    </section>
  );
}
