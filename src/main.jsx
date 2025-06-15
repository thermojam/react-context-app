import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { TodosContextProvider } from './context/TodosContext';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodosContextProvider>
            <App />
        </TodosContextProvider>
    </React.StrictMode>
);
