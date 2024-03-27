import { Note } from './Note'

export function NoteArea({ notes, onDelete }) {
	return (
		<div className='note-area'>
			{notes.map(note => (
				<Note key={note.id} note={note} onDelete={onDelete} />
			))}
		</div>
	)
}
