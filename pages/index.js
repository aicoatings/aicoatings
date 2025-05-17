import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-800 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <Image
            src="/IndustrialCoatingsInc-02.png"
            alt="American Industrial Coatings Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold">American Industrial Coatings Inc.</h1>
            <p className="text-sm text-gray-300">Specializing in Abrasive Blasting & Structural Steel Painting</p>
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
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg max-w-2xl">
            American Industrial Coatings Inc. is a leader in industrial protective coatings. We work with state DOTs, federal agencies,
            and private infrastructure developers to deliver high-performance surface preparation and coating solutions. Our certified
            team ensures safety, quality, and environmental compliance on every job site.
          </p>
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
              By providing your phone number, you agree to receive SMS messages from American Industrial Coatings Inc. related to project updates, scheduling, and company news. Message frequency may vary. Reply STOP to opt out. Your information will not be shared or sold.
            </p>
            <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">Phone: (555) 123-4567</p>
          <p className="mb-2">Email: info@aicoatings.ai</p>
          <p>Address: 123 Coatings Blvd, Industrial City, USA</p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} American Industrial Coatings Inc. All rights reserved.</p>
      </footer>
    </main>
  );
}
