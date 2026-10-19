import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'پاژن آفرود | طراحی، ساخت و تجهیز خودروهای آفرود و قطعات سفارشی',
  description: 'مرکز تخصصی ساخت خودروهای آفرود، باگی، قطعات سفارشی با پرینت سه‌بعدی ابعاد بزرگ، صافکاری تخصصی و نقاشی خودرو.',
  keywords: ['پاژن آفرود', 'ساخت خودرو آفرود', 'پرینت سه بعدی قطعات خودرو', 'صافکاری تخصصی', 'نقاشی متالیک', 'تجهیز خودرو دودیفرانسیل', 'ساخت باگی'],
}

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* هدر */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center font-extrabold text-xl shadow-lg shadow-amber-500/20">
              P
            </div>
            <h1 className="text-xl font-black tracking-wide text-white">پاژن آفرود</h1>
          </div>
          <a href="#contact" className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-xl font-bold text-sm transition shadow-lg shadow-amber-500/10">
            سفارش پروژه
          </a>
        </div>
      </header>

      {/* بنر اصلی */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
          مرکز تخصصی ساخت و طراحی مهندسی خودرو
        </span>
        <h2 className="text-3xl md:text-5xl font-black mt-8 leading-tight">
          طراحی، ساخت و تجهیز تخصصی <br />
          <span className="text-amber-500">خودروهای آفرود و قطعات سفارشی</span>
        </h2>
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          طراحی صنعتی و تولید قطعات بدنه با پرینت سه‌بعدی ابعاد بزرگ، صافکاری و موج‌گیری دقیق، نقاشی متالیک و ساخت کیت‌های اختصاصی آفرود.
        </p>
      </section>

      {/* بخش خدمات تخصصی */}
      <section className="border-t border-slate-800/80 bg-slate-900/40 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-black text-center mb-12 text-slate-200">حوزه‌های فعالیت و خدمات</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
                🖨️
              </div>
              <h4 className="text-lg font-bold mb-3 text-white">پرینت ۳بعدی و قطعه‌سازی</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                طراحی و ساخت قطعات نایاب و سفارشی بدنه و دکوراسیون خودرو با پرینترهای FDM ابعاد بزرگ و مدلسازی صنعتی.
              </p>
            </div>

            <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
                ✨
              </div>
              <h4 className="text-lg font-bold mb-3 text-white">صافکاری و نقاشی تخصصی</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                موج‌گیری دقیق بدنه، بازسازی ساختاری، نقاشی چندمرحله‌ای اکریلیک و متالیک با کیلر و پولیش حرفه‌ای.
              </p>
            </div>

            <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
                🛠️
              </div>
              <h4 className="text-lg font-bold mb-3 text-white">ساخت خودروهای سفارشی</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                طراحی و اجرای پروژه‌های ساخت باگی، خودروهای دودیفرانسیل، کیت‌های بدنه اختصاصی و انتقال قدرت.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* تماس و فوتر */}
      <footer id="contact" className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-black mb-4 text-white">مشاوره و ثبت سفارش</h3>
          <p className="text-slate-400 text-sm mb-6">برای بررسی پروژه‌ها و سفارش قطعات سفارشی با ما در ارتباط باشید.</p>
          <div className="inline-block bg-slate-900 border border-slate-800 rounded-2xl px-8 py-4 mb-8">
            <span className="text-xs text-slate-500 block mb-1">وب‌سایت رسمی</span>
            <span className="text-amber-500 font-bold text-lg dir-ltr">paazhen-offroad.netlify.app</span>
          </div>
          <p className="text-xs text-slate-600">
            © ۲۰۲۶ پاژن آفرود - کلیه حقوق محفوظ است.
          </p>
        </div>
      </footer>
    </div>
  );
}
