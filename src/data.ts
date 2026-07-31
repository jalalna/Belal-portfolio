import type { ComponentType } from 'react';
import {
  FlaskConical,
  Factory,
  GraduationCap,
  ShieldCheck,
  Settings2,
  Lightbulb,
  Award,
  Gem,
  Layers,
  Boxes,
  TrendingUp,
  type LucideProps,
} from 'lucide-react';

export type IconType = ComponentType<LucideProps>;

export const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'خلطاتنا', href: '#blends' },
  { label: 'الإدارة', href: '#production' },
  { label: 'تواصل معنا', href: '#contact' },
];

export const stats = [
  { value: '+14', label: 'عاماً من الخبرة' },
  { value: '6', label: 'خلطات قهوة احترافية' },
  { value: '+50', label: 'مشروع وتدريب ناجح' },
  { value: '100%', label: 'التزام بمعايير الجودة' },
];

export type Service = {
  title: string;
  desc: string;
  image: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    title: 'تطوير خلطات القهوة',
    desc: 'تصميم خلطات مميزة بنكهات متوازنة تناسب كل طريقة تحضير، من الإسبريسو إلى القهوة العربية.',
    image:
      'https://images.pexels.com/photos/6086484/pexels-photo-6086484.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: FlaskConical,
  },
  {
    title: 'الإشراف على الإنتاج',
    desc: 'إشراف مباشر على خطوط التحميص والطحن لضمان جودة عالية وثبات المنتج النهائي.',
    image:
      'https://images.pexels.com/photos/4820677/pexels-photo-4820677.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Factory,
  },
  {
    title: 'التدريب وتأهيل الكوادر',
    desc: 'برامج تدريب احترافية على التحميص والطحن وإعداد القهوة وتشغيل المعدات.',
    image:
      'https://images.pexels.com/photos/4350038/pexels-photo-4350038.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: GraduationCap,
  },
  {
    title: 'إدارة الجودة',
    desc: 'أنظمة رقابة جودة دقيقة تضمن ثبات الطعم ومطابقة معايير الإنتاج العالية.',
    image:
      'https://images.pexels.com/photos/6161312/pexels-photo-6161312.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: ShieldCheck,
  },
  {
    title: 'الإدارة التشغيلية',
    desc: 'تنظيم سير العمل وإدارة الفرق ورفع الإنتاجية وتطوير الإجراءات التشغيلية.',
    image:
      'https://images.pexels.com/photos/6205626/pexels-photo-6205626.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Settings2,
  },
  {
    title: 'الاستشارات الفنية',
    desc: 'استشارات متخصصة لتأسيس وتطوير مشاريع القهوة من اختيار الموقع حتى التشغيل.',
    image:
      'https://images.pexels.com/photos/36766700/pexels-photo-36766700.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Lightbulb,
  },
];

export type Blend = {
  num: string;
  name: string;
  desc: string;
  image: string;
};

export const blends: Blend[] = [
  {
    num: '١',
    name: 'القهوة التركية',
    desc: 'خلطة غنية ذات قوام كثيف، تُحمص بعناية وتُطحن بدرجة فائقة النعومة لتمنح مذاقًا أصيلًا ورغوة مميزة.',
    image:
      'https://images.pexels.com/photos/36093806/pexels-photo-36093806.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    num: '٢',
    name: 'الإسبريسو',
    desc: 'خلطة متوازنة مصممة لاستخراج أفضل نكهات الإسبريسو بكريمة غنية وقوام احترافي.',
    image:
      'https://images.pexels.com/photos/9623369/pexels-photo-9623369.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    num: '٣',
    name: 'القهوة الأمريكية',
    desc: 'مزيج متوازن يمنح مذاقًا ناعمًا وغنيًا يناسب محبي القهوة اليومية.',
    image:
      'https://images.pexels.com/photos/7542875/pexels-photo-7542875.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    num: '٤',
    name: 'القهوة العربية',
    desc: 'خلطات عربية متنوعة تعتمد على أجود أنواع البن مع إضافات الهيل والتوابل حسب الطابع المحلي.',
    image:
      'https://images.pexels.com/photos/14941019/pexels-photo-14941019.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    num: '٥',
    name: 'القهوة الفرنسية',
    desc: 'مزيج ناعم ومتوازن يناسب القهوة بالحليب ويمنح مذاقًا كريميًا غنيًا.',
    image:
      'https://images.pexels.com/photos/872890/pexels-photo-872890.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    num: '٦',
    name: 'القهوة اليونانية',
    desc: 'تحضير تقليدي بطحن ناعم جدًا يمنح نكهة قوية وقوامًا مميزًا.',
    image:
      'https://images.pexels.com/photos/15209260/pexels-photo-15209260.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  bullets: string[];
  reverse: boolean;
  dark?: boolean;
};

export const features: Feature[] = [
  {
    id: 'production',
    eyebrow: 'إدارة الإنتاج',
    title: 'إشراف دقيق على كل مرحلة من مراحل التصنيع',
    subtitle: 'متابعة فنية كاملة لعمليات التحميص والطحن لضمان جودة وثبات المنتج.',
    image:
      'https://images.pexels.com/photos/4765838/pexels-photo-4765838.jpeg?auto=compress&cs=tinysrgb&w=1400',
    reverse: false,
    bullets: [
      'تصميم درجات التحميص المناسبة',
      'ضبط درجات الطحن',
      'مراقبة الجودة',
      'ضمان ثبات المنتج',
      'متابعة الإنتاج',
    ],
  },
  {
    id: 'training',
    eyebrow: 'التدريب وتأهيل الكوادر',
    title: 'بناء فرق عمل احترافية ترفع مستوى مشروعك',
    subtitle: 'برامج تدريب عملية داخل المصنع والمقهى لإعداد كوادر متميزة.',
    image:
      'https://images.pexels.com/photos/4350036/pexels-photo-4350036.jpeg?auto=compress&cs=tinysrgb&w=1400',
    reverse: true,
    bullets: [
      'تدريب الكوادر على التحميص والطحن وإعداد الخلطات وتشغيل المعدات',
      'تطبيق معايير الجودة',
      'تقييم الأداء',
      'اختيار الموظفين الأكفاء',
      'إعداد تقارير متابعة لكل متدرب',
    ],
  },
  {
    id: 'operations',
    eyebrow: 'الإدارة التشغيلية',
    title: 'كفاءة أعلى وإنتاجية أفضل لفريقك',
    subtitle: 'تنظيم متكامل لسير العمل يضمن انسيابية العمليات وتحقيق الأهداف.',
    image:
      'https://images.pexels.com/photos/9409745/pexels-photo-9409745.jpeg?auto=compress&cs=tinysrgb&w=1400',
    reverse: false,
    bullets: [
      'تنظيم سير العمل',
      'إدارة الفرق',
      'رفع الإنتاجية',
      'تحسين الأداء',
      'تطوير الإجراءات التشغيلية',
    ],
  },
  {
    id: 'growth',
    eyebrow: 'خطة النمو المستقبلي',
    title: 'مشاريع قهوة سريعة وعصرية تناسب السوق الحديث',
    subtitle: 'تأسيس مفاهيم Coffee Express و Drive Thru و Coffee To Go بهوية متكاملة.',
    image:
      'https://images.pexels.com/photos/18105587/pexels-photo-18105587.jpeg?auto=compress&cs=tinysrgb&w=1400',
    reverse: true,
    dark: true,
    bullets: [
      'إنشاء Coffee Express و Drive Thru و Coffee To Go',
      'تصميم الهوية التشغيلية',
      'تصميم قوائم المشروبات',
      'الوصفات القياسية',
      'تدريب الموظفين',
      'الإشراف الكامل على التشغيل',
    ],
  },
];

export type Why = {
  title: string;
  desc: string;
  icon: IconType;
};

export const whyChooseUs: Why[] = [
  { title: 'خبرة تتجاوز 14 عاماً', desc: 'مسيرة طويلة في صناعة القهوة وإدارة المشاريع.', icon: Award },
  { title: 'جودة عالية', desc: 'معايير صارمة تضمن ثبات الطعم والمذاق.', icon: Gem },
  { title: 'تدريب احترافي', desc: 'برامج تدريب متكاملة لبناء كوادر متميزة.', icon: GraduationCap },
  { title: 'إدارة تشغيلية متكاملة', desc: 'تنظيم وإشراف كامل على سير العمل.', icon: Layers },
  { title: 'حلول شاملة', desc: 'من تأسيس المشروع حتى التشغيل اليومي.', icon: Boxes },
  { title: 'تطوير مستمر', desc: 'مواكبة أحدث أساليب صناعة القهوة.', icon: TrendingUp },
];

export const contact = {
  phone: '+963 951 754 436',
  phoneHref: 'tel:+963 951 754 436',
  whatsapp: '+90 53 94 70 06 32',
  whatsappHref: 'https://wa.me/905394700632',
  email: 'Bilalverama@gmail.com',
  emailHref: 'mailto:Bilalverama@gmail.com',
  location: '.',
};
