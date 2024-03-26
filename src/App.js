function App() {
	return (
		<div className='App'>
			<Menu />
		</div>
	)
}

export default App

function Menu() {
	return (
		<div className='menu'>
			<h1>🗒️ MyNotes</h1>
			<div className='menu-buttons'>
				<button className='add icon'>➕ Add +</button>
				<button className='delete-all icon'>🗑️ Delete all</button>
			</div>
		</div>
	)
}

function NoteArea() {
	return (
		<div className='note-area'>
			<div className='note'>
				<div className='note-header'>
					<h3 className='note-title'>Notatka #1</h3>
					<button className='delete-note'>❌</button>
				</div>
				<div className='note-body'>lorem</div>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit esse, neque possimus expedita deserunt delectus.
				Nihil, harum dolorum aspernatur molestiae et pariatur minima perferendis magnam temporibus libero esse, error
				voluptates repudiandae necessitatibus atque id qui voluptatem? Repellat nulla repudiandae quo, esse optio
				necessitatibus ab enim labore dolor deleniti libero quasi.
			</div>
		</div>
	)
}
