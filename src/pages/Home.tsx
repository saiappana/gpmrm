import { Award, Leaf, Users } from 'lucide-react';
import homeImage from "../public/paddyImage1.jpg"

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">GP Modern Rice Mill</h1>
            <p className="text-xl">Premium Rice Processing with Modern Technology</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">State-of-the-art technology ensuring premium quality rice processing</p>
            </div>
            <div className="text-center">
              <Leaf className="w-12 h-12 mx-auto text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-gray-600">Committed to environmental responsibility and sustainable farming</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Farmer Partnership</h3>
              <p className="text-gray-600">Strong relationships with local farmers ensuring the best raw materials</p>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Legacy</h3>
            <p className="text-gray-700 leading-relaxed">
              Established in 1970, GPMRM (G Palani Modern Rice Mill) has been delivering premium-quality rice for over five decades. In 2019, we modernized our processes with state-of-the-art technology to ensure superior quality and sustainability. Combining tradition with innovation, we take pride in being a trusted name for purity, taste, and excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}