import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl border border-gray-200 shadow-lg p-10">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
            
            {/* Logo + About */}
            <div>
              <img
                src="https://i.ibb.co/8LFPyRfP/image-removebg-preview-4.png"
                alt="Petoba Logo"
                className="h-14 w-auto mb-4 mx-auto md:mx-0"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                OrderKaro KOT & Billing — a smart kitchen order ticket and billing solution.
              </p>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">Company</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>OrderKaro</li>
                <li>Hariharpur Chauraha lachhirampur Azamgarh</li>
                <li>Uttar Pradesh, India</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">Contact</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>📞 +91 6306869031</li>
                <li>📧 admin@orderkaro.live</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">Quick Links</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
                <li><a href="/membership" className="hover:text-blue-600 transition">Pricing</a></li>
                <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-gray-200 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © 2025 OrderKaro KOT & Billing · All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
