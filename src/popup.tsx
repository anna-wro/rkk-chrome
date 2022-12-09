import './popup.css';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';

const root = document.querySelector<HTMLDivElement>('#container');

if (root) {
  createRoot(root).render(<App />);
}
