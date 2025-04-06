export function Button({ onClick, children, className = '', variant = 'default' }) {
  return (
    <button
      onClick={onClick}
      className={\`px-4 py-2 rounded-lg border text-sm font-medium shadow-sm \${variant === 'outline' ? 'border-gray-300 bg-white hover:bg-gray-100' : 'bg-black text-white'} \${className}\`}
    >
      {children}
    </button>
  );
}