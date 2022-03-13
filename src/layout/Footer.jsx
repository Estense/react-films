function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
    <div className="container">
      <span className="text-muted">© {new Date().getFullYear()} Andrei Vernov</span>
    </div>
  </footer>
  )
}

export { Footer };