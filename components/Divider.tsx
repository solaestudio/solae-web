interface DividerProps {
  className?: string
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <hr
      className={className}
      style={{ border: 'none', borderTop: '0.5px solid #6b5645', margin: 0 }}
    />
  )
}
