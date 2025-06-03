import { Countdown } from "@/components/countdown";
import { RSVPForm } from "@/components/rsvp-form";
import { ImageGallery } from "@/components/image-gallery";
import { Carousel } from "@/components/carousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Carousel />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Mira & Dzun</h1>
            <p className="text-xl md:text-2xl mb-8">September 6, 2024</p>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Wedding Program
          </h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-semibold">3:30 PM</div>
              <div className="flex-1">Assembly</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-semibold">4:00 PM</div>
              <div className="flex-1">Ceremony</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-semibold">5:00 PM</div>
              <div className="flex-1">Photos</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-semibold">6:00 PM</div>
              <div className="flex-1">Dinner and Toasts</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-semibold">7:00 PM</div>
              <div className="flex-1">First Dance</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-semibold">8:00 PM</div>
              <div className="flex-1">Party-party!</div>
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
      <section id="rsvp" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            RSVP
          </h2>
          <div className="max-w-md mx-auto">
            <RSVPForm />
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
