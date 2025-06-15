import { useEffect, useRef, useState } from 'react';
import { useFetchTodos } from './useFetchTodos';
import { useAddTodo } from './useAddTodo';
import { useUpdateTodo } from './useUpdateTodo';
import { useDeleteTodo } from './useDeleteTodo';
import { useToggleTodo } from './useToggleTodo';
import { useDebounce } from './useDebounce';

export function useTodosProvider() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [sortAlpha, setSortAlpha] = useState(false);
    const searchTimeout = useRef(null);
    const debouncedSearch = useDebounce(search, 400);

    const fetchTodos = useFetchTodos(setTodos, setLoading);
    const addTodo = useAddTodo(setTodos);
    const updateTodo = useUpdateTodo(setTodos);
    const deleteTodo = useDeleteTodo(setTodos);
    const toggleTodoComplete = useToggleTodo(setTodos);

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        clearTimeout(searchTimeout.current);
        searchTimeout.current = setTimeout(() => setSearch(value), 300);
    };

    const filteredTodos = todos
        .filter(todo => todo.title.toLowerCase().includes(debouncedSearch))
        .sort((a, b) => (sortAlpha ? a.title.localeCompare(b.title) : 0));

    return {
        todos: filteredTodos,
        loading,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodoComplete,
        handleSearch,
        sortAlpha,
        setSortAlpha,
    };
}
