import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-800 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <Image
            src="/IndustrialCoatingsInc-02.png"
            alt="American Industrial Coatings Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold">American Industrial Coatings Inc.</h1>
            <p className="text-sm text-gray-300">
              Specializing in Abrasive Blasting & Structural Steel Painting
            </p>
          </div>
        </div>
      </header>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-lg">
            <li>- Abrasive Blasting</li>
            <li>- Structural Steel Painting</li>
            <li>- Bridge Coating Projects</li>
            <li>- Epoxy & Zinc-Based Systems</li>
            <li>- Quality Control & Compliance</li>
            <li>- Polymer Thin Deck Overlay</li>
            <li>- Chip Seal</li>
            <li>- Water Towers</li>
            <li>- Water Dams</li>
            <li>- Train Cars</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Get Updates via SMS</h2>
          <form className="max-w-md space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="(123) 456-7890"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <p className="text-sm text-gray-700">
              By providing your phone number, you agree to receive SMS messages from American Industrial Coatings Inc. related to project updates, scheduling, and company news. Message frequency may vary. Message and data rates may apply. Reply STOP to unsubscribe. For HELP, text HELP or visit our <a href="/privacy-policy" className="underline">Privacy Policy</a> and <a href="/terms-of-service" className="underline">Terms of Service</a>.
            </p>
            <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Moved Contact Us section above logos */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">Phone: 219-256-5116</p>
          <p className="mb-2">Fax: 219-259-0158</p>
          <p className="mb-2">E-Mail: kris@aicoatings.ai</p>
          <p>Address: 1215 Birch Drive Suite B, Schererville, IN 46375</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 flex justify-center items-center space-x-8">
          <Image
            src="/AMPP Membership Logo.png"
            alt="AMPP Member Badge"
            width={120}
            height={120}
          />
          <Image
            src="/AMPP_QPLogo_QP1.png"
            alt="AMPP QP1 Field Application"
            width={120}
            height={120}
          />
          <Image
            src="/AMPP_QPLogo_QP2.png"
            alt="AMPP QP2 Field Removal"
            width={120}
            height={120}
          />
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="container mx-auto px-4 space-x-4">
          <a href="/privacy-policy" className="text-gray-300 hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-300 hover:underline">Terms of Service</a>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} American Industrial Coatings Inc. All rights reserved.</p>
      </footer>
    </main>
  );
}