import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

export function useTodosProvider() {
    const API_URL = 'http://localhost:3001/todos';

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [sortAlpha, setSortAlpha] = useState(false);

    const search = useDebounce(searchInput);

    useEffect(() => {
        setLoading(true);
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.error('Ошибка загрузки:', err))
            .finally(() => setLoading(false));
    }, []);

    const addTodo = (title) => {
        const newTodo = { title, completed: false };
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo),
        })
            .then(res => res.json())
            .then(data => setTodos(prev => [...prev, data]))
            .catch(err => console.error('Ошибка добавления:', err));
    };

    const updateTodo = (id, updatedTitle) => {
        fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: updatedTitle }),
        })
            .then(res => res.json())
            .then(data =>
                setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, ...data } : todo)))
            )
            .catch(err => console.error('Ошибка обновления:', err));
    };

    const toggleTodoComplete = (id, newStatus) => {
        fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: newStatus }),
        })
            .then(res => res.json())
            .then(updated =>
                setTodos(prev =>
                    prev.map(todo => (todo.id === id ? { ...todo, completed: updated.completed } : todo))
                )
            );
    };

    const deleteTodo = (id) => {
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(() => setTodos(prev => prev.filter(todo => todo.id !== id)))
            .catch(err => console.error('Ошибка удаления:', err));
    };

    const handleSearch = (e) => {
        setSearchInput(e.target.value.toLowerCase());
    };

    const filteredTodos = todos
        .filter(todo => todo.title.toLowerCase().includes(search))
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
