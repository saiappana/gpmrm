import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-amber-500" />
                <span>+91 79474 31474</span>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-amber-500" />
                <a
                  href="mailto:gpmodernricemill@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  gpmodernricemill@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <div className="flex items-start">
              <MapPinIcon className="h-5 w-5 mr-2 text-amber-500 mt-1" />
              <p>
                T S No 1980 Salabogam Street,
                <br />
                Thathimedu, Pillayarpalayam,
                <br />
                Kanchipuram, Tamil Nadu, India
                <br />
                Pincode: 631501
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} GP Modern Rice Mill. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
