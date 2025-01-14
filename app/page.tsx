import Quote from './components/Quote';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <header className="text-center mb-8 sm:mb-12 md:mb-16 w-full">
        <h1 className="site-title mb-4 sm:mb-6">
          SOUL WHISPERS
        </h1>
        <p className="site-subtitle">
          for every unique soul walking their own path ✨
        </p>
      </header>
      
      <main className="w-full flex-1 flex items-center">
        <Quote />
      </main>

      <footer className="mt-8 sm:mt-12 md:mt-16 text-center w-full px-4">
        <p className="footer-text">
          <span className="footer-crafted">
            Crafted To Inspire, Designed to endure 💫
          </span>
        </p>
      </footer>
    </div>
  );
}
