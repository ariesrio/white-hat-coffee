import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import coffeeDrink from '../assets/coffee-drink-image.png';
import coffeeShop from '../assets/coffee-shop-image.png';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* About Us Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
        <div className="h-80 rounded-lg overflow-hidden">
          <img 
            src={coffeeShop} 
            alt="Coffee Shop"
            className="w-full h-full object-cover"
          />
        </div>

          {/* Right - Content */}
          <div className="bg-amber-900 text-white rounded-lg p-12">
            <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>
            <p className="text-lg leading-relaxed mb-8">
              Discover the heart behind our journey. Learn how we started, what drives us, and the values that shape everything we do
            </p>
            <Button variant="dark">
              about us
            </Button>
          </div>
        </div>
      </section>

      {/* Order Now Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8 items-center">
          {/* Left - Content */}
          <div className="bg-yellow-100 rounded-lg p-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">ORDER NOW</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Join now and enjoy affordable and delicious drink starting at PHP 99!
            </p>
            <Button variant="outline">
              join now
            </Button>
          </div>

          {/* Right - Image */}
          <div className="h-80 rounded-lg overflow-hidden">
            <img 
              src={coffeeDrink} 
              alt="Coffee Drink"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p className="text-sm">White Hat Coffee, 2026</p>
        </div>
      </footer>
    </div>
  );
}
