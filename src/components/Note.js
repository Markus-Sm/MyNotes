export function Note({ note, onDelete }) {
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
