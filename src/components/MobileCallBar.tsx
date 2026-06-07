export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="tel:+18602637791"
        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-body font-bold py-4 text-lg transition-colors"
      >
        📞 Call Now — (860) 263-7791
      </a>
    </div>
  )
}
