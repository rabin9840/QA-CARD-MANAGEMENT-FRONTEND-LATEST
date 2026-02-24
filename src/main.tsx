import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import App from './App.tsx';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@/assets/css/variable.css';
import '@/assets/css/common.css';
import '@/assets/css/responsive.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CookiesProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <ToastContainer />
                    <App />
                </BrowserRouter>
            </Provider>
        </CookiesProvider>
    </StrictMode>
);
