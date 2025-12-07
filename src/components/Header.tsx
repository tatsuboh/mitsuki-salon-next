'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'concept', label: 'コンセプト' },
    { id: 'services', label: 'サービス' },
    { id: 'therapist', label: 'セラピスト' },
    { id: 'access', label: 'アクセス' },
    { id: 'contact', label: '予約・問い合わせ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* ロゴ */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="美月 MITSUKI ロゴ"
                width={40}
                height={40}
                className="rounded-full animate-glow"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-purple-900">
                美月
              </h1>
              <p className="text-xs text-purple-600 font-medium">MITSUKI</p>
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-purple-700 hover:text-purple-900 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* モバイルハンバーガーメニュー */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-purple-700 hover:text-purple-900 transition-colors duration-200"
            aria-label="メニューを開く"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? 'max-h-64 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-purple-100">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 text-purple-700 hover:text-purple-900 font-medium transition-all duration-200 animate-fadeInUp animation-delay-${
                  index * 100 + 100
                }`}
                style={{
                  animationDelay: `${index * 0.1 + 0.1}s`,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;