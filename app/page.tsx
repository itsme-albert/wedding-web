import { Section } from "@/components/ui/section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Story Section */}
      <Section className="py-20">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Our Story
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              [Your beautiful love story will be added here]
            </p>
          </div>
          <div className="relative h-[400px] bg-gray-100 rounded-lg wedding-card">
            {/* Placeholder for couple's photo */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Photo Coming Soon
            </div>
          </div>
        </div>
      </Section>

      {/* Event Details Section */}
      <Section className="py-20 bg-pink-50">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Event Details
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="wedding-card p-8">
            <h3 className="text-2xl font-serif mb-4">Ceremony</h3>
            <p className="text-gray-600 mb-4">[Ceremony Location]</p>
            <p className="text-gray-600 mb-4">[Date and Time]</p>
            <div className="h-[300px] bg-gray-100 rounded-lg">
              {/* Google Maps iframe will be added here */}
              <div className="h-full flex items-center justify-center text-gray-400">
                Map Coming Soon
              </div>
            </div>
          </div>
          <div className="wedding-card p-8">
            <h3 className="text-2xl font-serif mb-4">Reception</h3>
            <p className="text-gray-600 mb-4">[Reception Location]</p>
            <p className="text-gray-600 mb-4">[Date and Time]</p>
            <div className="h-[300px] bg-gray-100 rounded-lg">
              {/* Google Maps iframe will be added here */}
              <div className="h-full flex items-center justify-center text-gray-400">
                Map Coming Soon
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* RSVP Section */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">RSVP</h2>
          <p className="text-gray-600 mb-8">
            Please respond by [RSVP deadline] to let us know if you can make it
            to our special day.
          </p>
          <div className="h-[600px] bg-gray-100 rounded-lg wedding-card">
            {/* Google Form iframe will be added here */}
            <div className="h-full flex items-center justify-center text-gray-400">
              RSVP Form Coming Soon
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600">
        <p>© 2024 Mira & Dzun&apos;s Wedding. All rights reserved.</p>
      </footer>
    </div>
  );
}
