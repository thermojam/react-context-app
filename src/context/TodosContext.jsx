import { createContext } from 'react';
import { useTodosProvider } from '../hooks/useTodosProvider';

export const TodosContext = createContext(null);

export function TodosContextProvider({ children }) {
    const value = useTodosProvider();
    return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
}
