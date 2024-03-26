function App() {
	return (
		<div className='App'>
			<Menu />
			<NoteArea />
			<NotePanel />
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
			</div>
		</div>
	)
}

function NotePanel() {
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
				<button className='cancel icon'>❌ Cancel</button>
			</div>
		</div>
	)
}
