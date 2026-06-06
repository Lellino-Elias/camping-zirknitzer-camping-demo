"use client";

import Img from "@/components/ui/Img";
import Reveal from "@/components/ui/Reveal";
import { campsite } from "@/content/campsite.config";

export default function Aktivitaeten() {
  if (!campsite.aktivitaeten) return null;
  const { heading, intro, items } = campsite.aktivitaeten;

  return (
    <section id="aktivitaeten" className="relative overflow-hidden">
      <div className="flex flex-col py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-12">
              <div className="max-w-2xl">
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-extrabold leading-[1.02] tracking-tight text-ink">
                  {heading}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">{intro}</p>
              </div>
              <span className="text-[13px] uppercase tracking-[0.12em] text-muted sm:text-xs sm:tracking-[0.2em]">← seitwärts wischen →</span>
            </div>
          </Reveal>
        </div>

        {/* Horizontal gallery — native swipe/scroll at every breakpoint (no scroll-jacking → no pin spacer void). */}
        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-8">
          {items.map((a) => (
            <article
              key={a.title}
              className="group relative h-[360px] sm:h-[420px] w-[80vw] shrink-0 snap-start overflow-hidden rounded-[2rem] sm:w-[400px]"
            >
              <Img src={a.image.src} alt={a.image.alt} fill sizes="(min-width:640px) 400px, 80vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="font-display text-2xl font-bold text-white">{a.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-white/85">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
