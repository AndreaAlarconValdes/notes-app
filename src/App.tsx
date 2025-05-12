import { NoteContextProvider } from './context/NoteContext'
import { Dashboard } from './pages/Dashboard'

function App() {

  return (
    <NoteContextProvider>
    <Dashboard/>
  </NoteContextProvider>
  )
}

export default App
