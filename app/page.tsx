import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-screen">
      {/* 背景画像 */}
      <Image
        src="/unitiatest.jpeg"
        alt="brand visual"
        fill
        priority
        className="object-cover"
      />

      {/* 文字 */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center text-white space-y-6">
          <h2 className="text-xl tracking-widest">
            unitiatテストページ
          </h2>
          <p className="text-sm opacity-70">
            MODE BRAND
          </p>
        </div>
      </div>

      {/* 黒フィルター（読みやすさ用） */}
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
}
