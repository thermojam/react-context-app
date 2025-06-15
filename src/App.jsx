import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { use } from 'react';
import { TodosContext } from './context/TodosContext';
import { Spinner } from './components/Spinner';

export const App = () => {
    const {
        todos,
        loading,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodoComplete,
        handleSearch,
        setSortAlpha,
        sortAlpha,
    } = use(TodosContext);

    return (
        <div className="max-w-[980px] mx-auto bg-[#e0e5ec] shadow-inset rounded-xl text-gray-800 p-6 sm:p-4 mt-20">
            <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-teal-400 to-teal-800 text-transparent bg-clip-text">
                Todos list context
            </h2>

            {loading ? (
                <Spinner />
            ) : (
                <>
                    <TodoForm onAdd={addTodo} />
                    <div className="flex gap-2 items-center mt-4 mb-6">
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={handleSearch}
                            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
                        />
                        <button
                            onClick={() => setSortAlpha((prev) => !prev)}
                            className="px-4 py-2 bg-violet-400 rounded hover:bg-violet-800 text-white cursor-pointer"
                        >
                            {sortAlpha ? 'abc' : 'sort'}
                        </button>
                    </div>

                    <ul className="space-y-4">
                        {todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onUpdate={updateTodo}
                                onToggleComplete={toggleTodoComplete}
                                onDelete={deleteTodo}
                            />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};
