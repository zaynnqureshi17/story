export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background image with gradient overlay */}
      <div className="hero-bg" />

      {/* Animated snow/stars overlay */}
      <div className="stars-bg" />

      {/* Warm glow effect */}
      <div className="warm-glow" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">

        {/* Header */}
        <header className="text-center mb-12 sm:mb-20 pt-6 sm:pt-10">
          <p className="text-amber-400/70 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6">
            A Story Written in Stardust
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-wide mb-4 sm:mb-6 title-shimmer font-['Playfair_Display']">
            The Night We Chose Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 italic font-light px-4">
            A night I will hold onto forever...
          </p>

          {/* Decorative element */}
          <div className="mt-6 sm:mt-10 flex justify-center items-center gap-3 sm:gap-4">
            <span className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-amber-500/50 text-xl sm:text-2xl">&#10045;</span>
            <span className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
        </header>

        {/* Story Content */}
        <main className="story-container p-5 sm:p-8 md:p-12 space-y-8 sm:space-y-12">

          {/* Opening */}
          <section className="fade-in">
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed">
              <span className="drop-cap">T</span>
              here are some nights that stay with you forever. Nights that settle into your bones
              and become a part of who you are. This was one of those nights. We were supposed to
              attend an event. One of those gatherings where people talk too much and mean too little,
              where smiles are polished and conversations feel hollow.
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              You were wearing a red saree. Not maroon, not crimson, but <em className="text-amber-400">red</em>.
              The kind of red that poets write about. The shade of love letters sealed with longing,
              of roses left on windowsills. You stood before the mirror, fastening your earrings, and
              I watched you from across the room. Already dressed, but somehow incomplete.
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              I walked up behind you, slowly, drawn by some invisible thread that has always
              connected us. You saw me in the mirror but didn&apos;t turn around. You knew.
              You always know. I rested my chin on your shoulder, my arms finding their
              home around your waist, and for a moment the whole world narrowed down to
              just this. The warmth of you against me. The faint scent of your perfume.
              The soft rhythm of your breathing.
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              Your fingers paused on the earring. Through the mirror, our eyes met. Yours
              holding entire galaxies, mine holding only you. I pressed a gentle kiss to
              your shoulder, feeling you lean back into me ever so slightly. In that single
              moment, wrapped around you like I was made for this, I understood what it
              means to be exactly where you belong.
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              I wasn&apos;t in the mood to go. The thought of making small talk, of being surrounded
              by crowds while feeling alone, weighed heavy on me. And then I looked at you,
              really looked, and I saw it in the way your fingers lingered on the earring,
              in the slight pause before you clasped it. You didn&apos;t want to go either.
            </p>
            <div className="romantic-quote my-6 sm:my-10">
              <p className="text-base sm:text-xl text-gray-300 italic">
                &quot;Let&apos;s not go,&quot; I whispered against your ear.
              </p>
            </div>
            <p className="text-base sm:text-xl text-gray-200 text-justify leading-relaxed indent-6 sm:indent-12">
              You smiled. That smile that has ruined me for anyone else. You turned your head
              just enough to brush your lips against my cheek, and simply nodded. No words
              were needed. Some conversations happen in silence, spoken in the language only
              two souls who truly know each other can understand.
            </p>
          </section>

          {/* Divider */}
          <div className="divider">
            <span className="divider-icon">&#10022;</span>
          </div>

          {/* Dinner & Drive */}
          <section>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed">
              <span className="drop-cap">W</span>
              e went out for dinner instead. A quiet little place, nothing fancy. Just good
              food and better company. You kept the red saree on, and I couldn&apos;t help but
              steal glances at you between bites. How is it that someone can look more
              beautiful with each passing moment? How is it that after all this time, my
              heart still races when you laugh?
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              After dinner, we drove. Not toward anywhere in particular. Just away. The
              city lights faded behind us, replaced by the quiet darkness of empty roads
              and open skies. The windows were down, and the cool night air carried the
              scent of freedom, of possibility, of <em className="text-amber-400">us</em>.
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              Your hand found mine somewhere along the way. You didn&apos;t say anything.
              You didn&apos;t need to. Your fingers intertwined with mine spoke volumes.
              Of comfort, of belonging, of a love that doesn&apos;t need grand gestures
              to prove itself.
            </p>
            <p className="text-base sm:text-xl text-gray-200 text-justify leading-relaxed indent-6 sm:indent-12">
              The road stretched endlessly before us, and for once, I didn&apos;t care
              about the destination. With you beside me, every road leads home.
            </p>
          </section>

          {/* Divider */}
          <div className="divider">
            <span className="divider-icon">&#10022;</span>
          </div>

          {/* Our Spot */}
          <section>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed">
              <span className="drop-cap">A</span>
              few kilometers down the street, there&apos;s a place. <em className="text-amber-400">Our place</em>.
              A lake that most people drive past without a second glance, hidden from the noise of
              the world. But we found it. Or maybe it found us. And it became ours.
              A sanctuary. A secret kept between the stars and our hearts.
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              At night, the lake transforms into something magical. The water lies so
              still, so perfectly calm, that it becomes a mirror for the heavens. Stars
              scatter across its surface like diamonds spilled on black velvet. The moon
              hangs low, reflected in the water below, and for a moment it feels like
              we&apos;re floating somewhere between earth and sky.
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              It had been a while since we&apos;d been here. Life has a way of pulling us
              in different directions, of filling our days with obligations and our
              nights with exhaustion. But that night, we returned. And the lake welcomed
              us back like an old friend who never forgot.
            </p>
            <p className="text-base sm:text-xl text-gray-200 text-justify leading-relaxed indent-6 sm:indent-12">
              We sat at the water&apos;s edge, shoulders touching, watching the stars
              dance on the surface. The silence wasn&apos;t empty. It was <em className="text-amber-400">full</em>.
              Full of everything we&apos;ve shared, everything we are, everything we will be.
            </p>
          </section>

          {/* Divider */}
          <div className="divider">
            <span className="divider-icon">&#10022;</span>
          </div>

          {/* Hours Like Minutes */}
          <section>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed">
              <span className="drop-cap">W</span>
              e talked for hours. About everything and nothing. About dreams we&apos;ve
              chased and fears we&apos;ve hidden. About memories that make us laugh until
              our sides ache, and wounds that still ache when the nights grow too quiet.
              The world could have ended around us, and we wouldn&apos;t have noticed.
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              When the cold began to creep in, I noticed you shiver. Just slightly,
              trying to hide it. Without a word, I slipped off my blazer and draped it
              over your shoulders. You looked up at me with those eyes that hold entire
              universes, and I made a silent promise. <em className="text-amber-400">I will never let you feel cold.
              Not tonight. Not ever.</em>
            </p>
            <p className="text-base sm:text-xl text-gray-200 text-justify leading-relaxed indent-6 sm:indent-12">
              You leaned into me then, your head finding its place on my shoulder.
              The place that has always belonged to you. The stars continued their
              silent vigil above us, and the moon painted silver streaks across the
              water, and time itself seemed to pause, giving us this moment as a gift.
            </p>
          </section>

          {/* Divider */}
          <div className="divider">
            <span className="divider-icon">&#10022;</span>
          </div>

          {/* You Are My World */}
          <section>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed">
              <span className="drop-cap">Y</span>
              ou asked me something that night, your voice soft against the silence.
            </p>
            <div className="romantic-quote my-6 sm:my-10">
              <p className="text-base sm:text-xl text-gray-300 italic">
                &quot;Do you really want your life to be this... isolated? Just one person
                in your entire world?&quot;
              </p>
            </div>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              I thought about crowded rooms and empty conversations. I thought about
              all the people who come and go, leaving footprints that fade with time.
              And then I thought about you. Constant, unwavering, the only presence
              that has ever made sense in the beautiful chaos of existence.
            </p>
            <div className="romantic-quote my-6 sm:my-10">
              <p className="text-base sm:text-xl text-gray-200 italic leading-relaxed">
                &quot;For me,&quot; I whispered, pulling you closer, &quot;you are everything.
                You are my crowd and my solitude. My chaos and my calm. In a world of
                billions, you are the only one I see. The only one I need. The only one
                I choose, again and again, for the rest of my life.&quot;
              </p>
            </div>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 text-justify leading-relaxed indent-6 sm:indent-12">
              The stars reflected in your eyes as you looked at me, and I saw forever
              in their depths. Some people spend their whole lives searching for home,
              wandering through the world looking for a place to belong.
            </p>
            <p className="text-base sm:text-xl text-amber-300 text-justify leading-relaxed indent-6 sm:indent-12">
              I found mine in you.
            </p>
          </section>

          {/* Divider */}
          <div className="divider">
            <span className="divider-icon">&#10045;</span>
          </div>

          {/* Epilogue */}
          <section className="text-center px-2 sm:px-4 md:px-12">
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              That night, we stayed until the first light of dawn touched the water. We watched
              the stars fade one by one, making room for the sun. And when we finally drove home,
              something had changed. Not between us, but within us. A quiet certainty that
              needed no words.
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              There will be other events, other gatherings we&apos;ll be expected to attend.
              And maybe sometimes we&apos;ll go. But we&apos;ll always have this. Our lake.
              Our stars. Our quiet rebellion against a world that demands too much and
              gives too little.
            </p>
            <p className="text-base sm:text-xl text-gray-200 mb-8 sm:mb-12 leading-relaxed">
              Because when I&apos;m with you, the world outside doesn&apos;t matter.
            </p>

            {/* Final line */}
            <div className="mt-10 sm:mt-16 py-6 sm:py-8 border-t border-b border-amber-500/20">
              <p className="text-xl sm:text-2xl md:text-3xl text-amber-400 italic font-['Playfair_Display'] leading-relaxed">
                You, in your red saree, under a sky full of stars.<br />
                <span className="text-amber-300">You are my forever.</span>
              </p>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="text-center mt-16 sm:mt-24 pb-8 sm:pb-12">
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-amber-500/30" />
            <span className="text-amber-500/40 text-lg sm:text-xl">&#10084;</span>
            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-amber-500/30" />
          </div>
          <p className="text-gray-400 italic text-base sm:text-lg">
            &quot;For me, you are everything.&quot;
          </p>
        </footer>
      </div>
    </div>
  );
}
