import { formatMoney } from '../utils/gameState'

export default function MoneyPage({ gameState, onClick }) {
  return (
    <>
      <div className="w-full max-w-lg bg-gradient-to-br from-white/10 to-white/5 dark:from-[#1A2D21] dark:to-[#0f1f16] p-8 rounded-2xl border border-white/20 dark:border-[#244730] shadow-2xl shadow-black/40 backdrop-blur-sm">
        <div className="flex flex-col items-stretch justify-start">
          <div 
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-8" 
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzPZ-beNgS1Y3_khxhFG6osphVdGo4dGYGFfYJXEeoHUz8aWskp_98dmOkWrUZP5VPmh5FrZyePerdRofM6BRCcE3EFEHGyIxeCjXtnEePjvAgvMnLGps6Wd_4Zfp88SD8R3p-d1nKMjD2ie1yP7j1Qk86PLg-beuBQSmWOGFJjaw1SdD75l98KzAnd9MwPoPOpkaxu06IhNO8_1UZ5dlyJQAwnxMy5HyWFYv4P5Y6oJNjRuEyKTB0mySXpaaGGVklzd7MX7FAUW3D")',
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="flex w-full grow flex-col items-stretch justify-center gap-2">
            <p className="text-primary text-5xl sm:text-6xl font-bold leading-tight tracking-[-0.015em]">
              {formatMoney(gameState.money)}
            </p>
            <div className="flex items-end gap-4 justify-between mt-4">
              <div className="flex flex-col gap-1">
                <p className="text-white/50 dark:text-[#93c8a5] text-xs font-semibold leading-normal uppercase tracking-wider">Total Earned</p>
                <p className="text-white/90 dark:text-[#93c8a5] text-lg font-semibold leading-normal">
                  {formatMoney(gameState.totalEarned)}
                </p>
              </div>
              <p className="text-white/50 dark:text-[#93c8a5] text-xs font-semibold leading-normal uppercase tracking-wider">
                {gameState.clicksCount.toLocaleString()} Clicks
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full max-w-lg gap-3">
        <button 
          onClick={onClick}
          className="flex min-w-[84px] max-w-[480px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-8 bg-gradient-to-r from-primary to-primary/80 text-background-dark gap-3 text-lg font-bold leading-normal tracking-[0.015em] transition-all duration-200 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
        >
          <span className="material-symbols-outlined text-background-dark text-2xl">add_circle</span>
          <span className="truncate">Earn Money</span>
        </button>
      </div>
    </>
  )
}
