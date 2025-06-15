export function useAddTodo(setTodos) {
    return (title) => {
        const newTodo = { title, completed: false };
        fetch('http://localhost:3001/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo),
        })
            .then(res => res.json())
            .then(data => setTodos(prev => [...prev, data]))
            .catch(err => console.error('Ошибка добавления:', err));
    };
}
