export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Small Restaurant Owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Generate FDA-Compliant<br />
          <span className="text-[#58a6ff]">Nutrition Labels</span> in Minutes
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your menu, let our OCR extract the items, match ingredients from the USDA database, and download print-ready nutrition labels — no dietitian required.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $13 / month
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { step: '01', title: 'Upload Menu', desc: 'Photo or PDF — our OCR reads every item automatically.' },
            { step: '02', title: 'Match Ingredients', desc: 'We cross-reference the USDA FoodData Central database.' },
            { step: '03', title: 'Download Labels', desc: 'Get print-ready, FDA-compliant nutrition fact panels as PDF.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-black mb-2">{step}</div>
              <div className="text-white font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e] text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$13</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited menu scans',
              'USDA ingredient matching',
              'FDA-compliant PDF labels',
              'Bulk export for full menus',
              'Email support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Do I need to manually enter every ingredient?',
              a: 'No. Our OCR scans your menu and automatically identifies dish names. We then match ingredients from the USDA FoodData Central database so you rarely need to type anything.',
            },
            {
              q: 'Are the labels actually FDA-compliant?',
              a: 'Yes. Labels follow the FDA Nutrition Facts panel format including serving size, calories, macronutrients, and daily value percentages as required for restaurant menus.',
            },
            {
              q: 'What if an ingredient is not in the USDA database?',
              a: 'You can manually enter custom ingredients with their nutrition data. These are saved to your account for reuse across all future menu items.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#6e7681] text-xs pb-8">
        &copy; {new Date().getFullYear()} NutriLabel. All rights reserved.
      </footer>
    </main>
  )
}
