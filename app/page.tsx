import Image from "next/image";
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
      </section>

      {/* FADE IN */}
      <section className="min-h-screen flex items-center justify-center bg-white">
        <FadeIn>
          <div className="text-center space-y-4">
            <h3 className="text-2xl tracking-widest">ABOUT</h3>
            <p className="text-sm tracking-wider text-neutral-600">
              好きなものを、好きなままに。
            </p>
          </div>
        </FadeIn>
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
