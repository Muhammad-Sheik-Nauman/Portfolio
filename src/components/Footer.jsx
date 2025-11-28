const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-beige-300 dark:border-dark-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-light text-beige-600 dark:text-dark-muted/80">
          © {new Date().getFullYear()} Nauman – Built with React
        </p>
      </div>
    </footer>
  )
}

export default Footer
