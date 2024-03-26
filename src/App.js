import { useState } from 'react'

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
		description: 'Get three days of work in April at your job as a waiter',
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

		if (confirmed) setNotes([])
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

function NoteArea({ notes, onDelete }) {
	return (
		<div className='note-area'>
			{notes.map(note => (
				<Note key={note.id} note={note} onDelete={onDelete} />
			))}
		</div>
	)
}

function Note({ note, onDelete }) {
	let colorClass = ''

	switch (note.topic) {
		case 'Shop':
			colorClass = 'green-square'
			break
		case 'Work':
			colorClass = 'tomato-square'
			break
		case 'Other':
			colorClass = 'liteGray-square'
			break
		default:
			colorClass = ''
	}

	return (
		<div className={`note ${colorClass}`}>
			<div className='note-header'>
				<h3 className='note-title'>{note.topic}</h3>
				<button onClick={() => onDelete(note.id)} className='delete-note'>
					❌
				</button>
			</div>
			<div className='note-body'>{note.description}</div>
		</div>
	)
}

function NotePanel({ onAddNotes, onClosePanel }) {
	const [description, setDescription] = useState('')
	const [topic, setTopic] = useState('0')

	function handleSubmit() {
		if (!description && !topic) return

		const newNote = { topic, description, id: Date.now() }

		onAddNotes(newNote)

		setDescription('')
		setTopic('')
	}

	return (
		<div className='note-panel'>
			<h2>Dodaj notatkę</h2>
			<label htmlFor='category'>select category</label>
			<select value={topic} onChange={e => setTopic(e.target.value)} id='category'>
				<option value='0' disabled>
					- Select Category -
				</option>
				<option value='Shop'>Shop</option>
				<option value='Work'>Work</option>
				<option value='Other'>Other</option>
			</select>

			<label htmlFor='text'>Enter the content of the note</label>
			<textarea id='text' value={description} onChange={e => setDescription(e.target.value)}></textarea>

			<p className='error'>Complete all fields</p>

			<div className='panel-buttons'>
				<button onClick={handleSubmit} className='save icon'>
					⬇️ Save
				</button>
				<button onClick={onClosePanel} className='cancel icon'>
					❌ Cancel
				</button>
			</div>
		</div>
	)
}
