import { createRoot } from 'react-dom/client';

import App from './components/App/App';

// eslint-disable-next-line
const root = createRoot(document.getElementById('app')!);

root.render(<App />);
