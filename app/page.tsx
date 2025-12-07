import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import Concept from '@/src/components/Concept';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Concept />
      
      {/* 開発中メッセージ */}
      <section className="section-padding bg-purple-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">
            開発進行中
          </h2>
          <p className="text-purple-700 text-lg">
            Services、Therapist、Access、Contact、Footerコンポーネントを順次追加中です。<br />
            基本構造とレイアウトが完成しました。
          </p>
        </div>
      </section>
    </div>
  );
}