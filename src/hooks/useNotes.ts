import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

/**
 * Custom hook to access the NoteContext with validation
 * @throws {Error} If used outside of NoteContextProvider
 */
export function useNotes() {
  const context = useContext(NoteContext);
  
  if (!context) {
    throw new Error("useNotes must be used within a NoteContextProvider");
  }
  
  return context;
}
