export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm tracking-widest mb-2">MENU</p>
          <h3 className="text-3xl md:text-4xl text-purple-900 tracking-wider mb-4">
            メニュー
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* 美月コース */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 right-12 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <p className="text-pink-200 text-sm tracking-widest mb-2">
                  ✨ RECOMMEND ✨
                </p>
                <h4 className="text-3xl md:text-4xl text-white mb-4 tracking-wide">
                  美月コース
                </h4>
                <p className="text-purple-100 max-w-2xl mx-auto">
                  色彩セラピーで心を整え　もみほぐしで身体に活力を
                  <br />
                  心と身体に癒しをもたらします
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <p className="text-3xl text-white font-medium mb-2">40分</p>
                  <p className="text-4xl text-white font-bold mb-3">¥4,500</p>
                  <p className="text-pink-200 text-sm">
                    体験したい方、初めての方に
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <p className="text-3xl text-white font-medium mb-2">60分</p>
                  <p className="text-4xl text-white font-bold mb-3">¥5,500</p>
                  <p className="text-pink-200 text-sm">
                    気軽に心身を整えたい方に
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <p className="text-3xl text-white font-medium mb-2">90分</p>
                  <p className="text-4xl text-white font-bold mb-3">¥8,000</p>
                  <p className="text-pink-200 text-sm">
                    心身ともに疲れを感じている方に
                  </p>
                </div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-pink-100">
                  継続して受けていただくことで心身の調和を感じられます
                </p>
                <p className="text-white font-medium bg-white/20 inline-block px-6 py-2 rounded-full">
                  🎁 ペアで受けていただくと お一人様500円引き
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ボディ & ハートメニューグリッド */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* ボディメニュー */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl overflow-hidden border border-purple-100">
            <div className="h-48 bg-gradient-to-br from-purple-400 via-fuchsia-400 to-pink-400 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-3xl font-medium tracking-wider">
                    ボディメニュー
                  </p>
                  <p className="text-white/80 text-sm tracking-widest mt-2">
                    BODY CARE
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="mb-6 pb-6 border-b border-purple-200">
                <h5 className="text-xl text-purple-900 mb-2">ボディ</h5>
                <p className="text-purple-600 text-sm mb-3">
                  全身の緊張と特にお疲れの部分を重点的にほぐします
                </p>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-purple-600">30分</span>
                  <span className="text-pink-600 font-medium">¥2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600">60分</span>
                  <span className="text-pink-600 font-medium">¥4,000</span>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-purple-200">
                <h5 className="text-xl text-purple-900 mb-2">ヘッド</h5>
                <p className="text-purple-600 text-sm mb-3">
                  頭や首や目の疲れに特化し、睡眠の質の向上も狙います
                </p>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-purple-600">15分</span>
                  <span className="text-pink-600 font-medium">¥1,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600">30分</span>
                  <span className="text-pink-600 font-medium">¥2,500</span>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-purple-200">
                <h5 className="text-xl text-purple-900 mb-2">フェイス</h5>
                <p className="text-purple-600 text-sm mb-3">
                  耳周り、顔全体をやさしくほぐし、血行促進させます
                </p>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-purple-600">15分</span>
                  <span className="text-pink-600 font-medium">¥1,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600">30分</span>
                  <span className="text-pink-600 font-medium">¥2,500</span>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-purple-200">
                <h5 className="text-xl text-purple-900 mb-2">デコルテ</h5>
                <p className="text-purple-600 text-sm mb-3">
                  脇のリンパをしっかり流し、腕の動きを軽やかに
                </p>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-purple-600">15分</span>
                  <span className="text-pink-600 font-medium">¥1,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600">30分</span>
                  <span className="text-pink-600 font-medium">¥2,500</span>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-purple-200">
                <h5 className="text-xl text-purple-900 mb-2">フット</h5>
                <p className="text-purple-600 text-sm mb-3">
                  足つぼや膝下をクリームを使い流し、軽やかな足取りに
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600">30分</span>
                  <span className="text-pink-600 font-medium">¥3,000</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-purple-600">
                  延長 10分毎
                  <span className="text-pink-600 font-medium ml-2">¥1,000</span>
                </p>
              </div>
            </div>
          </div>

          {/* ハートメニュー */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl overflow-hidden border border-purple-100">
            <div className="h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-3xl font-medium tracking-wider">
                    ハートメニュー
                  </p>
                  <p className="text-white/80 text-sm tracking-widest mt-2">
                    HEART CARE
                  </p>
                </div>
              </div>
              <div
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{ top: '15%', left: '20%' }}
              ></div>
              <div
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{ top: '30%', left: '80%', animationDelay: '0.5s' }}
              ></div>
              <div
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{ top: '60%', left: '15%', animationDelay: '1s' }}
              ></div>
            </div>
            <div className="p-8">
              <p className="text-purple-700 text-center mb-8 leading-relaxed text-sm">
                現状を整理し、自分自身を見つめ直し
                <br />
                本当の願望と新たな可能性を見つけましょう
                <br />
                色彩の持つ力を使い、運気と癒しをもたらし
                <br />
                あなたの理想とする未来へ近づくお手伝いをします
              </p>

              <div className="mb-6 pb-6 border-b border-purple-200">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-xl text-purple-900">色彩セラピー</h5>
                  <div className="text-right">
                    <span className="text-purple-600">30分</span>
                    <span className="text-pink-600 font-medium ml-2">¥3,500</span>
                  </div>
                </div>
                <div className="bg-pink-100/50 rounded-xl p-4 mt-3">
                  <p className="text-purple-600 text-sm">
                    不安やストレスを感じている
                    <br />
                    自分の感情がわからない
                    <br />
                    自分の気持ちを整理したい
                    <br />
                    <span className="text-pink-600">そんなときにおすすめです</span>
                  </p>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-purple-200">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-xl text-purple-900">霊感タロット</h5>
                  <div className="text-right">
                    <span className="text-purple-600">30分</span>
                    <span className="text-pink-600 font-medium ml-2">¥3,500</span>
                  </div>
                </div>
                <p className="text-purple-600 text-sm mb-3">
                  仕事、家庭、対人、さまざまな質問やお悩みに直感や霊的な感性でお答えします
                </p>
                <div className="bg-pink-100/50 rounded-xl p-4">
                  <p className="text-purple-600 text-sm">
                    決断に迷っている
                    <br />
                    方向性が見えない
                    <br />
                    未知の状況に戸惑っている
                    <br />
                    <span className="text-pink-600">そんなときにおすすめです</span>
                  </p>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-purple-200">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-xl text-purple-900">イロット</h5>
                  <div className="text-right">
                    <span className="text-purple-600">50分</span>
                    <span className="text-pink-600 font-medium ml-2">¥6,000</span>
                  </div>
                </div>
                <p className="text-purple-600 text-sm mb-3">
                  色彩とタロットからの叡智や霊的メッセージを通じ、自己理解を深めます
                </p>
                <div className="bg-pink-100/50 rounded-xl p-4">
                  <p className="text-purple-600 text-sm">
                    もっと自分を知りたい
                    <br />
                    もっと自分を好きになりたい
                    <br />
                    もっと素敵な自分になりたい
                    <br />
                    <span className="text-pink-600">そんなときにおすすめです</span>
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-purple-600">
                  延長 10分毎
                  <span className="text-pink-600 font-medium ml-2">¥1,000</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-purple-600">※お支払いは現金のみとなります</p>
        </div>
      </div>
    </section>
  )
}