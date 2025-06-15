import { useState } from 'react';

export const TodoForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title.trim());
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New task"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
            />
            <button type="submit" className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded text-white cursor-pointer">
                add
            </button>
        </form>
    );
};
