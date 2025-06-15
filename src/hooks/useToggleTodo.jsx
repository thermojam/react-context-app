export function useToggleTodo(setTodos) {
    return (id, newStatus) => {
        fetch(`http://localhost:3001/todos/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: newStatus }),
        })
            .then(res => res.json())
            .then(updated => setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: updated.completed } : t))));
    };
}
