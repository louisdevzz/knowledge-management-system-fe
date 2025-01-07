import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              KMS
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Your gateway to knowledge management and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Quick Links</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/docs" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Legal</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-wrap lg:justify-between">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              KMS
            </h3>
            <p className="text-gray-600 text-sm mt-3">
              Your gateway to knowledge management and learning.
            </p>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Quick Links</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/docs" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Legal</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} KMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 