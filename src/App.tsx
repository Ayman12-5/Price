/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Laptop, Cpu, MemoryStick, HardDrive, MonitorPlay, Loader2, Sparkles } from 'lucide-react';

interface LaptopSpecs {
  brand: string;
  cpu: string;
  ram: string;
  storage: string;
  gpu: string;
}

export default function App() {
  const [specs, setSpecs] = useState<LaptopSpecs>({
    brand: '',
    cpu: '',
    ram: '',
    storage: '',
    gpu: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpecs((prev) => ({ ...prev, [name]: value }));
  };

  const fetchModelPrediction = async (laptopSpecs: LaptopSpecs): Promise<string> => {
    // TODO: Insert your Machine Learning API endpoint (e.g., Flask, FastAPI, Django) right here.
    // Example: 
    // const response = await fetch('https://api.yourdomain.com/predict', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(laptopSpecs)
    // });
    // const data = await response.json();
    // return data.predicted_price;
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("$1,450.00");
      }, 2500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setPrediction(null);
    
    try {
      const price = await fetchModelPrediction(specs);
      setPrediction(price);
    } catch (error) {
      console.error("Failed to predict price", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow effects */}

      <div className="w-full max-w-3xl relative z-10">
        
        <header className="mb-10 text-center space-y-3">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-[11px] font-semibold tracking-[0.1em] text-slate-400 uppercase">AI-Powered</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-4xl font-bold tracking-[-0.03em] text-white m-0"
          >
            Laptop Price Predictor
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[15px] text-slate-400 mt-2 max-w-lg mx-auto"
          >
            Enter your desired specifications to get an instant, AI-driven market estimate.
          </motion.p>
        </header>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
           className="glass-panel rounded-3xl p-6 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Brand */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.1em] text-slate-400 font-semibold mb-2 ml-1">
                  <Laptop className="w-4 h-4 text-slate-400" />
                  <span>Brand</span>
                </label>
                <div className="relative">
                  <select 
                    name="brand" 
                    required
                    value={specs.brand}
                    onChange={handleInputChange}
                    className="glass-input w-full appearance-none"
                  >
                    <option value="" disabled>Select brand</option>
                    <option value="apple">Apple</option>
                    <option value="dell">Dell</option>
                    <option value="hp">HP</option>
                    <option value="lenovo">Lenovo</option>
                    <option value="asus">ASUS</option>
                    <option value="acer">Acer</option>
                    <option value="msi">MSI</option>
                    <option value="razer">Razer</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* CPU */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.1em] text-slate-400 font-semibold mb-2 ml-1">
                  <Cpu className="w-4 h-4 text-slate-400" />
                  <span>CPU Model</span>
                </label>
                <div className="relative">
                  <select 
                    name="cpu" 
                    required
                    value={specs.cpu}
                    onChange={handleInputChange}
                    className="glass-input w-full appearance-none"
                  >
                    <option value="" disabled>Select CPU</option>
                    <option value="intel-i3">Intel Core i3</option>
                    <option value="intel-i5">Intel Core i5</option>
                    <option value="intel-i7">Intel Core i7</option>
                    <option value="intel-i9">Intel Core i9</option>
                    <option value="amd-r3">AMD Ryzen 3</option>
                    <option value="amd-r5">AMD Ryzen 5</option>
                    <option value="amd-r7">AMD Ryzen 7</option>
                    <option value="amd-r9">AMD Ryzen 9</option>
                    <option value="apple-m1">Apple M1/M1 Pro/Max</option>
                    <option value="apple-m2">Apple M2/M2 Pro/Max</option>
                    <option value="apple-m3">Apple M3/M3 Pro/Max</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* RAM */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.1em] text-slate-400 font-semibold mb-2 ml-1">
                  <MemoryStick className="w-4 h-4 text-slate-400" />
                  <span>RAM (GB)</span>
                </label>
                <div className="relative">
                  <select 
                    name="ram" 
                    required
                    value={specs.ram}
                    onChange={handleInputChange}
                    className="glass-input w-full appearance-none"
                  >
                    <option value="" disabled>Select RAM capacity</option>
                    <option value="4">4 GB</option>
                    <option value="8">8 GB</option>
                    <option value="16">16 GB</option>
                    <option value="32">32 GB</option>
                    <option value="64">64 GB</option>
                    <option value="128">128 GB</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Storage */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.1em] text-slate-400 font-semibold mb-2 ml-1">
                  <HardDrive className="w-4 h-4 text-slate-400" />
                  <span>Storage</span>
                </label>
                <div className="relative">
                  <select 
                    name="storage" 
                    required
                    value={specs.storage}
                    onChange={handleInputChange}
                    className="glass-input w-full appearance-none"
                  >
                    <option value="" disabled>Select storage capacity</option>
                    <option value="256-ssd">256 GB SSD</option>
                    <option value="512-ssd">512 GB SSD</option>
                    <option value="1024-ssd">1 TB SSD</option>
                    <option value="2048-ssd">2 TB SSD</option>
                    <option value="4096-ssd">4 TB SSD</option>
                    <option value="hdd">HDD (Any capacity)</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* GPU */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.1em] text-slate-400 font-semibold mb-2 ml-1">
                  <MonitorPlay className="w-4 h-4 text-slate-400" />
                  <span>GPU</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="gpu"
                    required
                    placeholder="e.g., RTX 4070, Apple M3 Max 40-core, Integrated Intel Iris Xe"
                    value={specs.gpu}
                    onChange={handleInputChange}
                    className="glass-input w-full"
                  />
                </div>
              </div>

            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full h-[56px] bg-blue-500 hover:bg-blue-500 text-white rounded-[12px] font-semibold text-[16px] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:-translate-y-0 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-[2px] overflow-hidden flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Loader2 className="w-6 h-6 animate-spin text-white/90" />
                    </motion.div>
                  ) : (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      Predict Price
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </form>

          <AnimatePresence>
            {prediction && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", bounce: 0.3 }}
                className="mt-8 pt-8 text-center overflow-hidden"
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="block text-[14px] text-slate-400 mb-1"
                >
                  Estimated Market Value
                </motion.span>
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.3, bounce: 0.5 }}
                  className="text-5xl md:text-[48px] font-extrabold tracking-[-0.02em] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  {prediction}
                </motion.div>
                <div className="mt-4 text-xs text-center text-gray-500">
                  Based on current market trends and analysis.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </motion.div>
      </div>
    </div>
  );
}
