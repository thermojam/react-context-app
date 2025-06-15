import { createContext, useContext } from 'react';
import { useTodosProvider } from '../hooks/useTodosProvider';

export const TodosContext = createContext();

export function TodosProvider({ children }) {
    const value = useTodosProvider();
    return (
        <TodosContext.Provider value={value}>
            {children}
        </TodosContext.Provider>
    );
}

export const useTodos = () => useContext(TodosContext);
