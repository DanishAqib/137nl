import React from 'react';
import { Home, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-12 space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <AlertCircle className="w-20 h-20 text-blue-600" />
          </div>
          
          {/* 404 Heading */}
          <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
          
          {/* Message */}
          <h2 className="text-2xl font-bold text-slate-900">
            Oops! Looks like you followed a bad link.
          </h2>
          
          <p className="text-slate-600 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <p className="text-slate-500">
            If you think this is a problem with us, please{' '}
            <Link
              href="mailto:contact@137.nl" 
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              let us know
            </Link>
          </p>
          
          {/* Go Home Button */}
          <div className="pt-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
          </div>
        </div>
        
        {/* Additional Help Text */}
        <p className="mt-8 text-slate-500 text-sm">
          Return to{' '}
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            137.NL homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;