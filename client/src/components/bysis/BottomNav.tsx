import { useEffect } from 'react';

interface BottomNavProps {
  active: 'vision' | 'ai' | null;
  onToggleVision: () => void;
  onToggleAI: () => void;
}

export default function BottomNav({ active, onToggleVision, onToggleAI }: BottomNavProps) {
  // Sync active state to body classes for CSS to respond
  useEffect(() => {
    if (active === 'ai') {
      document.body.classList.add('ai-open');
      document.body.classList.remove('vision-open');
    } else if (active === 'vision') {
      document.body.classList.add('vision-open');
      document.body.classList.remove('ai-open');
    } else {
      document.body.classList.remove('ai-open', 'vision-open');
    }
  }, [active]);

  return (
    <nav className="bottom-nav" aria-label="شريط التنقل السفلي">
      <div className="nav-rail" aria-label="أيقونات التنقل الأساسية">
        <svg className="rail-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0.8 H97.5 C99.2 0.8 100 3.8 100 10.5 V76 C100 91 107 99 124 99" />
        </svg>
        
        <button 
          className={`nav-tab ${active === 'vision' ? 'selected vision-tab' : 'vision-tab'}`} 
          aria-label="Vision" 
          onClick={onToggleVision}
        >
          <span className="vision-nav-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5C7 5 2.73 8.11 1 12.5c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12c-2.49 0-4.5-2.01-4.5-4.5S9.51 8 12 8s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" />
            </svg>
          </span>
        </button>

        <button 
          className="nav-tab" 
          aria-label="الحساب"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </button>

        <button 
          className="nav-tab" 
          aria-label="السلة"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 4V2m10 2v2M3 6h18l-1.5 12H4.5L3 6zm4 0v12m6-12v12" />
          </svg>
          <span className="cart-badge">0</span>
        </button>

        <button 
          className="nav-tab" 
          aria-label="القائمة"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      <div className="ai-dock">
        <button 
          className={`nav-tab ai-tab ${active === 'ai' ? 'selected' : ''}`} 
          aria-label="Bysis AI" 
          onClick={onToggleAI}
        >
          <span className="ai-mark ai-mark-image" aria-hidden="true">
            <img 
              src="data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23176fb7'/%3E%3C/svg%3E" 
              alt="" 
            />
          </span>
        </button>
      </div>
    </nav>
  );
}
