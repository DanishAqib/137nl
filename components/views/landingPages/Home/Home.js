import React from 'react';
import { Sparkles, Globe, Mail, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">137.NL</h1>
          <p className="text-sm text-slate-500 mb-2">137.NL is a formal trading name of Gayatri's Mahl B.V.</p>
          <p className="text-lg text-slate-600">
            Digital studio creating AI-powered apps for reflection, insight, and personal growth.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* About Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">About 137.NL</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <p className="text-slate-700 leading-relaxed">
              137.NL is a creative technology studio based in Rosmalen, The Netherlands, 
              dedicated to building meaningful digital experiences that blend modern artificial 
              intelligence with ancient wisdom traditions.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our mission is to make self-reflection and guidance accessible to everyone — 
              through intuitive, beautifully designed apps that inspire awareness and insight.
            </p>
          </div>
        </section>

        {/* Our Apps Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Our Apps</h2>
          </div>
          
          <div className="space-y-6">
            {/* Tarot.Pro */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Tarot.Pro</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A professional-grade Tarot reading experience for deep insight and personal discovery. 
                Available soon on Android and iOS, Tarot.Pro brings personalized readings, dynamic spreads, 
                and AI-powered interpretations tailored to each user's question.
              </p>
              <a 
                href="https://www.tarot.pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Explore the web version → www.tarot.pro
              </a>
            </div>

            {/* FreeIChing.com */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">FreeIChing.com</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A modern, free online version of the ancient I Ching — the Book of Changes. 
                Users can ask a question, receive a hexagram, and explore rich interpretations 
                designed for today's world.
              </p>
              <a 
                href="https://www.freeiching.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Visit → www.freeiching.com
              </a>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Vision</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
            <p className="text-slate-700 leading-relaxed">
              We believe technology can deepen self-understanding and connect modern users with 
              timeless sources of wisdom. Our goal is to create digital tools that help people pause, 
              reflect, and grow — combining ancient symbolic systems with AI to make insight more 
              accessible and personal.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
          <p className="text-sm text-slate-500 mb-4">137.NL is a formal trading name of Gayatri's Mahl B.V.</p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">137.NL B.V.</p>
                  <p className="text-slate-600">Rosmalen, The Netherlands <br/>KVK 35031168</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a 
                  href="mailto:martijn@137.nl" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  martijn@137.nl
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a 
                  href="https://www.137.nl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  www.137.nl
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-slate-600">
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="https://www.tarot.pro/privacy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a 
              href="https://www.tarot.pro/terms/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} 137.NL B.V. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;