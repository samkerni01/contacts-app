import { createRoot } from 'react-dom/client';

import App from './components/App/App';

const root = createRoot(document.getElementById('app')!);
root.render(<App />);
