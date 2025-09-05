package com.simple_notes_app.repository;

import com.simple_notes_app.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NoteRepository extends JpaRepository<Note, Long> {
    Optional<Note> findByShareId(String shareId);
}
