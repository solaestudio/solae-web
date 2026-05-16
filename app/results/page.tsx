export const metadata = {
  title: "Solae Studio — Canvas UGC Performance",
  description: "Live performance data across TikTok, Instagram, and YouTube.",
  robots: {
    index: false,
    follow: false,
  },
};

const dashboards = [
  {
    platform: "TikTok",
    index: "01",
    src: "https://datastudio.google.com/embed/reporting/37b8488d-5fab-467a-9879-a4b7768601da/page/dGY5C",
  },
  {
    platform: "Instagram",
    index: "02",
    src: "https://datastudio.google.com/embed/reporting/f98e6f00-c825-4df0-a4e4-610a7136a141/page/dGY5C",
  },
  {
    platform: "YouTube",
    index: "03",
    src: "https://datastudio.google.com/embed/reporting/f98e6f00-c825-4df0-a4e4-610a7136a141/page/p_hi22235o3d",
  },
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#0F0F0E]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-24">

        {/* MASTHEAD */}
        <header className="flex items-end justify-between border-b border-[#0F0F0E] pb-8 mb-24">
          <div className="font-serif text-2xl tracking-wide">Solae Studio</div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Q2 · 2026
          </div>
        </header>

        {/* TITLE BLOCK */}
        <section className="mb-32 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-8">
            Canvas UGC — Performance Report
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium uppercase leading-[0.95] tracking-tight mb-8">
            The<br />numbers,<br />uncut.
          </h1>
          <p className="text-lg leading-relaxed text-neutral-700 max-w-xl">
            A live look at how Canvas UGC creators are performing across TikTok,
            Instagram, and YouTube. Data refreshes daily.
          </p>
        </section>

        {/* DASHBOARDS */}
        {dashboards.map((dash) => (
          <section
            key={dash.platform}
            className="border-t border-[#0F0F0E] pt-8 mb-32 last:mb-16"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-medium uppercase tracking-tight">
                {dash.platform}
              </h2>
              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                {dash.index} / 03
              </span>
            </div>

            <div className="w-full bg-white border border-black/10">
              <iframe
                src={dash.src}
                className="w-full h-[600px] md:h-[900px] border-0 block"
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </section>
        ))}

        {/* FOOTER */}
        <footer className="flex items-baseline justify-between border-t border-[#0F0F0E] pt-8">
          <div className="font-serif text-lg">Solae Studio</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            solae.studio
          </div>
        </footer>

      </div>
    </main>
  );
}
