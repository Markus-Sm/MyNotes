export function Button({ onClick, children }) {
	return (
		<button onClick={onClick} className='btn icon'>
			{children}
		</button>
	)
}
