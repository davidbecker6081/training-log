import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(React.StrictMode, { children: _jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(App, {}), _jsx(ReactQueryDevtools, { initialIsOpen: false })] }) }));
