import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-purple-950 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="美月ロゴ"
              width={48}
              height={48}
              className="rounded-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-lg text-pink-100 tracking-wider">美月</h1>
              <p className="text-xs text-purple-400">ボディとハートの癒し</p>
            </div>
          </div>

          <div className="flex gap-8 text-purple-300 text-sm">
            <a href="#home" className="hover:text-pink-300 transition-colors">
              ホーム
            </a>
            <a href="#services" className="hover:text-pink-300 transition-colors">
              メニュー
            </a>
            <a href="#therapist" className="hover:text-pink-300 transition-colors">
              セラピスト
            </a>
            <a href="#access" className="hover:text-pink-300 transition-colors">
              アクセス
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-800 text-center">
          <p className="text-purple-500 text-sm">
            © 2024 美月 - ボディとハートの癒し. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}