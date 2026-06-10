import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// FIX: Hapus cache lokal secara paksa 1 kali agar di HP tidak error / tidak perlu mode samaran.
if (!localStorage.getItem('cache_cleared_v1')) {
  localStorage.clear();
  localStorage.setItem('cache_cleared_v1', 'true');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
