
import i18n from './i18n/index';

// Add custom animations to the global CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(-5%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
  
  @keyframes spin-slow {
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-bounce-slow {
    animation: bounce-slow 2s infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 6s linear infinite;
  }
`;
document.head.appendChild(style);

export default i18n;
