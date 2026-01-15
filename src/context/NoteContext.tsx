import { createContext, useState, useEffect, useCallback, type ReactNode } from "react";

import { notes as data } from "../data/notes";
import { CategoryColors, type Note } from "../types/note-object";
import { STORAGE_KEYS } from "../constants/storage";

interface NoteContextProps {
  notes: Note[];
  createNote: (note: Omit<Note, "id" | "creationDate" | "creationTime" | "creationDay" | "timestamp" | "color">) => void;
  updateNote: (note: Note) => void;
  deleteNote: (id: number) => void;
}

export const NoteContext = createContext<NoteContextProps | null>(null);

interface NoteContextProviderProps {
  children: ReactNode;
}

/**
 * Load notes from localStorage or return default data
 */
const loadNotesFromStorage = (): Note[] => {
  try {
    const storedNotes = localStorage.getItem(STORAGE_KEYS.NOTES);
    if (storedNotes) {
      const parsedNotes = JSON.parse(storedNotes) as Note[];
      // Validate that parsed data is an array
      if (Array.isArray(parsedNotes)) {
        return parsedNotes;
      }
    }
  } catch (error) {
    console.warn("Failed to load notes from localStorage:", error);
  }
  return data;
};

/**
 * Save notes to localStorage
 */
const saveNotesToStorage = (notesToSave: Note[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notesToSave));
  } catch (error) {
    console.warn("Failed to save notes to localStorage:", error);
    // Handle quota exceeded error
    if (error instanceof DOMException && error.name === "QuotaExceededError") {
      console.error("localStorage quota exceeded. Please clear some space.");
    }
  }
};

export function NoteContextProvider({ children }: NoteContextProviderProps) {
  const [notes, setNotes] = useState<Note[]>(() => loadNotesFromStorage());

  // Generate unique ID using timestamp to avoid conflicts even if notes are deleted
  const generateId = useCallback((existingNotes: Note[]): number => {
    if (existingNotes.length === 0) return 0;
    const maxId = Math.max(...existingNotes.map(n => n.id));
    return maxId + 1;
  }, []);

  const createNote = useCallback((note: Omit<Note, "id" | "creationDate" | "creationTime" | "creationDay" | "timestamp" | "color">) => {
    const now = new Date();
    const timestamp = now.getTime();
    const color = CategoryColors[note.category];
    
    setNotes((prevNotes) => {
      const newNote: Note = {
        id: generateId(prevNotes),
        title: note.title.trim(),
        description: note.description.trim(),
        color,
        category: note.category, 
        creationDate: now.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
        }),
        creationTime: now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        creationDay: now.toLocaleDateString("en-US", {
          weekday: "short",
        }),
        timestamp,
      };
      
      const updatedNotes = [newNote, ...prevNotes];
      saveNotesToStorage(updatedNotes);
      return updatedNotes;
    });
  }, [generateId]);

  const updateNote = useCallback((updatedNote: Note) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) => 
        note.id === updatedNote.id 
          ? { ...updatedNote, title: updatedNote.title.trim(), description: updatedNote.description.trim() }
          : note
      );
      saveNotesToStorage(updatedNotes);
      return updatedNotes;
    });
  }, []);

  const deleteNote = useCallback((id: number) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note) => note.id !== id);
      saveNotesToStorage(updatedNotes);
      return updatedNotes;
    });
  }, []);

  return (
    <NoteContext.Provider
      value={{
        notes,
        createNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
