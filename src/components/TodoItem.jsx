import { useState } from 'react';

export const TodoItem = ({ todo, onUpdate, onToggleComplete, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.title);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && editText.trim()) {
            onUpdate(todo.id, editText.trim());
            setIsEditing(false);
        } else if (e.key === 'Escape') {
            setEditText(todo.title);
            setIsEditing(false);
        }
    };

    return (
        <li className="flex items-center gap-3 bg-gray-800 p-4 rounded shadow text-white">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id, !todo.completed)}
                className="w-5 h-5 accent-teal-500 cursor-pointer"
            />

            {isEditing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="flex-1 px-2 py-1 rounded bg-gray-700 text-white"
                />
            ) : (
                <span
                    className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
                    onDoubleClick={() => setIsEditing(true)}
                >
          {todo.title}
        </span>
            )}

            <button onClick={() => setIsEditing(true)} title="Edit" className="hover:text-blue-400 cursor-pointer">
                🖋️
            </button>
            <button onClick={() => onDelete(todo.id)} title="Delete" className="hover:text-red-500 cursor-pointer">
                🗑️
            </button>
        </li>
    );
};
