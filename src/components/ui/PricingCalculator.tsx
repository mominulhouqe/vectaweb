"use client"
import { useState } from 'react';

const PricingCalculator = () => {
  const [size, setSize] = useState<number>(1);
  const [features, setFeatures] = useState<number>(0);
  const [price, setPrice] = useState<number>(100);

  const calculatePrice = () => {
    return (100 + size * 50 + features * 20).toFixed(2);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Interactive Pricing Calculator</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Size</label>
          <input
            type="range"
            min="1"
            max="5"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-center">Size: {size}</p>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Features</label>
          <input
            type="number"
            min="0"
            value={features}
            onChange={(e) => setFeatures(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
          <p className="text-center">Features: {features}</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">Estimated Price: ${calculatePrice()}</p>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
