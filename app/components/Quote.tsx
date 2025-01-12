'use client';

import { useState, useEffect } from 'react';

interface Quote {
  q: string;
  a: string;
  h: string;
}

export default function Quote() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const fetchNewQuote = async () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setIsLoading(true);
    }, 300);

    try {
      const response = await fetch('/api/quote');
      const data = await response.json();
      
      await new Promise(resolve => setTimeout(resolve, 600));
      
      setQuote(data);
      setIsLoading(false);
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
      setIsLoading(false);
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div className="quote-container">
      <div 
        className={`quote-content ${isTransitioning ? 'loading' : ''}`}
        style={{ 
          willChange: 'transform, opacity',
          transformOrigin: 'center center'
        }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center h-[clamp(200px,40vh,400px)]">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            <p className="quote-text font-[var(--font-playfair)]">
              {quote?.q}
            </p>
            <p className="quote-author font-[var(--font-dancing)]">
              ― {quote?.a}
            </p>
            <div className="flex justify-center px-4">
              <button
                onClick={fetchNewQuote}
                disabled={isTransitioning}
                className="next-quote-btn text-white flex items-center justify-center gap-2"
              >
                <span>Next Quote</span>
                <span className="animate-pulse">✨</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 