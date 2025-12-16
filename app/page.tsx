import Image from "next/image";
import Header from "./components/Header";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen">
        <Image
          src="/unitia_logo.jpg"
          alt="brand visual"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="px-6 sm:px-0 text-center text-white space-y-5 sm:space-y-6">
            <h2 className="text-base sm:text-xl tracking-[0.25em] font-light">
              unitiaテストページ
            </h2>
            <p className="text-xs sm:text-sm tracking-widest opacity-70 leading-6 sm:leading-7">
              神奈川発ファッションメディア
              〜好きを発信し共有できる空間を〜
            </p>
          </div>
        </div>
      </section>

      {/* FADE IN */}
      <section className="min-h-screen flex items-center justify-center bg-white">
        <FadeIn>
          <div className="text-center space-y-4 px-6">
            <h3 className="text-lg sm:text-2xl tracking-widest">ABOUT</h3>
            <p className="text-sm text-neutral-600 tracking-wider leading-7">
              神奈川発ファッションメディア
              〜好きを発信し共有できる空間を〜
            </p>
          </div>
        </FadeIn>
      </section>
      {/* THIRD : ACTIVITY */}
      <section className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <FadeIn>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-6">
            {/* IMAGE */}
            <div className="relative w-full h-[300px] sm:h-[420px]">
              <Image
                src="/Unitia-threedisplay-event.JPG"
                alt="unitia visual"
                fill
                className="object-cover"
              />
            </div>


            {/* TEXT */}
            <div className="flex flex-col justify-center space-y-6">
              <h4 className="text-lg tracking-widest">Event</h4>
              <p className="text-sm leading-7 text-neutral-700 tracking-wider">
                ファッション・カルチャー・思想。
                <br />
                ジャンルに縛られず、
                <br />
                「好き」を起点にした表現を記録していく。
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center space-y-12">

          

        {/* Links */}
        <div className="space-y-6 text-2xl md:text-3xl tracking-widest font-light">
          {/* Copy */}
          <p className="text-xs tracking-widest opacity-60">
            Please Check
          </p>
          <a
            href="https://www.instagram.com/atrs_unitia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-60 transition"
          >
            Instagram
          </a>

          <a
            href="mailto:contact@unitia.jp"
            className="block hover:opacity-60 transition"
          >
            Contact
          </a>
        </div>

      </div>
    </section>
    </>
  );
}




/*import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-screen">*/
      {/* 背景画像 */}
      /*<Image
        src="/unitia_logo.jpg"
        alt="brand visual"
        fill
        priority
        className="object-cover"
      />*/

      {/* 文字 */}
      /*<div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center text-white space-y-6">
          <h2 className="text-xl tracking-[0.3em] font-light">
            unitiaテストページ
          </h2>
          <p className="text-sm tracking-widest opacity-70">
            神奈川発ファッションメディア
            〜好きを発信し共有できる空間を〜
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/40" />
    </section>

    
  );
}*/
