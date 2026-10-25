import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initNailAestheticsInteractivity } from './scripts/nailAestheticsInteractivity';

createRoot(document.getElementById('root')!).render(<App />);

// Ativação da camada de micro-interações de estética (scroll suave, botões táteis e responsividade)
initNailAestheticsInteractivity();
