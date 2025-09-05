export default function NoteList({ notes, onDelete, onEdit }) {
  return (
    <div className="grid gap-4">
      {notes.map((note) => (
        <div key={note.id} className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="text-gray-700">{note.content}</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => onEdit(note)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
