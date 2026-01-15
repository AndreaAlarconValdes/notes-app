# 📝 ALL IN ORDER, ALL IN NOTES

<a href="https://andreaalarconvaldes.github.io/notes-app/" target="_blank">
<img src="/public/readme-img.png" alt="Notes App Preview"/>
</a>

**[🚀 Live Demo](https://andreaalarconvaldes.github.io/notes-app/)**

*Organize your ideas, tasks and reminders in one place. Keep everything at your fingertips, clear and accessible, so nothing important slips through the cracks.*

A modern, fully-featured notes application built with React 19 and TypeScript. Create, edit, delete, and organize your notes with an intuitive interface and persistent storage.

---

## ✨ Features

### 📋 Core Functionality

- **✨ Create Notes**: Add new notes with custom titles and descriptions
- **✏️ Edit Notes**: Modify existing notes with a simple click
- **🗑️ Delete Notes**: Remove notes with confirmation dialog
- **🏷️ Category System**: Organize notes into 5 categories:
  - **Important** (Yellow) - Priority items
  - **Reminder** (Coral) - Things to remember
  - **Ideas** (Teal) - Creative thoughts
  - **Pending** (Blue) - Tasks to complete
  - **Others** (Purple) - Miscellaneous notes

### 🎯 Advanced Features

- **🔍 Filter by Category**: View notes by specific category or see all notes
- **📊 Category Counters**: See how many notes are in each category
- **⏰ Automatic Timestamps**: Each note includes creation date and time
- **💾 Persistent Storage**: All notes are automatically saved to localStorage
- **🔄 Auto-save**: Changes are saved instantly without manual action
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **♿ Accessibility**: Keyboard navigation and ARIA labels for screen readers
- **🎨 Color-coded Categories**: Visual organization with distinct colors

### 💾 Data Persistence

- **Automatic Saving**: Notes are saved to browser localStorage automatically
- **Persistent Across Sessions**: Your notes remain after closing the browser
- **Error Handling**: Graceful fallback if localStorage is unavailable
- **Data Validation**: Ensures data integrity when loading saved notes

---

## 🎮 How to Use

### Creating a Note

1. Click the **"Add New Note"** button at the top of the page
2. Enter a **title** for your note
3. Write your **description** in the text area
4. Select a **category** by clicking one of the colored category buttons
5. Click **"Create note"** to save

### Editing a Note

1. Click the **edit icon** (pencil) on any note card
2. Modify the title, description, or category
3. Click **"Save changes"** to update the note

### Deleting a Note

1. Click the **edit icon** on the note you want to delete
2. Click the red **"Delete"** button
3. Confirm the deletion in the dialog

### Filtering Notes

- Click any category button in the filter bar to view notes from that category
- Click **"All"** to view all notes
- The number in parentheses shows how many notes are in each category

---

## 🏗️ Project Structure

```
notes-app/
├── src/
│   ├── components/          # React components
│   │   ├── Card.tsx         # Note card component
│   │   ├── Card.css
│   │   ├── FormModal.tsx    # Create/Edit modal
│   │   └── FormModal.css
│   ├── context/             # State management
│   │   └── NoteContext.tsx  # Notes context provider
│   ├── hooks/               # Custom hooks
│   │   └── useNotes.ts      # Hook for accessing notes context
│   ├── pages/               # Page components
│   │   ├── Dashboard.tsx    # Main dashboard page
│   │   └── Dashboard.css
│   ├── types/               # TypeScript types
│   │   └── note-object.ts  # Note interface and types
│   ├── data/               # Initial data
│   │   └── notes.ts        # Sample notes
│   ├── constants/          # App constants
│   │   └── storage.ts      # localStorage keys
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Technologies Used

### Core Technologies

- **[React 19](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting rules

### Key React Features Used

- **Context API** - Global state management
- **Custom Hooks** - Reusable logic (`useNotes`)
- **Hooks**: `useState`, `useEffect`, `useCallback`, `useMemo`
- **Performance Optimizations** - Memoization and callback optimization

<p align="start">
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a> 
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="36" height="36" alt="Vite" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
</p>

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v16 or higher) and **npm** installed on your system:

```bash
node -v
npm -v
```

If you don't have them installed, download Node.js from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/AndreaAlarconValdes/notes-app.git
cd notes-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1400px+): 4-column grid layout
- **Large Tablets** (1000px - 1400px): 3-column grid layout
- **Tablets** (650px - 1000px): 2-column grid layout
- **Mobile** (< 650px): Single column layout

The interface adapts seamlessly to different screen sizes, ensuring a great experience on all devices.

---

## 🎨 Design Features

- **Modern UI**: Clean, minimalist design with bold borders and shadows
- **Color-coded Categories**: Visual organization with distinct category colors
- **Smooth Animations**: Scale-up animations for modals and hover effects
- **Intuitive Icons**: Material Symbols icons for clear visual cues
- **Accessible**: Proper ARIA labels and keyboard navigation support

---

## 💾 Data Storage

### localStorage Implementation

- **Storage Key**: `notes-app-notes`
- **Format**: JSON array of note objects
- **Automatic Saving**: Notes are saved after every create, update, or delete operation
- **Error Handling**: Gracefully handles localStorage errors and quota exceeded scenarios
- **Data Validation**: Validates data structure when loading from storage

### Storage Behavior

- **First Visit**: Loads sample notes if no saved data exists
- **Subsequent Visits**: Loads your saved notes automatically
- **Data Persistence**: Notes persist across browser sessions
- **Browser Compatibility**: Works in all modern browsers that support localStorage

---

## 🔧 Technical Details

### State Management

- Uses React Context API for global state
- Custom `useNotes` hook for type-safe context access
- Optimized with `useCallback` and `useMemo` for performance

### Performance Optimizations

- **Memoized Calculations**: Filtering and sorting use `useMemo`
- **Stable Function References**: Callbacks wrapped in `useCallback`
- **Efficient Re-renders**: Components only re-render when necessary

### Code Quality

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code linting for consistency
- **Custom Hooks**: Reusable logic extraction
- **Error Handling**: Comprehensive error handling for storage operations

---

## 📝 Note Structure

Each note contains the following properties:

```typescript
interface Note {
  id: number;              // Unique identifier
  title: string;           // Note title
  description: string;     // Note content
  category: NoteCategory;  // Category: "important" | "reminder" | "ideas" | "pending" | "others"
  color: string;          // Hex color code based on category
  creationDate: string;    // Formatted date (e.g., "February 5")
  creationTime: string;   // Formatted time (e.g., "21:30")
  creationDay: string;    // Day of week (e.g., "Fri")
  timestamp: number;      // Unix timestamp for sorting
}
```

---

## 🐛 Known Limitations

- **Browser Storage**: Limited to ~5-10MB per domain (localStorage quota)
- **No Backend**: Data is stored locally only, not synced across devices
- **No Search**: Currently no search functionality (can be added)
- **No Undo**: Deleted notes cannot be recovered

---

## 🔮 Future Enhancements

Potential features for future versions:

- 🔍 **Search Functionality**: Search notes by title or content
- 📤 **Export/Import**: Export notes as JSON or import from file
- 🌐 **Backend Integration**: Sync notes across devices
- 👤 **User Authentication**: Multiple user accounts
- 🏷️ **Custom Categories**: Create your own categories
- 📎 **Attachments**: Add images or files to notes
- 🔄 **Undo/Redo**: Undo delete and edit operations
- 📊 **Statistics**: View note statistics and insights
- 🌙 **Dark Mode**: Toggle between light and dark themes

---

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome! Feel free to:

- Open an issue for bugs or feature requests
- Fork the repository and submit pull requests
- Share your ideas for improvements

---

## 📬 Contact & Socials

Feel free to connect with me or check out more of my work:

<div align="center">
<a href="https://www.linkedin.com/in/andreaalarconvaldes" target="_blank">
<img src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
</a>
<a href="mailto:alarconvaldes.a@gmail.com" target="_blank">
<img src="https://img.shields.io/badge/email-%23BB001B.svg?&style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
</a>
<a href="https://andreaalarconvaldes.github.io/portfolio-andrea/" target="_blank">
<img src="https://img.shields.io/badge/Website-%23707070.svg?&style=for-the-badge&logo=google-cloud&logoColor=white" alt="Website" />
</a>
</div>

**Made with ❤️ by Andrea Alarcón Valdés**
