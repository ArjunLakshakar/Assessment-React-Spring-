package com.simple_notes_app.service;

import com.simple_notes_app.model.Note;
import com.simple_notes_app.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NoteRepository repo;

    @Override
    public List<Note> getAllNotes() {
        return repo.findAll();
    }

    @Override
    public Optional<Note> getNoteById(Long id) {
        return repo.findById(id);
    }

    @Override
    public Note createNote(Note note) {
        return repo.save(note);
    }

    @Override
    public Note updateNote(Long id, Note noteData) {
        Note note = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Note not found"));

        note.setTitle(noteData.getTitle());
        note.setContent(noteData.getContent());

        return repo.save(note);
    }

    @Override
    public void deleteNote(Long id) {
        repo.deleteById(id);
    }

    @Override
    public Optional<Note> getByShareId(String shareId) {
        return repo.findByShareId(shareId);
    }
}
