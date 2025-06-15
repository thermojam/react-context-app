export function useDeleteTodo(setTodos) {
    return (id) => {
        fetch(`http://localhost:3001/todos/${id}`, { method: 'DELETE' })
            .then(() => setTodos(prev => prev.filter(todo => todo.id !== id)))
            .catch(err => console.error('Ошибка удаления:', err));
    };
}
