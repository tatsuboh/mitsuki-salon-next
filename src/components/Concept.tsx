const Concept = () => {
  return (
    <section id="concept" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* セクションタイトル */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900">
              コンセプト
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
            <p className="text-xl md:text-2xl text-purple-700 font-medium">
              ボディとハートの癒やし
            </p>
          </div>

          {/* メインコンセプト */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 card-shadow">
              <p className="text-lg md:text-xl text-purple-800 leading-relaxed font-medium">
                現代社会で疲れた心と体に、<br className="hidden sm:inline" />
                真の癒やしと安らぎをお届けします
              </p>
            </div>

            {/* 理念 */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {/* ボディケア */}
              <div className="bg-white rounded-2xl p-8 card-shadow border border-purple-100">
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900">
                    ボディケア
                  </h3>
                  <p className="text-purple-700 leading-relaxed">
                    熟練の技術による丁寧なもみほぐしで、日々の疲れやこりを解放。
                    体の内側から健康と美しさを引き出します。
                  </p>
                </div>
              </div>

              {/* ハートケア */}
              <div className="bg-white rounded-2xl p-8 card-shadow border border-pink-100">
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900">
                    ハートケア
                  </h3>
                  <p className="text-purple-700 leading-relaxed">
                    色彩セラピーとタロットを通じて内面と向き合い、
                    心の声に耳を傾け、新しい気づきと癒やしを見つけます。
                  </p>
                </div>
              </div>
            </div>

            {/* 特別な体験 */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  美月コースで体験する特別な時間
                </h3>
                <p className="text-lg md:text-xl leading-relaxed">
                  ボディとハートの両方のケアを組み合わせることで、
                  表面的な癒やしではなく、あなた本来の輝きを取り戻します。
                  心身が調和した、本当の意味での「癒やし」をご体験ください。
                </p>
              </div>
            </div>

            {/* 想い */}
            <div className="mt-16">
              <blockquote className="text-center">
                <p className="text-lg md:text-xl text-purple-800 leading-relaxed italic">
                  「忙しい毎日の中で見失いがちな、あなた自身の声を聞く時間。<br className="hidden sm:inline" />
                  美月で過ごすひとときが、新しい明日への扉となりますように。」
                </p>
                <footer className="mt-6 text-purple-600 font-medium">
                  — 美月サロン一同
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;