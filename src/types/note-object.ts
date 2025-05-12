export type NoteCategory = "important" | "reminder" | "others" | "ideas" | "pending";

export const CategoryColors: Record<NoteCategory, string> = {
  important: "#f4d79a",
  reminder: "#f4a89e",
  ideas: "#8cd5cb",
  pending: "#84daf6",
  others: "#d59ef6",
};

export interface Note {
  id: number;
  title: string;
  description: string;
  creationDate: string;
  creationTime: string;
  creationDay: string;
  color: string;
  category: NoteCategory;
  timestamp?: number;
}



