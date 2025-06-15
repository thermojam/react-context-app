export function useUpdateTodo(setTodos) {
    return (id, updatedTitle) => {
        fetch(`http://localhost:3001/todos/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: updatedTitle }),
        })
            .then(res => res.json())
            .then(data => setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, ...data } : todo))))
            .catch(err => console.error('Ошибка обновления:', err));
    };
}
