import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { TodosProvider } from './context/TodosContext';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodosProvider>
            <App />
        </TodosProvider>
    </React.StrictMode>
);
