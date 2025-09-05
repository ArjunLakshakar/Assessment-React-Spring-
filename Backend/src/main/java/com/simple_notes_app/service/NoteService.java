package com.simple_notes_app.service;

import com.simple_notes_app.model.Note;

import java.util.List;
import java.util.Optional;

public interface NoteService {

    public List<Note> getAllNotes();

    public Optional<Note> getNoteById(Long id);

    public Note createNote(Note note);

    public Note updateNote(Long id, Note noteData);

    public void deleteNote(Long id);

    public Optional<Note> getByShareId(String shareId);
}
