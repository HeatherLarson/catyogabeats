import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';

// Classic retro blinkie component - 150x20px style like blinkies.cafe
const Blinkie = ({ 
  text, 
  emoji,
  bg1, 
  bg2, 
  textColor = '#fff',
  sparkleColor = '#fff',
  borderColor = '#000'
}: { 
  text: string;
  emoji?: string;
  bg1: string;
  bg2: string;
  textColor?: string;
  sparkleColor?: string;
  borderColor?: string;
}) => (
  <div 
    className="relative overflow-hidden select-none"
    style={{ 
      width: '150px', 
      height: '20px',
      imageRendering: 'pixelated',
      border: `1px solid ${borderColor}`,
      background: `linear-gradient(180deg, ${bg1} 0%, ${bg2} 50%, ${bg1} 100%)`,
      boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.3), inset -1px -1px 0 rgba(0,0,0,0.3)'
    }}
  >
    <span className="absolute text-[8px] animate-blink" style={{ color: sparkleColor, top: '2px', left: '4px' }}>*</span>
    <span className="absolute text-[8px] animate-blink-delay" style={{ color: sparkleColor, top: '8px', left: '12px' }}>+</span>
    <span className="absolute text-[8px] animate-blink" style={{ color: sparkleColor, bottom: '2px', right: '4px' }}>*</span>
    <span className="absolute text-[8px] animate-blink-delay" style={{ color: sparkleColor, bottom: '6px', right: '14px' }}>+</span>
    <span 
      className="absolute inset-0 flex items-center justify-center text-[9px] font-bold tracking-wide uppercase gap-1"
      style={{ 
        color: textColor,
        fontFamily: '"Courier New", monospace',
        textShadow: textColor === '#fff' ? '1px 1px 0 #000' : 'none',
      }}
    >
      {emoji && <span className="text-[10px]">{emoji}</span>}
      {text}
      {emoji && <span className="text-[10px]">{emoji}</span>}
    </span>
    <div className="absolute inset-0 animate-shine" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)', width: '30px' }} />
  </div>
);

// Marquee text component
const MarqueeText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`overflow-hidden whitespace-nowrap ${className}`}>
    <div className="inline-block animate-marquee">
      {children}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{children}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div>
);

// Classic 90s animated GIF placeholder (using CSS animations)
const AnimatedIcon = ({ emoji, className = '' }: { emoji: string; className?: string }) => (
  <span className={`inline-block ${className}`}>
    {emoji}
  </span>
);

// Hit counter component
const HitCounter = () => {
  const [count, setCount] = useState(420);
  
  useEffect(() => {
    // Randomly increment like those old counters
    const interval = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-yellow-400 text-xs">You are visitor #</span>
      <span className="hit-counter">{String(count).padStart(6, '0')}</span>
    </div>
  );
};

// Retro 3D button
const RetroButton = ({ children, href, className = '' }: { children: React.ReactNode; href: string; className?: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`retro-button inline-block hover:brightness-110 ${className}`}
  >
    {children}
  </a>
);

// Webring navigation component
const WebringNav = ({ name, prevUrl, nextUrl, color }: { name: string; prevUrl: string; nextUrl: string; color: string }) => (
  <div 
    className="flex items-center gap-2 px-3 py-2 text-xs"
    style={{ 
      border: `2px ridge ${color}`,
      background: 'rgba(0,0,0,0.5)'
    }}
  >
    <a href={prevUrl} className="text-white hover:text-yellow-400">&lt;&lt; Prev</a>
    <span style={{ color }}>{name}</span>
    <a href={nextUrl} className="text-white hover:text-yellow-400">Next &gt;&gt;</a>
  </div>
);

const Index = () => {
  useSeoMeta({
    title: '~*~HeAtHeR\'s HoMePaGe~*~ - Cats, Music, Yoga & Bitcoin!!!',
    description: 'Welcome to my corner of the web! Cats, music, yoga, and bitcoin!',
  });

  return (
    <div 
      className="min-h-screen"
      style={{ 
        background: 'linear-gradient(180deg, #000033 0%, #000066 50%, #330066 100%)',
        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
      }}
    >
      {/* Tiled stars background - very 90s */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Animated starfield */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              boxShadow: '0 0 3px #fff',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Top banner with marquee */}
        <div 
          className="py-1"
          style={{
            background: 'linear-gradient(90deg, #ff0066, #9900ff, #0066ff, #00ff66, #ffff00, #ff0066)',
            borderTop: '4px ridge #ffff00',
            borderBottom: '4px ridge #ffff00',
          }}
        >
          <MarqueeText className="text-white text-sm font-bold drop-shadow-lg">
            <span>~*~ Welcome to Heather's Homepage! ~*~</span>
            <AnimatedIcon emoji="&#127775;" className="animate-spin-slow mx-2" />
            <span>Best viewed in Netscape Navigator 4.0 at 800x600</span>
            <AnimatedIcon emoji="&#128190;" className="animate-bounce-slow mx-2" />
            <span>Page created with Notepad!!!</span>
            <AnimatedIcon emoji="&#128008;" className="animate-wiggle mx-2" />
            <span>Last updated: March 1999</span>
            <AnimatedIcon emoji="&#11088;" className="animate-pulse mx-2" />
          </MarqueeText>
        </div>

        {/* Main table layout - very 1998! */}
        <div className="max-w-4xl mx-auto py-4 px-2">
          
          {/* Animated header */}
          <div className="text-center mb-6">
            {/* Dancing letters header */}
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {'~*~HeAtHeR~*~'.split('').map((letter, i) => (
                <span 
                  key={i}
                  className="inline-block animate-bounce-slow"
                  style={{ 
                    color: ['#ff00ff', '#00ffff', '#ffff00', '#ff6600', '#00ff00', '#ff0099', '#9900ff'][i % 7],
                    textShadow: '2px 2px 0 #000, 4px 4px 0 rgba(0,0,0,0.5)',
                    fontFamily: '"Comic Sans MS", cursive',
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>
            
            {/* Glowing subtitle */}
            <p className="text-xl md:text-2xl animate-glow" style={{ color: '#00ffff' }}>
              <AnimatedIcon emoji="&#11088;" className="animate-spin-slow" />
              {' '}Cats + Music + Yoga + Bitcoin{' '}
              <AnimatedIcon emoji="&#11088;" className="animate-spin-slow" />
            </p>
          </div>

          {/* Under construction banner */}
          <div className="text-center mb-4">
            <div 
              className="inline-flex items-center gap-3 px-6 py-2"
              style={{
                background: 'linear-gradient(90deg, #ffff00, #ff6600, #ffff00)',
                border: '3px dashed #000',
              }}
            >
              <AnimatedIcon emoji="&#128679;" className="text-2xl animate-bounce-slow" />
              <span className="text-black font-bold text-lg animate-blink">!! UNDER CONSTRUCTION !!</span>
              <AnimatedIcon emoji="&#128679;" className="text-2xl animate-bounce-slow" />
            </div>
          </div>

          {/* Profile section with retro frame */}
          <div className="flex flex-col items-center mb-6">
            {/* Profile pic with multiple nested borders - very 90s */}
            <div 
              className="p-1 mb-4"
              style={{ 
                border: '4px ridge #ff00ff',
                background: 'linear-gradient(135deg, #330066, #660033)',
                boxShadow: '0 0 20px rgba(255,0,255,0.5)',
              }}
            >
              <div style={{ border: '3px groove #00ffff', padding: '4px' }}>
                <div style={{ border: '2px solid #ffff00', padding: '2px' }}>
                  <img
                    src="https://blossom.primal.net/95b02bc70259ab5d3d4584ba1dd24b2d6bf3a058b8eb2edb885ef677b33b6d0c.jpg"
                    alt="Heather Larson"
                    className="w-44 h-44 object-cover"
                    style={{ 
                      filter: 'saturate(1.2)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Hit counter */}
            <div className="mb-4">
              <HitCounter />
            </div>

            {/* Blinkies collection */}
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              <Blinkie text="CAT MOM" emoji="&#128008;" bg1="#ff9966" bg2="#ff6600" sparkleColor="#ffff00" />
              <Blinkie text="MUSIC IS LIFE" emoji="&#127925;" bg1="#ff66cc" bg2="#cc0099" sparkleColor="#ffffff" />
              <Blinkie text="SOBER SINCE 7-1-13" emoji="&#11088;" bg1="#00cccc" bg2="#006666" sparkleColor="#ffffff" borderColor="#003333" />
              <Blinkie text="Y2K SHIFT SURVIVOR" emoji="&#128190;" bg1="#333333" bg2="#000000" sparkleColor="#00ff00" borderColor="#00ff00" />
              <Blinkie text="YOGA TEACHER" emoji="&#129495;" bg1="#cc99ff" bg2="#6633cc" sparkleColor="#ffccff" />
              <Blinkie text="STACK SATS" emoji="&#8383;" bg1="#ffcc00" bg2="#ff9900" textColor="#000" sparkleColor="#ffffff" borderColor="#996600" />
              <Blinkie text="NOSTR FTW" emoji="&#129449;" bg1="#9966ff" bg2="#6600cc" sparkleColor="#ffccff" />
              <Blinkie text="PLEB LIFE" emoji="&#9889;" bg1="#ffff66" bg2="#ffcc00" textColor="#000" sparkleColor="#ff6600" borderColor="#cc9900" />
              <Blinkie text="Y2K COMPLIANT" emoji="&#128190;" bg1="#66ff66" bg2="#009900" sparkleColor="#ffff00" borderColor="#006600" />
              <Blinkie text="I &lt;3 HTML" emoji="&#128187;" bg1="#66ccff" bg2="#0066cc" sparkleColor="#ffffff" borderColor="#003366" />
            </div>
          </div>

          {/* Animated divider */}
          <div className="text-center my-4">
            <span className="animate-rainbow text-2xl tracking-widest">
              {'* * * * * * * * * * * * *'.split('').map((char, i) => (
                <span 
                  key={i} 
                  className="inline-block"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </span>
          </div>

          {/* About Me section - frame style */}
          <div className="frame-box mb-6 p-4">
            <h2 className="text-2xl text-center mb-4 fire-text font-bold">
              ~*~ About Me ~*~
            </h2>
            <div className="retro-cell">
              <p className="text-cyan-300 text-center leading-relaxed">
                <AnimatedIcon emoji="&#128075;" className="animate-wiggle" /> Hey there! Welcome to my corner of the internet! 
                I'm a yoga teacher, podcast host, and proud cat mom.
                When I'm not on the mat or stacking sats, you'll find me exploring the world of music
                and creating content for the Nostr community. I've been sober since July 1, 2013! 
                Thanks for stopping by!!! <AnimatedIcon emoji="&#128075;" className="animate-wiggle" />
              </p>
              <p className="text-center mt-4">
                <span className="text-pink-400 text-xl glitter-text">=^.^= Meow! =^.^=</span>
              </p>
            </div>
          </div>

          {/* What I'm Into - Classic table layout */}
          <div className="frame-box mb-6 p-4">
            <h2 className="text-2xl text-center mb-4 glitter-text" style={{ color: '#ffff00' }}>
              ~*~ My Interests ~*~
            </h2>
            <table className="w-full retro-table">
              <tbody>
                <tr>
                  <td className="retro-cell text-center w-1/4">
                    <AnimatedIcon emoji="&#128008;" className="text-5xl block mb-2 animate-float" />
                    <h3 className="text-pink-400 font-bold">CATS</h3>
                    <p className="text-cyan-300 text-xs">Proud cat mom!</p>
                    <p className="text-yellow-300 text-xs">Meow!!!</p>
                  </td>
                  <td className="retro-cell text-center w-1/4">
                    <AnimatedIcon emoji="&#127925;" className="text-5xl block mb-2 animate-bounce-slow" />
                    <h3 className="text-pink-400 font-bold">MUSIC</h3>
                    <p className="text-cyan-300 text-xs">Radio Detox host</p>
                    <p className="text-yellow-300 text-xs">Tunes 4ever!</p>
                  </td>
                  <td className="retro-cell text-center w-1/4">
                    <AnimatedIcon emoji="&#129495;" className="text-5xl block mb-2 animate-float" />
                    <h3 className="text-pink-400 font-bold">YOGA</h3>
                    <p className="text-cyan-300 text-xs">Certified teacher</p>
                    <p className="text-yellow-300 text-xs">Namaste!</p>
                  </td>
                  <td className="retro-cell text-center w-1/4">
                    <AnimatedIcon emoji="&#8383;" className="text-5xl block mb-2 animate-bounce-slow" />
                    <h3 className="text-pink-400 font-bold">BITCOIN</h3>
                    <p className="text-cyan-300 text-xs">Stack sats daily!</p>
                    <p className="text-yellow-300 text-xs">HODL!</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cool Links section */}
          <div className="frame-box mb-6 p-4">
            <h2 className="text-2xl text-center mb-4" style={{ color: '#00ff00', textShadow: '2px 2px 0 #006600' }}>
              <AnimatedIcon emoji="&#128279;" className="animate-wiggle" /> Cool Links <AnimatedIcon emoji="&#128279;" className="animate-wiggle" />
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <RetroButton href="https://fountain.fm/show/IgdKDWtHpDc67T0wqqoO">
                <AnimatedIcon emoji="&#127908;" /> Radio Detox
              </RetroButton>
              <RetroButton href="https://nostr-creators.shakespeare.wtf/">
                <AnimatedIcon emoji="&#128172;" /> Nostr Creators
              </RetroButton>
              <RetroButton href="https://destinyarchitecture.net">
                <AnimatedIcon emoji="&#127968;" /> My Website
              </RetroButton>
              <RetroButton href="https://njump.me/npub1nl8r463jkdtr0qu0k3dht03jt9t59cttk0j8gtxg9wea2russlnq2zf9d0">
                <AnimatedIcon emoji="&#129449;" /> Nostr Profile
              </RetroButton>
              <RetroButton href="https://sessions.soapbox.pub/">
                <AnimatedIcon emoji="&#127897;" /> Sessions Pod
              </RetroButton>
            </div>
          </div>

          {/* Contact section */}
          <div className="frame-box mb-6 p-4 text-center">
            <h2 className="text-2xl mb-4 glitter-text" style={{ color: '#ff99ff' }}>
              ~*~ Contact Me! ~*~
            </h2>
            <p className="text-cyan-300 mb-4">
              <AnimatedIcon emoji="&#129449;" className="animate-bounce-slow" /> Follow me on Nostr! I love making new friends! <AnimatedIcon emoji="&#129449;" className="animate-bounce-slow" />
            </p>
            <a
              href="https://ditto.pub/npub1nl8r463jkdtr0qu0k3dht03jt9t59cttk0j8gtxg9wea2russlnq2zf9d0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 hover:brightness-110"
              style={{
                background: 'linear-gradient(180deg, #9966ff 0%, #6633cc 50%, #330099 100%)',
                border: '3px outset #9966ff',
                color: '#fff',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              <AnimatedIcon emoji="&#129449;" /> Follow @heatherlarson on Ditto <AnimatedIcon emoji="&#129449;" />
            </a>
            <p className="text-yellow-400 mt-4 text-sm animate-pulse">
              <AnimatedIcon emoji="&#128172;" /> The future of social is Nostr! <AnimatedIcon emoji="&#128172;" />
            </p>
          </div>

          {/* Guestbook teaser */}
          <div className="frame-box mb-6 p-4 text-center">
            <h2 className="text-2xl mb-4 fire-text">
              <AnimatedIcon emoji="&#128214;" /> Sign My Guestbook! <AnimatedIcon emoji="&#128214;" />
            </h2>
            <p className="text-cyan-300 mb-4">
              Let me know you stopped by! Leave a note!
            </p>
            <div 
              className="inline-block px-6 py-2 animate-pulse"
              style={{
                background: 'linear-gradient(180deg, #ffcc00 0%, #ff9900 50%, #ff6600 100%)',
                border: '3px outset #ffcc00',
                color: '#000',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              <AnimatedIcon emoji="&#9997;" /> SIGN GUESTBOOK <AnimatedIcon emoji="&#9997;" />
            </div>
            <p className="text-pink-400 mt-4 text-sm">
              (Coming soon - guestbooks are so cool!)
            </p>
          </div>

          {/* Web rings section */}
          <div className="text-center mb-6">
            <p className="text-pink-400 mb-3 text-lg">~ Member of These Webrings ~</p>
            <div className="flex flex-wrap justify-center gap-3">
              <WebringNav 
                name="Nostr Webring" 
                prevUrl="#" 
                nextUrl="#" 
                color="#9966ff" 
              />
              <WebringNav 
                name="Bitcoin Plebs" 
                prevUrl="#" 
                nextUrl="#" 
                color="#ff9900" 
              />
              <WebringNav 
                name="Cat Lovers Ring" 
                prevUrl="#" 
                nextUrl="#" 
                color="#ff66cc" 
              />
              <WebringNav 
                name="Indie Web Ring" 
                prevUrl="#" 
                nextUrl="#" 
                color="#00ff99" 
              />
            </div>
          </div>

          {/* Badges section */}
          <div className="text-center mb-6">
            <p className="text-cyan-400 mb-3">~ Cool Badges ~</p>
            <div className="flex flex-wrap justify-center gap-2">
              {/* Fake 88x31 badges */}
              {[
                { text: 'Netscape NOW!', bg: '#006600', border: '#00ff00' },
                { text: 'Made with Notepad', bg: '#000066', border: '#0099ff' },
                { text: 'Best viewed 800x600', bg: '#660066', border: '#ff66ff' },
                { text: 'NO FRAMES!', bg: '#660000', border: '#ff6666' },
                { text: 'JavaScript', bg: '#666600', border: '#ffff00' },
                { text: 'HTML 4.0', bg: '#006666', border: '#00ffff' },
              ].map((badge, i) => (
                <div 
                  key={i}
                  className="px-2 py-1 text-[10px] font-bold text-white"
                  style={{
                    background: badge.bg,
                    border: `2px solid ${badge.border}`,
                    minWidth: '88px',
                    textAlign: 'center',
                    fontFamily: '"Courier New", monospace',
                  }}
                >
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Animated divider */}
          <hr className="retro my-6" />

          {/* Footer */}
          <footer className="text-center py-4">
            <div className="mb-4">
              <AnimatedIcon emoji="&#128008;" className="text-3xl animate-wiggle mx-2" />
              <AnimatedIcon emoji="&#127925;" className="text-3xl animate-bounce-slow mx-2" />
              <AnimatedIcon emoji="&#129495;" className="text-3xl animate-float mx-2" />
              <AnimatedIcon emoji="&#9889;" className="text-3xl animate-spin-slow mx-2" />
            </div>
            
            <p className="text-purple-400 text-sm mb-2">
              This page is best viewed at 800x600 resolution in Netscape Navigator 4.0+
            </p>
            <p className="text-cyan-400 text-xs mb-2">
              <AnimatedIcon emoji="&#128187;" /> Made with Notepad and lots of love! <AnimatedIcon emoji="&#10084;" />
            </p>
            <p className="text-yellow-400 text-xs mb-4">
              &copy; 1998-2001 Heather Larson. All rights reserved. Do not steal!!!
            </p>
            
            <div className="flex justify-center gap-4 items-center flex-wrap mb-4">
              <a
                href="https://shakespeare.diy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 hover:text-lime-200 text-xs underline animate-pulse"
              >
                Vibed with Shakespeare
              </a>
              <span className="text-pink-400 text-xs">|</span>
              <span className="text-cyan-400 text-xs">Internet Explorer = Bad!</span>
              <span className="text-pink-400 text-xs">|</span>
              <span className="text-lime-400 text-xs">GeoCities Forever!</span>
            </div>
            
            <p className="text-pink-400 text-lg animate-glow">
              <AnimatedIcon emoji="&#11088;" /> Thanks 4 visiting! Come back soon! <AnimatedIcon emoji="&#11088;" />
            </p>
            
            {/* Email link oldschool style */}
            <p className="text-cyan-300 text-sm mt-4">
              <a 
                href="mailto:heather@destinyarchitecture.net" 
                className="hover:text-yellow-400 underline"
              >
                <AnimatedIcon emoji="&#128231;" /> Click here to email me! <AnimatedIcon emoji="&#128231;" />
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
