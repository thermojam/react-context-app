export function useFetchTodos(setTodos, setLoading) {
    return () => {
        setLoading(true);
        fetch('http://localhost:3001/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.error('Ошибка загрузки:', err))
            .finally(() => setLoading(false));
    };
}
