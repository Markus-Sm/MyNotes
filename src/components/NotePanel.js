import { useState } from 'react'
import { Button } from './Button'

export function NotePanel({ onAddNotes, onClosePanel }) {
	const [description, setDescription] = useState('')
	const [topic, setTopic] = useState('0')
	const [error, setError] = useState('')

	function handleSubmit() {
		if (!description.trim() || topic === '0') {
			setError('Complete all fields')
			return
		}

		const newNote = { topic, description, id: Date.now() }

		onAddNotes(newNote)

		setDescription('')
		setTopic('')
		setError('')
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
				<option value='Daily Tasks'>Daily Tasks</option>
				<option value='Other'>Other</option>
			</select>

			<label htmlFor='text'>Enter the content of the note</label>
			<textarea id='text' value={description} onChange={e => setDescription(e.target.value)}></textarea>

			<p className='error'>{error}</p>

			<div className='panel-buttons'>
				<Button onClick={handleSubmit}>⬇️ Save</Button>
				<Button onClick={onClosePanel}>❌ Cancel</Button>
			</div>
		</div>
	)
}
