import { useState } from 'react'

const initialNotes = [
	{
		id: 1332,
		topic: 'Inne',
		text: 'Make a list of things needed to go to Germany for wark',
	},
	{
		id: 1333,
		topic: 'Zakupy',
		text: 'Make a list of things to buy for the wedding',
	},
	{
		id: 1334,
		topic: 'Work',
		text: 'Get three days of work in April at your job as a waiter',
	},
]

function App() {
	const [notes, setNotes] = useState(initialNotes)
	const [showPanel, setShowPanel] = useState(false)

	function hadnleShowPanel() {
		setShowPanel(true)
	}

	function handleClosePanel() {
		setShowPanel(false)
	}

	function handleClearNote() {
		setNotes([])
	}

	return (
		<div className='App'>
			<Menu onShowPanel={hadnleShowPanel} onClearPanel={handleClearNote} />
			<NoteArea notes={notes} />
			{showPanel && <NotePanel onClosePanel={handleClosePanel} />}
		</div>
	)
}

export default App

function Menu({ onShowPanel, onClearPanel }) {
	return (
		<div className='menu'>
			<h1>🗒️ MyNotes</h1>
			<div className='menu-buttons'>
				<button onClick={onShowPanel} className='add icon'>
					➕ Add
				</button>
				<button onClick={onClearPanel} className='delete-all icon'>
					🗑️ Delete all
				</button>
			</div>
		</div>
	)
}

function NoteArea({ notes }) {
	return (
		<div className='note-area'>
			{notes.map(note => (
				<Note note={note} key={note.id} />
			))}
		</div>
	)
}

function Note({ note }) {
	return (
		<div className='note'>
			<div className='note-header'>
				<h3 className='note-title'>{note.topic}</h3>
				<button className='delete-note'>❌</button>
			</div>
			<div className='note-body'>{note.text}</div>
		</div>
	)
}

function NotePanel({ onClosePanel }) {
	return (
		<div className='note-panel'>
			<h2>Dodaj notatkę</h2>
			<label htmlFor='category'>select category</label>
			<select id='category'>
				<option value='0' disabled selected>
					- Select Category -
				</option>
				<option value='1'>Shop</option>
				<option value='2'>Work</option>
				<option value='3'>Inne</option>
			</select>

			<label htmlFor='text'>Enter the content of the note</label>
			<textarea id='text'></textarea>

			<p className='error'>Complete all fields</p>

			<div className='panel-buttons'>
				<button className='save icon'>⬇️ Save</button>
				<button onClick={onClosePanel} className='cancel icon'>
					❌ Cancel
				</button>
			</div>
		</div>
	)
}
