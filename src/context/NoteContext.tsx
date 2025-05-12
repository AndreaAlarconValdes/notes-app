import { createContext, useState, useEffect, type ReactNode } from "react";

import { notes as data } from "../data/notes";
import { CategoryColors, type Note } from "../types/note-object";

interface NoteContextProps {
  notes: Note[];
  createNote: (note: Omit<Note, "id">) => void;
  updateNote: (note: Note) => void;
  deleteNote: (id: number) => void
}

export const NoteContext = createContext<NoteContextProps>(null as any);

interface NoteContextProviderProps {
  children: ReactNode;
}

export function NoteContextProvider({ children }: NoteContextProviderProps) {
  const [notes, setNotes] = useState<Note[]>([]);

  function createNote(note: Omit<Note, "id" | "creationDate" | "creationTime" | "creationDay" | "timestamp"| "color">) {
    const now = new Date();
    const timestamp = now.getTime();
    const color = CategoryColors[note.category];
    
    setNotes((prevNotes) => [
      {
        id: prevNotes.length > 0 ? Math.max(...prevNotes.map(n => n.id)) + 1 : 0,
        title: note.title,
        description: note.description,
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
      },
      ...prevNotes
    ]);
  }
  

  function updateNote(updatedNote: Note) {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  }

  function deleteNote(id: number) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  useEffect(() => {
    setNotes(data);
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
