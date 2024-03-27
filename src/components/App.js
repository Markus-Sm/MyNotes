import { useState } from 'react'
import { Menu } from './Menu'
import { NoteArea } from './NoteArea'
import { NotePanel } from './NotePanel'

const initialNotes = [
	{
		id: 1332,
		topic: 'Other',
		description: 'Make a list of things needed to go to Germany for wark',
	},
	{
		id: 1333,
		topic: 'Shop',
		description: 'Make a list of things to buy for the wedding',
	},
	{
		id: 1334,
		topic: 'Work',
		description: 'Get three days of work in April at your job as a back-end developer',
	},
]

function App() {
	const [notes, setNotes] = useState(initialNotes)
	const [showPanel, setShowPanel] = useState(false)

	function handleAddNotes(newNote) {
		setNotes(prevNotes => [...prevNotes, newNote])
		setShowPanel(false)
	}

	function handleDeleteNotes(id) {
		setNotes(notes => notes.filter(note => note.id !== id))
	}

	function hadnleShowPanel() {
		setShowPanel(true)
	}

	function handleClosePanel() {
		setShowPanel(false)
	}

	function handleClearNote() {
		const confirmed = window.confirm('Are you sure you want to delete all task?')

		if (confirmed) {
			setNotes([])
		}
	}

	return (
		<div className='App'>
			<Menu onShowPanel={hadnleShowPanel} onClearPanel={handleClearNote} />
			<NoteArea notes={notes} onDelete={handleDeleteNotes} />
			{showPanel && <NotePanel onAddNotes={handleAddNotes} onClosePanel={handleClosePanel} />}
		</div>
	)
}

export default App
