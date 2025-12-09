export default function Therapist() {
  return (
    <section
      id="therapist"
      className="py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-fuchsia-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-pink-600 text-sm tracking-widest mb-2">THERAPIST</p>
          <h3 className="text-3xl md:text-4xl text-purple-900 tracking-wider mb-4">
            セラピスト紹介
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* しろ */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">🔮</span>
              </div>
              <p className="text-pink-500 text-sm tracking-widest">HEART CARE</p>
              <h4 className="text-2xl text-purple-900 mt-2">しろ</h4>
              <p className="text-purple-600 text-sm">桑原 思侶真</p>
            </div>

            <div className="text-purple-700 leading-relaxed space-y-4 text-sm">
              <p>
                占いの館で多様なお悩みに向き合ってきた経験を活かし、愛と導きの霊感鑑定師として、出張鑑定やイベント出演、個人講座などで幅広く活動しています。
              </p>
              <p>
                さらなる高みを求め、色彩セラピーと複数の占術を融合させた独自の鑑定方法「イロット」を生み出しました。
              </p>
              <p>
                直感や霊的な感性を活かした鑑定で、あなたが心の奥深くにある声に気づき、自分自身と向き合う力を引き出します。
              </p>
              <div className="bg-purple-100/50 rounded-xl p-4 mt-4">
                <p className="text-purple-800 font-medium mb-2">私の鑑定の目的は</p>
                <p>
                  あなたが自分自身に素直になり、深く理解し、自分を信じ、素敵な自分に気付くこと。そして、愛する自分へと導くことです。
                </p>
              </div>
            </div>
          </div>

          {/* パープル */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">💆‍♀️</span>
              </div>
              <p className="text-pink-500 text-sm tracking-widest">BODY CARE</p>
              <h4 className="text-2xl text-purple-900 mt-2">パープル</h4>
              <p className="text-purple-600 text-sm">紫藤 パープル</p>
            </div>

            <div className="text-purple-700 leading-relaxed space-y-4 text-sm">
              <p>
                身体の声に寄り添い、心身を整えるボディセラピストとして、サロン施術、イベント出展、出張施術などを中心に活動しています。
              </p>
              <p>
                長年のリラクゼーションサロンでの経験を活かし、熟練の技術で身体のコリと緊張を巧みにほぐします。多くのお客様から高い評価をいただいており、遠方からはるばるお越しいただく方も多数います。
              </p>
              <p>
                私が得意とするロングコース施術では、じっくりと身体を整えることで、深いリラクゼーションを体験していただけます。
              </p>
              <div className="bg-purple-100/50 rounded-xl p-4 mt-4">
                <p className="text-purple-800 font-medium mb-2">私の施術の目的は</p>
                <p>
                  疲れが抜けない感覚を解消し、身体が重いと感じる日々を軽やかにし、気持ちが沈みやすい状態からの脱却を手助けすることです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}