export default function Access() {
  return (
    <section id="access" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm tracking-widest mb-2">ACCESS</p>
          <h3 className="text-3xl md:text-4xl text-purple-900 tracking-wider mb-4">
            アクセス
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg border border-purple-100">
            <h4 className="text-xl text-purple-900 mb-6 pb-4 border-b border-purple-200">
              店舗情報
            </h4>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <div>
                  <p className="text-purple-700">〒598-0071</p>
                  <p className="text-purple-700">大阪府泉佐野市佐野台7-1</p>
                  <p className="text-purple-700">府営佐野台住宅集会所</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
                <div>
                  <p className="text-purple-700">営業日: 祝日を除く毎週月曜日</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <div>
                  <p className="text-purple-700">営業時間: 10:30 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-purple-200 min-h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.0!2d135.323!3d34.409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b0b5a9ae1b7d%3A0x0!2z5aSn6Ziq5bqc5rOJ5L2Q6YeO5biC5L2Q6YeO5Y-w77yX77yN77yR!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}