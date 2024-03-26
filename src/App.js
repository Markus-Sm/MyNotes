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
