export default function Navigation({ currentPage, onPageChange }) {
  const navItems = [
    { id: 'investments', label: 'Investments', icon: 'trending_up' },
    { id: 'businesses', label: 'Businesses', icon: 'business_center' },
    { id: 'money', label: 'Money', icon: 'attach_money' },
    { id: 'owner', label: 'Owner', icon: 'person' },
  ]

  return (
    <div className="sticky bottom-0 bg-background-light dark:bg-background-dark pb-3">
      <div className="flex border-t border-white/10 dark:border-[#346544] px-0 sm:px-4 justify-between">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`flex flex-col items-center justify-center border-t-[3px] gap-1 pb-[7px] pt-2.5 flex-1 transition-colors ${
              currentPage === item.id
                ? 'border-t-primary text-white bg-white/10 dark:bg-primary/20'
                : 'border-t-transparent text-white/60 dark:text-[#93c8a5] hover:bg-white/5'
            }`}
          >
            <span className={`material-symbols-outlined text-2xl ${
              currentPage === item.id ? 'text-white' : 'text-white/60 dark:text-[#93c8a5]'
            }`} style={currentPage === item.id ? { fontVariationSettings: "'FILL' 1" } : {}}>
              {item.icon}
            </span>
            <p className={`text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] ${
              currentPage === item.id ? 'text-white' : 'text-white/60 dark:text-[#93c8a5]'
            }`}>
              {item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
