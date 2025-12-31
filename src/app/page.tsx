export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-3xl mx-auto px-5 py-10">
        {/* Header */}
        <header className="text-center mb-16 pt-10 pb-10 border-b border-white/10">
          <h1 className="text-5xl md:text-6xl font-light tracking-wider mb-4 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500 bg-clip-text text-transparent">
            My Story
          </h1>
          <p className="text-xl text-gray-400 italic">
            A tale waiting to be told...
          </p>
        </header>

        {/* Story Content */}
        <main className="bg-white/5 rounded-xl p-8 md:p-12 backdrop-blur-sm border border-white/5">
          <section>
            <h2 className="text-2xl text-rose-500 mb-6 font-light">
              Chapter 1
            </h2>
            <p className="text-lg text-gray-200 mb-6 text-justify leading-relaxed">
              <span className="text-5xl float-left mr-3 leading-none text-rose-500 font-bold">
                Y
              </span>
              our story begins here. This is a placeholder for the amazing tale
              you&apos;re about to share with the world. Every great journey starts
              with a single step, and every great story starts with a single word.
            </p>
            <p className="text-lg text-gray-200 mb-6 text-justify leading-relaxed indent-8">
              Send me your story, and we&apos;ll make this page come alive with your
              words, bringing your narrative to life for readers everywhere.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-white/10 text-gray-500">
          <p>Created with care</p>
        </footer>
      </div>
    </div>
  );
}
