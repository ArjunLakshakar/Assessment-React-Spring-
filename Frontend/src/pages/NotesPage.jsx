import { useEffect, useState } from "react";
import { PlusCircleIcon, PencilSquareIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import axios from "axios";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const baseURL = "https://assessment-react-spring-1.onrender.com/api/notes";

  useEffect(() => {
    fetchNotes();
  }, []);

  // Fetch notes
  const fetchNotes = async () => {
    try {
      const res = await axios.get(baseURL);
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Save or update note
  const handleSave = async (note) => {
    try {
      if (editingNote) {
        await axios.put(`${baseURL}/${editingNote.id}`, note);
        setEditingNote(null);
      } else {
        await axios.post(baseURL, note);
      }
      fetchNotes();
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  // Delete note
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="flex items-center justify-center gap-3">
          <DocumentTextIcon className="w-12 h-12 text-indigo-600" />
          <h1 className="text-5xl font-bold text-gray-800">Notes Manager</h1>
        </div>
        <p className="text-gray-500 mt-3 text-lg">
          ✨ Organize your thoughts, tasks, and ideas in one place
        </p>
      </header>

      {/* Main Card */}
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur shadow-xl rounded-3xl p-8 border border-gray-200">
        {/* Note Form Section */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-indigo-700 mb-4">
            {editingNote ? (
              <>
                <PencilSquareIcon className="w-6 h-6 text-indigo-500" /> Edit Note
              </>
            ) : (
              <>
                <PlusCircleIcon className="w-6 h-6 text-green-500" /> Add a New Note
              </>
            )}
          </h2>
          <NoteForm onSave={handleSave} editingNote={editingNote} />
        </section>

        {/* Notes List Section */}
        <section>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-indigo-700 mb-6">
            <DocumentTextIcon className="w-6 h-6 text-indigo-500" />
            Your Notes
          </h2>
          <NoteList
            notes={notes}
            onDelete={handleDelete}
            onEdit={setEditingNote}
          />
        </section>
      </div>
    </div>
  );
}
