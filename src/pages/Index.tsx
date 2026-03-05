import { useSeoMeta } from '@unhead/react';

const Index = () => {
  useSeoMeta({
    title: 'Heather Larson | Cat Yoga Beats',
    description: 'A personal space celebrating cats, music, yoga, and bitcoin.',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-orange-900">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile image */}
            <div className="relative mb-8 inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-full blur-lg opacity-75 animate-pulse" />
              <img
                src="/hero-cat.jpg"
                alt="Zen Cat"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>

            {/* Title with gradient */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Heather Larson
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-purple-200/80 mb-8 font-light tracking-wide">
              Cats + Music + Yoga + Bitcoin
            </p>

            {/* Animated decorative line */}
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-full mb-12" />

            {/* Bio */}
            <p className="text-lg text-purple-100/70 max-w-2xl mx-auto leading-relaxed mb-12">
              Welcome to my corner of the internet! I'm a yoga teacher, podcast host, and proud cat mom. 
              When I'm not on the mat or stacking sats, you'll find me exploring the world of music 
              and creating content for the Nostr community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#about"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Explore
              </a>
              <a
                href="https://nostr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-purple-400/50 text-purple-200 font-semibold rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                Find me on Nostr
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-purple-300/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              What I'm <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Into</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Cats Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="text-6xl mb-4">
                    <svg className="w-16 h-16 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Cats</h3>
                  <p className="text-purple-200/70">Proud cat mom. My furry friends bring joy to every day and inspire my zen moments.</p>
                </div>
              </div>

              {/* Music Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="text-6xl mb-4">
                    <svg className="w-16 h-16 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Music</h3>
                  <p className="text-purple-200/70">Podcast host at Radio Detox. Short songs are so fiat - make songs longer!</p>
                </div>
              </div>

              {/* Yoga Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="text-6xl mb-4">
                    <svg className="w-16 h-16 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Yoga</h3>
                  <p className="text-purple-200/70">Certified yoga teacher finding balance and peace, one breath at a time.</p>
                </div>
              </div>

              {/* Bitcoin Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="text-6xl mb-4">
                    <svg className="w-16 h-16 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.5 11.5v-2h1c.55 0 1 .45 1 1s-.45 1-1 1h-1zm0 4.5v-2h1.5c.55 0 1 .45 1 1s-.45 1-1 1h-1.5zm6.5-4c0-1.93-1.57-3.5-3.5-3.5H13V6h-2v2.5H9.5V6h-2v2.5H6v2h1.5v5H6v2h1.5V20h2v-2.5H11V20h2v-2.5h.5c1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61.72-.64 1.18-1.57 1.18-2.61z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Bitcoin</h3>
                  <p className="text-purple-200/70">Pleb. Stacker. Building on the future of sound money and financial freedom.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              What I'm <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Working On</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Radio Detox */}
              <a
                href="https://fountain.fm/show/IgdKDWtHpDc67T0wqqoO"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Radio Detox</h3>
                  </div>
                  <p className="text-purple-200/70 mb-4">Chief Detox Officer - bringing you the best in music, conversations, and good vibes.</p>
                  <span className="text-pink-400 font-medium group-hover:text-pink-300 transition-colors">Listen now &rarr;</span>
                </div>
              </a>

              {/* Nostr Creators */}
              <a
                href="https://nostr-creators.shakespeare.wtf/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-gradient-to-br from-orange-900/50 to-purple-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Nostr Creators</h3>
                  </div>
                  <p className="text-purple-200/70 mb-4">Resources and guides for content creators new to Nostr and the decentralized web.</p>
                  <span className="text-orange-400 font-medium group-hover:text-orange-300 transition-colors">Check it out &rarr;</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Let's <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-purple-200/70 mb-12">
              Find me on these platforms or zap me some sats!
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a
                href="https://destinyarchitecture.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                title="Website"
              >
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              <a
                href="https://fountain.fm/show/IgdKDWtHpDc67T0wqqoO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                title="Fountain FM"
              >
                <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z"/>
                </svg>
              </a>
            </div>

            {/* Lightning Address */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-2xl px-6 py-4">
              <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
              <span className="text-orange-200 font-mono text-sm">heatherlarson@fountain.fm</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-purple-300/50 text-sm">
              &copy; 2026 Heather Larson. All rights reserved.
            </p>
            <a
              href="https://shakespeare.diy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300/50 hover:text-purple-300 text-sm transition-colors"
            >
              Vibed with Shakespeare
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
