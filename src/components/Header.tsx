import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full glass-effect z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-bold text-xl gradient-text group-hover:scale-105 transition-transform duration-300">
              KMS
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/documents/add-document" className="nav-link">
              Add Document
            </Link>
            <Link href="/documents/my-documents" className="nav-link">
              My Documents
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="auth-button-login">
              Login
            </Link>
            <Link href="/signup" className="button-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 