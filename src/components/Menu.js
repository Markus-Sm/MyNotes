import { Button } from './Button'

export function Menu({ onShowPanel, onClearPanel }) {
	return (
		<div className='menu'>
			<h1>🗒️ MyNotes</h1>
			<div className='menu-buttons'>
				<Button onClick={onShowPanel}>➕ Add</Button>
				<Button onClick={onClearPanel}>🗑️ Delete all</Button>
			</div>
		</div>
	)
}
