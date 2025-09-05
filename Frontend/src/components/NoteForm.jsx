import { useState, useEffect } from "react";

export default function NoteForm({ onSave, editingNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    onSave({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{editingNote ? "Edit Note" : "Add Note"}</h2>
      <input
        type="text"
        placeholder="Title"
        className="border rounded w-full p-2 mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="border rounded w-full p-2 mb-2"
        rows="3"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        {editingNote ? "Update" : "Add"}
      </button>
    </form>
  );
}
