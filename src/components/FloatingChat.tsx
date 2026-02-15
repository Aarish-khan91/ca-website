export function FloatingChat() {
  return (
    <a
      href="/contact"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-black shadow-lg grid place-items-center hover:bg-primary-400 transition"
      aria-label="Chat"
    >
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path d="M4 5h16v12H7l-3 3z" fill="currentColor" />
      </svg>
    </a>
  )
}
