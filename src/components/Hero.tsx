'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement('div');
      const size = Math.random() * 100 + 20;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 3 + 6;

      bubble.className = 'fixed pointer-events-none rounded-full bg-white/20 animate-bubble';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.bottom = '-100px';
      bubble.style.animationDuration = `${animationDuration}s`;
      bubble.style.zIndex = '1';

      document.body.appendChild(bubble);

      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      }, animationDuration * 1000);
    };

    const bubbleInterval = setInterval(createBubble, 1500);

    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 星の装飾 */}
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-twinkle" style={{ top: '10%', left: '15%', animationDelay: '0s' }} />
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-twinkle" style={{ top: '25%', left: '85%', animationDelay: '0.5s' }} />
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-twinkle" style={{ top: '60%', left: '20%', animationDelay: '1s' }} />
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-twinkle" style={{ top: '80%', left: '75%', animationDelay: '1.5s' }} />
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-twinkle" style={{ top: '35%', left: '65%', animationDelay: '0.8s' }} />
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-twinkle" style={{ top: '70%', left: '35%', animationDelay: '1.2s' }} />
        
        {/* グラデーション装飾 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float animation-delay-300" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-300/10 rounded-full blur-3xl animate-float animation-delay-500" />
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fadeInUp">
          {/* ロゴ */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="美月 MITSUKI ロゴ"
                width={150}
                height={150}
                className="rounded-full animate-glow mx-auto shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 animate-pulse" />
            </div>
          </div>

          {/* メインタイトル */}
          <div className="space-y-4 animate-fadeInUp animation-delay-200">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600">
              美月
            </h1>
            <p className="text-xl md:text-2xl text-purple-700 font-medium tracking-wider">
              MITSUKI
            </p>
          </div>

          {/* サブタイトル */}
          <div className="space-y-2 animate-fadeInUp animation-delay-300">
            <p className="text-lg md:text-xl text-purple-800 font-medium">
              ボディとハートの癒やし
            </p>
            <p className="text-base md:text-lg text-purple-600">
              大阪府泉佐野市のリラクゼーションサロン
            </p>
          </div>

          {/* サービス概要 */}
          <div className="max-w-2xl mx-auto space-y-4 animate-fadeInUp animation-delay-400">
            <p className="text-base md:text-lg text-purple-700 leading-relaxed">
              色彩セラピーともみほぐしで<br />
              あなたの心と身体に安らぎをお届けします
            </p>
          </div>

          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-500">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl btn-hover"
            >
              ご予約はこちら
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-medium rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              メニュー詳細
            </a>
          </div>
        </div>
      </div>

      {/* スクロール促進インジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center space-y-2 text-purple-600">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-purple-600 rounded-full relative">
            <div className="w-1 h-2 bg-purple-600 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;