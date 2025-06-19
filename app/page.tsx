import { Countdown } from "@/components/countdown";
import { ImageGallery } from "@/components/image-gallery";
import { Carousel } from "@/components/carousel";
import { CherryBlossom } from "@/components/cherry-blossom";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Carousel />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Mira & Dzhun
            </h1>
            <p className="text-xl md:text-2xl mb-8">October 23, 2025</p>
            <div className="flex justify-center gap-4">
              <a
                href="#rsvp"
                className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                RSVP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Counting Down to Forever
          </h2>
          <Countdown />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <ImageGallery />
          </div>
        </div>
      </section>

      {/* Wedding Program Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--secondary)] opacity-50" />
        <CherryBlossom />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--text)] animate-fade-in">
            Wedding Program
          </h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary)]/30 transform -translate-x-1/2" />
            <div className="space-y-12">
              {/* Assembly */}
              <div className="flex items-center justify-start gap-6 group hover:transform hover:scale-105 transition-all duration-300 relative">
                <div className="text-right w-1/2 pr-8">
                  <div
                    className="text-2xl font-serif text-[var(--primary)] font-semibold animate-fade-in"
                    style={{ animationDelay: "0.1s" }}
                  >
                    3:30 PM
                  </div>
                  <div
                    className="text-sm text-gray-500 mt-1 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Assembly
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--primary)] group-hover:scale-125 transition-transform duration-300 z-10" />
                <div className="pl-8 text-left w-1/2">
                  <h3
                    className="text-xl font-serif text-[var(--text)] mb-2 animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    Assembly
                  </h3>
                  <p
                    className="text-gray-600 animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Guests arrive and take their seats
                  </p>
                </div>
              </div>

              {/* Ceremony */}
              <div className="flex items-center justify-start gap-6 group hover:transform hover:scale-105 transition-all duration-300 relative">
                <div className="text-right w-1/2 pr-8">
                  <div
                    className="text-2xl font-serif text-[var(--primary)] font-semibold animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    4:00 PM
                  </div>
                  <div
                    className="text-sm text-gray-500 mt-1 animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    Ceremony
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--primary)] group-hover:scale-125 transition-transform duration-300 z-10" />
                <div className="pl-8 text-left w-1/2">
                  <h3
                    className="text-xl font-serif text-[var(--text)] mb-2 animate-fade-in"
                    style={{ animationDelay: "0.7s" }}
                  >
                    Ceremony
                  </h3>
                  <p
                    className="text-gray-600 animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                  >
                    Exchange of vows and rings
                  </p>
                </div>
              </div>

              {/* Photos */}
              <div className="flex items-center justify-start gap-6 group hover:transform hover:scale-105 transition-all duration-300 relative">
                <div className="text-right w-1/2 pr-8">
                  <div
                    className="text-2xl font-serif text-[var(--primary)] font-semibold animate-fade-in"
                    style={{ animationDelay: "0.9s" }}
                  >
                    5:00 PM
                  </div>
                  <div
                    className="text-sm text-gray-500 mt-1 animate-fade-in"
                    style={{ animationDelay: "1.0s" }}
                  >
                    Photos
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--primary)] group-hover:scale-125 transition-transform duration-300 z-10" />
                <div className="pl-8 text-left w-1/2">
                  <h3
                    className="text-xl font-serif text-[var(--text)] mb-2 animate-fade-in"
                    style={{ animationDelay: "1.1s" }}
                  >
                    Photos
                  </h3>
                  <p
                    className="text-gray-600 animate-fade-in"
                    style={{ animationDelay: "1.2s" }}
                  >
                    Family and group photos
                  </p>
                </div>
              </div>

              {/* Dinner */}
              <div className="flex items-center justify-start gap-6 group hover:transform hover:scale-105 transition-all duration-300 relative">
                <div className="text-right w-1/2 pr-8">
                  <div
                    className="text-2xl font-serif text-[var(--primary)] font-semibold animate-fade-in"
                    style={{ animationDelay: "1.3s" }}
                  >
                    6:00 PM
                  </div>
                  <div
                    className="text-sm text-gray-500 mt-1 animate-fade-in"
                    style={{ animationDelay: "1.4s" }}
                  >
                    Dinner
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--primary)] group-hover:scale-125 transition-transform duration-300 z-10" />
                <div className="pl-8 text-left w-1/2">
                  <h3
                    className="text-xl font-serif text-[var(--text)] mb-2 animate-fade-in"
                    style={{ animationDelay: "1.5s" }}
                  >
                    Dinner and Toasts
                  </h3>
                  <p
                    className="text-gray-600 animate-fade-in"
                    style={{ animationDelay: "1.6s" }}
                  >
                    Celebratory dinner and speeches
                  </p>
                </div>
              </div>

              {/* First Dance */}
              <div className="flex items-center justify-start gap-6 group hover:transform hover:scale-105 transition-all duration-300 relative">
                <div className="text-right w-1/2 pr-8">
                  <div
                    className="text-2xl font-serif text-[var(--primary)] font-semibold animate-fade-in"
                    style={{ animationDelay: "1.7s" }}
                  >
                    7:00 PM
                  </div>
                  <div
                    className="text-sm text-gray-500 mt-1 animate-fade-in"
                    style={{ animationDelay: "1.8s" }}
                  >
                    First Dance
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--primary)] group-hover:scale-125 transition-transform duration-300 z-10" />
                <div className="pl-8 text-left w-1/2">
                  <h3
                    className="text-xl font-serif text-[var(--text)] mb-2 animate-fade-in"
                    style={{ animationDelay: "1.9s" }}
                  >
                    First Dance
                  </h3>
                  <p
                    className="text-gray-600 animate-fade-in"
                    style={{ animationDelay: "2.0s" }}
                  >
                    The newlyweds&apos; first dance
                  </p>
                </div>
              </div>

              {/* Party */}
              <div className="flex items-center justify-start gap-6 group hover:transform hover:scale-105 transition-all duration-300 relative">
                <div className="text-right w-1/2 pr-8">
                  <div
                    className="text-2xl font-serif text-[var(--primary)] font-semibold animate-fade-in"
                    style={{ animationDelay: "2.1s" }}
                  >
                    8:00 PM
                  </div>
                  <div
                    className="text-sm text-gray-500 mt-1 animate-fade-in"
                    style={{ animationDelay: "2.2s" }}
                  >
                    Party
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--primary)] group-hover:scale-125 transition-transform duration-300 z-10" />
                <div className="pl-8 text-left w-1/2">
                  <h3
                    className="text-xl font-serif text-[var(--text)] mb-2 animate-fade-in"
                    style={{ animationDelay: "2.3s" }}
                  >
                    Party-party!
                  </h3>
                  <p
                    className="text-gray-600 animate-fade-in"
                    style={{ animationDelay: "2.4s" }}
                  >
                    Dancing and celebration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Venue
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Caffe Arabica</h3>
            <p className="text-gray-600 mb-8">
              Blk 1 Lot 2 Saint Rose Village 1 Market Area
              <br />
              Santa Rosa City Laguna
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              View Map
            </a>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-26 bg-[#f6f6f6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            RSVP
          </h2>
          <div className="max-w-xl mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc_QDS__Uw5NXweWaBDh9aoLcwz_gjMTkgYoic6CEqBm1llTQ/viewform?usp=header"
              width="100%"
              height="1000"
              frameBorder="0"
              scrolling="no"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600">
        <p>© 2024 Mira & Dzun&apos;s Wedding. All rights reserved.</p>
      </footer>
    </main>
  );
}
