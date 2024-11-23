import { CircleDot, Info } from 'lucide-react';
import grading from "../public/grading.jpg"
import parboiling from "../public/parboiling.jpg"
import preCleaning from "../public/pre-cleaning.jpg"
import dehusking from "../public/dehusking.jpg"


export default function Process() {
  const steps = [
    {
      title: "Pre-Cleaning",
      description: "Removal of impurities like stones, soil, chaff, and other foreign materials using destoners and paddy cleaners. This ensures only clean paddy enters the milling process.",
      image: preCleaning
    },
    {
      title: "Parboiling (Optional)",
      description: "A hydrothermal treatment where paddy is soaked, steamed, and dried. This process gelatinizes the starch, improves milling recovery, and enhances nutritional value.",
      image: parboiling
    },
    {
      title: "De-husking/De-hulling",
      description: "The outer husk is carefully removed from paddy using advanced rubber rollers. We continuously strive to achieve an 85-90% de-husking efficiency, ensuring minimal grain breakage and superior quality in every batch.",
      image: dehusking
    },
    {
      title: "Paddy Separation",
      description: "Paddy separators use differences in specific gravity and buoyancy to separate brown rice from unhusked paddy. Unhusked grains are returned to the husker.",
      image: "https://grainsco.com/wp-content/uploads/2023/08/DRTA-Main.webp"
    },
    {
      title: "Whitening and Polishing",
      description: "Multiple passes through whitening machines are used to remove the bran layer. Friction or abrasive polishers then provide the desired glossy appearance.",
      image: "https://rice-processing.com/wp-content/uploads/2020/07/vertical-Iron-roller-Rice-Whitener.jpg"
    },
    {
      title: "Grading",
      description: "Length graders and precision sieve graders sort rice by size. Broken grains are separated, and head rice is classified into different grades based on size and quality.",
      image:grading
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://www.nextechagrisolutions.com/blog/wp-content/uploads/2017/08/1024.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4">
            Modern Rice Milling Process
          </h1>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            {/* <h2 className="text-3xl font-bold mb-6">State-of-the-Art Milling Process</h2> */}
            <p className="text-gray-600">
              Our modern rice mill employs advanced technology to ensure optimal milling recovery and superior quality rice products. We maintain strict quality control at every step of the process.
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="rounded-lg shadow-lg w-full h-[400px]  object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <CircleDot className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-9">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-amber-50 p-8 rounded-lg">
    <div className="flex items-start gap-4">
        <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
        <div>
            <h3 className="text-2xl font-semibold mb-4">Value Addition & Benefits</h3>
            <div className="space-y-4 text-gray-700">
                <p>
                    Our advanced milling process ensures superior end products:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Premium Quality: Consistent grain size with minimal breakage ensures better market value</li>
                    <li>Nutritional Preservation: Optimal processing maintains essential nutrients and vitamins</li>
                    <li>Extended Shelf Life: Proper moisture control and cleaning extends storage duration</li>
                    <li>Customer Satisfaction: Superior taste, aroma, and cooking quality in every batch</li>
                </ul>
                <p>
                Our unwavering focus on quality and consistency has established us as a trusted partner for premium rice products, reflected in the superior cooking experience and satisfaction of our customers
                </p>
            </div>
        </div>
    </div>
</div>
        </div>
      </section>
    </div>
  );
}