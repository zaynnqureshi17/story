export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated stars background */}
      <div className="stars-bg" />
      <div className="moon-glow" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <header className="text-center mb-20 pt-10">
          <p className="text-rose-400/60 text-sm tracking-[0.3em] uppercase mb-6">
            A Story Written in Stardust
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6 title-shimmer font-['Playfair_Display']">
            The Night We Chose Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 italic font-light">
            A dream I never wanted to wake from...
          </p>

          {/* Decorative element */}
          <div className="mt-10 flex justify-center items-center gap-4">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-rose-500/50" />
            <span className="text-rose-500/40 text-2xl">&#10045;</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-rose-500/50" />
          </div>
        </header>

        {/* Story Content */}
        <main className="space-y-16">

          {/* Part 1 - The Red Saree */}
          <section className="section-glow pl-8 fade-in">
            <h2 className="text-3xl text-rose-400 mb-8 font-['Playfair_Display'] font-light tracking-wide">
              I. The Red Saree
            </h2>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed">
              <span className="drop-cap">I</span>
              had a dream last night. The kind that stays with you long after you open your eyes,
              clinging to your heart like morning mist over still water. In that dream, we were
              supposed to attend an event — one of those gatherings where people talk too much
              and mean too little, where smiles are polished and conversations are hollow.
            </p>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              You were wearing a red saree. Not maroon, not crimson — but <em className="text-rose-400">red</em>.
              The kind of red that poets write about, the shade of love letters sealed with longing,
              of roses left on windowsills. You stood before the mirror, fastening your earrings, and
              I watched you from across the room, already dressed but somehow incomplete.
            </p>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              I walked up behind you, slowly, drawn by some invisible thread that has always
              connected us. You saw me in the mirror but didn&apos;t turn around. You knew.
              You always know. I rested my chin on your shoulder, my arms finding their
              home around your waist, and for a moment, the whole world narrowed down to
              just this — the warmth of you against me, the faint scent of your perfume,
              the soft rhythm of your breathing.
            </p>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              Your fingers paused on the earring. Through the mirror, our eyes met — yours
              holding entire galaxies, mine holding only you. I pressed a gentle kiss to
              your shoulder, feeling you lean back into me ever so slightly. In that single
              moment, wrapped around you like I was made for this, I understood what it
              means to be exactly where you belong.
            </p>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              I wasn&apos;t in the mood to go. The thought of making small talk, of being surrounded
              by crowds while feeling alone, weighed heavy on me. And then I looked at you —
              really looked — and I saw it in the way your fingers lingered on the earring,
              in the slight pause before you clasped it. You didn&apos;t want to go either.
            </p>
            <div className="romantic-quote my-10">
              <p className="text-xl text-gray-300 italic">
                &quot;Let&apos;s not go,&quot; I whispered against your ear.
              </p>
            </div>
            <p className="text-xl text-gray-200 text-justify leading-relaxed indent-12">
              You smiled — that smile that has ruined me for anyone else — turned your head
              just enough to brush your lips against my cheek, and simply nodded. No words
              were needed. Some conversations happen in silence, spoken in the language only
              two souls who truly know each other can understand.
            </p>
          </section>

          {/* Divider */}
          <div className="divider">
            <span className="divider-icon">&#10022;</span>
          </div>

          {/* Part 2 - Dinner & The Long Drive */}
          <section className="section-glow pl-8">
            <h2 className="text-3xl text-rose-400 mb-8 font-['Playfair_Display'] font-light tracking-wide">
              II. Dinner &amp; The Long Drive
            </h2>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed">
              <span className="drop-cap">W</span>
              e went out for dinner instead. A quiet little place, nothing fancy — just good
              food and better company. You kept the red saree on, and I couldn&apos;t help but
              steal glances at you between bites. How is it that someone can look more
              beautiful with each passing moment? How is it that after all this time, my
              heart still races when you laugh?
            </p>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              After dinner, we drove. Not toward anywhere in particular — just away. The
              city lights faded behind us, replaced by the quiet darkness of empty roads
              and open skies. The windows were down, and the cool night air carried the
              scent of freedom, of possibility, of <em className="text-rose-400">us</em>.
            </p>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              Your hand found mine somewhere along the way. You didn&apos;t say anything.
              You didn&apos;t need to. Your fingers intertwined with mine spoke volumes —
              of comfort, of belonging, of a love that doesn&apos;t need grand gestures
              to prove itself.
            </p>
            <p className="text-xl text-gray-200 text-justify leading-relaxed indent-12">
              The road stretched endlessly before us, and for once, I didn&apos;t care
              about the destination. With you beside me, every road leads home.
            </p>
          </section>

          {/* Divider */}
          <div className="divider">
            <span className="divider-icon">&#10022;</span>
          </div>

          {/* Part 3 - Our Spot */}
          <section className="section-glow pl-8">
            <h2 className="text-3xl text-rose-400 mb-8 font-['Playfair_Display'] font-light tracking-wide">
              III. Our Spot
            </h2>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed">
              <span className="drop-cap">A</span>
              few kilometers down the street, there&apos;s a place. <em className="text-rose-400">Our place</em>.
              A lake that most people drive past without a second glance, hidden from the noise of
              the world. But we found it — or maybe it found us — and it became ours.
              A sanctuary. A secret kept between the stars and our hearts.
            </p>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              At night, the lake transforms into something magical. The water lies so
              still, so perfectly calm, that it becomes a mirror for the heavens. Stars
              scatter across its surface like diamonds spilled on black velvet. The moon
              hangs low, reflected in the water below, and for a moment, it feels like
              we&apos;re floating somewhere between earth and sky.
            </p>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              It had been a while since we&apos;d been here. Life has a way of pulling us
              in different directions, of filling our days with obligations and our
              nights with exhaustion. But that night, we returned. And the lake welcomed
              us back like an old friend who never forgot.
            </p>
            <p className="text-xl text-gray-200 text-justify leading-relaxed indent-12">
              We sat at the water&apos;s edge, shoulders touching, watching the stars
              dance on the surface. The silence wasn&apos;t empty — it was <em className="text-rose-400">full</em>.
              Full of everything we&apos;ve shared, everything we are, everything we will be.
            </p>
          </section>

          {/* Divider */}
          <div className="divider">
            <span className="divider-icon">&#10022;</span>
          </div>

          {/* Part 4 - Hours Like Minutes */}
          <section className="section-glow pl-8">
            <h2 className="text-3xl text-rose-400 mb-8 font-['Playfair_Display'] font-light tracking-wide">
              IV. Hours Like Minutes
            </h2>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed">
              <span className="drop-cap">W</span>
              e talked for hours. About everything and nothing. About dreams we&apos;ve
              chased and fears we&apos;ve hidden. About memories that make us laugh until
              our sides ache and wounds that still ache when the nights grow too quiet.
              The world could have ended around us, and we wouldn&apos;t have noticed.
            </p>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              When the cold began to creep in, I noticed you shiver — just slightly,
              trying to hide it. Without a word, I slipped off my blazer and draped it
              over your shoulders. You looked up at me with those eyes that hold entire
              universes, and I made a silent promise: <em className="text-rose-400">I will never let you feel cold.
              Not tonight. Not ever.</em>
            </p>
            <p className="text-xl text-gray-200 text-justify leading-relaxed indent-12">
              You leaned into me then, your head finding its place on my shoulder —
              the place that has always belonged to you. The stars continued their
              silent vigil above us, and the moon painted silver streaks across the
              water, and time itself seemed to pause, giving us this moment as a gift.
            </p>
          </section>

          {/* Divider */}
          <div className="divider">
            <span className="divider-icon">&#10022;</span>
          </div>

          {/* Part 5 - You Are My World */}
          <section className="section-glow pl-8">
            <h2 className="text-3xl text-rose-400 mb-8 font-['Playfair_Display'] font-light tracking-wide">
              V. You Are My World
            </h2>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed">
              <span className="drop-cap">Y</span>
              ou asked me something that night, your voice soft against the silence:
            </p>
            <div className="romantic-quote my-10">
              <p className="text-xl text-gray-300 italic">
                &quot;Do you really want your life to be this... isolated? Just one person
                in your entire world?&quot;
              </p>
            </div>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              I thought about crowded rooms and empty conversations. I thought about
              all the people who come and go, leaving footprints that fade with time.
              And then I thought about you — constant, unwavering, the only presence
              that has ever made sense in the beautiful chaos of existence.
            </p>
            <div className="romantic-quote my-10 border-rose-400">
              <p className="text-xl text-gray-200 italic leading-relaxed">
                &quot;For me,&quot; I whispered, pulling you closer, &quot;you are everything.
                You are my crowd and my solitude. My chaos and my calm. In a world of
                billions, you are the only one I see. The only one I need. The only one
                I choose — again and again, in every lifetime, in every dream.&quot;
              </p>
            </div>
            <p className="text-xl text-gray-200 mb-8 text-justify leading-relaxed indent-12">
              The stars reflected in your eyes as you looked at me, and I saw forever
              in their depths. Some people spend their whole lives searching for home,
              wandering through the world looking for a place to belong.
            </p>
            <p className="text-xl text-gray-200 text-justify leading-relaxed indent-12 text-rose-300">
              I found mine in you.
            </p>
          </section>

          {/* Divider */}
          <div className="divider">
            <span className="divider-icon">&#10045;</span>
          </div>

          {/* Epilogue */}
          <section className="text-center px-4 md:px-12">
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              I woke up eventually, as we all must from the sweetest dreams. The morning
              light filtered through the curtains, harsh and unwelcome. But something was
              different. The warmth of the dream lingered, wrapped around my heart like
              your arms around my waist.
            </p>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Some dreams are just dreams — fleeting visitors that vanish with the dawn.
              But this one? This one felt like a memory. Like a glimpse of something that
              was, or will be, or perhaps exists in some universe where we are sitting by
              that lake right now, watching stars fall into still water, holding onto each
              other like the world outside doesn&apos;t matter.
            </p>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Because when I&apos;m with you, it doesn&apos;t.
            </p>

            {/* Final line */}
            <div className="mt-16 py-8 border-t border-b border-rose-500/20">
              <p className="text-2xl md:text-3xl text-rose-400 italic font-['Playfair_Display'] leading-relaxed">
                You, in your red saree, under a sky full of stars —<br />
                <span className="text-rose-300">you are my forever.</span>
              </p>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="text-center mt-24 pb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-rose-500/30" />
            <span className="text-rose-500/30 text-xl">&#10084;</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-rose-500/30" />
          </div>
          <p className="text-gray-500 italic text-lg">
            &quot;For me, you are everything.&quot;
          </p>
        </footer>
      </div>
    </div>
  );
}
