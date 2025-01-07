import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Where developer communities{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                come together
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600">
              Create engaging discussions, share knowledge, and build stronger
              connections within your development community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href="/documents/add-document" 
                className="button-primary text-center w-full sm:w-auto px-6 py-3"
              >
                Add a document
              </Link>
              <Link 
                href="/documents/my-documents" 
                className="button-secondary text-center w-full sm:w-auto px-6 py-3"
              >
                Browse my documents
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-100">
              <div className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  10M+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Users</div>
              </div>
              <div className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Communities</div>
              </div>
              <div className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  1M+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Documents</div>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative h-[300px] lg:h-[500px] glass-effect rounded-xl lg:rounded-2xl overflow-hidden mt-8 lg:mt-0">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
