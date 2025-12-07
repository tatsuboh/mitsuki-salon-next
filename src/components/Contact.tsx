export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-purple-900 via-fuchsia-900 to-pink-900 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div
        className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
        style={{ top: '10%', left: '15%' }}
      ></div>
      <div
        className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
        style={{ top: '25%', left: '85%', animationDelay: '0.5s' }}
      ></div>
      <div
        className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
        style={{ top: '75%', left: '25%', animationDelay: '2s' }}
      ></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm tracking-widest mb-2">RESERVATION</p>
          <h3 className="text-3xl md:text-4xl text-white tracking-wider mb-4">
            ご予約・お問い合わせ
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-purple-200">
            フォームよりお気軽にご予約ください
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
          <form
            className="space-y-6"
            name="reservation"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="reservation" />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-purple-200 text-sm mb-2">
                  お名前 *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:border-pink-400 focus:outline-none transition-all"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-purple-200 text-sm mb-2">
                  電話番号 *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:border-pink-400 focus:outline-none transition-all"
                  placeholder="090-0000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-purple-200 text-sm mb-2">
                メールアドレス *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:border-pink-400 focus:outline-none transition-all"
                placeholder="example@email.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-purple-200 text-sm mb-2">
                  ご希望日 *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white focus:border-pink-400 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-purple-200 text-sm mb-2">
                  ご希望時間 *
                </label>
                <select
                  name="time"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white focus:border-pink-400 focus:outline-none transition-all"
                >
                  <option value="" className="bg-purple-900">
                    選択してください
                  </option>
                  <option value="10:30" className="bg-purple-900">10:30</option>
                  <option value="11:00" className="bg-purple-900">11:00</option>
                  <option value="11:30" className="bg-purple-900">11:30</option>
                  <option value="12:00" className="bg-purple-900">12:00</option>
                  <option value="13:00" className="bg-purple-900">13:00</option>
                  <option value="14:00" className="bg-purple-900">14:00</option>
                  <option value="15:00" className="bg-purple-900">15:00</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-purple-200 text-sm mb-2">
                ご希望メニュー *
              </label>
              <select
                name="menu"
                required
                className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white focus:border-pink-400 focus:outline-none transition-all"
              >
                <option value="" className="bg-purple-900">選択してください</option>
                <optgroup label="美月コース" className="bg-purple-900">
                  <option value="mitsuki-40" className="bg-purple-900">
                    美月コース 40分 ¥4,500
                  </option>
                  <option value="mitsuki-60" className="bg-purple-900">
                    美月コース 60分 ¥5,500
                  </option>
                  <option value="mitsuki-90" className="bg-purple-900">
                    美月コース 90分 ¥8,000
                  </option>
                </optgroup>
                <optgroup label="ボディメニュー" className="bg-purple-900">
                  <option value="body-30" className="bg-purple-900">
                    ボディ 30分 ¥2,000
                  </option>
                  <option value="body-60" className="bg-purple-900">
                    ボディ 60分 ¥4,000
                  </option>
                  <option value="head-15" className="bg-purple-900">
                    ヘッド 15分 ¥1,500
                  </option>
                  <option value="head-30" className="bg-purple-900">
                    ヘッド 30分 ¥2,500
                  </option>
                  <option value="foot-30" className="bg-purple-900">
                    フット 30分 ¥3,000
                  </option>
                </optgroup>
                <optgroup label="ハートメニュー" className="bg-purple-900">
                  <option value="color-30" className="bg-purple-900">
                    色彩セラピー 30分 ¥3,500
                  </option>
                  <option value="tarot-30" className="bg-purple-900">
                    霊感タロット 30分 ¥3,500
                  </option>
                  <option value="irot-50" className="bg-purple-900">
                    イロット 50分 ¥6,000
                  </option>
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-purple-200 text-sm mb-2">
                備考・ご要望
              </label>
              <textarea
                rows={4}
                name="message"
                className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:border-pink-400 focus:outline-none transition-all resize-none"
                placeholder="ご質問やご要望がございましたらご記入ください"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl tracking-wider hover:from-pink-400 hover:to-purple-400 transition-all duration-300 shadow-lg hover:shadow-pink-500/30 hover:scale-[1.02] font-medium"
            >
              予約を送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}