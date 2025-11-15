import { formatMoney } from '../utils/gameState'

export default function OwnerPage({ gameState }) {
  const totalInvestmentValue = gameState.investments.reduce((total, inv) => total + inv.cost, 0)
  const totalBusinessValue = gameState.businesses.reduce((total, biz) => total + biz.cost, 0)
  const totalDailyReturn = gameState.investments.reduce((total, inv) => total + inv.dailyReturn, 0)
  const totalHourlyIncome = gameState.businesses.reduce((total, biz) => total + biz.hourlyIncome, 0)

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-8">
        <h1 className="text-white text-3xl font-bold">Player Profile</h1>
        <p className="text-white/50 dark:text-[#93c8a5] text-sm mt-2">Track your empire growth</p>
      </div>

      <div className="grid gap-4 w-full mb-8">
        {/* Main Stats */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 dark:from-[#1A2D21] dark:to-[#0f1f16] p-6 rounded-xl border border-white/20 dark:border-[#244730] shadow-lg shadow-black/20">
          <p className="text-white/50 dark:text-[#93c8a5] text-xs uppercase tracking-wider font-semibold mb-2">Current Balance</p>
          <p className="text-primary text-5xl font-bold">{formatMoney(gameState.money)}</p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 dark:from-[#1A2D21] dark:to-[#0f1f16] p-6 rounded-xl border border-white/20 dark:border-[#244730] shadow-lg shadow-black/20">
          <p className="text-white/50 dark:text-[#93c8a5] text-xs uppercase tracking-wider font-semibold mb-2">Total Earned</p>
          <p className="text-primary text-5xl font-bold">{formatMoney(gameState.totalEarned)}</p>
        </div>

        {/* Passive Income */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-[#1A2D21] dark:to-[#0f1f16] p-5 rounded-xl border border-white/10 dark:border-[#244730]">
            <p className="text-white/50 dark:text-[#93c8a5] text-xs uppercase tracking-wider font-semibold mb-2">Daily from Investments</p>
            <p className="text-primary font-bold text-2xl">{formatMoney(totalDailyReturn)}</p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-[#1A2D21] dark:to-[#0f1f16] p-5 rounded-xl border border-white/10 dark:border-[#244730]">
            <p className="text-white/50 dark:text-[#93c8a5] text-xs uppercase tracking-wider font-semibold mb-2">Hourly from Businesses</p>
            <p className="text-primary font-bold text-2xl">{formatMoney(totalHourlyIncome)}</p>
          </div>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="mb-8">
        <h2 className="text-white text-xl font-bold mb-4">Portfolio Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-[#1A2D21] dark:to-[#0f1f16] p-5 rounded-xl border border-white/10 dark:border-[#244730] hover:border-primary/30 transition-all">
            <p className="text-white/50 dark:text-[#93c8a5] text-xs uppercase tracking-wider font-semibold mb-3">Investments</p>
            <p className="text-white text-3xl font-bold">{gameState.investments.length}</p>
            <p className="text-white/60 dark:text-[#93c8a5] text-xs mt-3">Value: {formatMoney(totalInvestmentValue)}</p>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-[#1A2D21] dark:to-[#0f1f16] p-5 rounded-xl border border-white/10 dark:border-[#244730] hover:border-primary/30 transition-all">
            <p className="text-white/50 dark:text-[#93c8a5] text-xs uppercase tracking-wider font-semibold mb-3">Businesses</p>
            <p className="text-white text-3xl font-bold">{gameState.businesses.length}</p>
            <p className="text-white/60 dark:text-[#93c8a5] text-xs mt-3">Value: {formatMoney(totalBusinessValue)}</p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-8">
        <h2 className="text-white text-xl font-bold mb-4">Statistics</h2>
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-[#1A2D21] dark:to-[#0f1f16] p-6 rounded-xl border border-white/10 dark:border-[#244730]">
          <div className="flex justify-between mb-4 pb-4 border-b border-white/10 dark:border-[#244730]">
            <p className="text-white/60 dark:text-[#93c8a5] font-semibold">Total Clicks</p>
            <p className="text-white font-bold text-lg">{gameState.clicksCount.toLocaleString()}</p>
          </div>
          <div className="flex justify-between mb-4 pb-4 border-b border-white/10 dark:border-[#244730]">
            <p className="text-white/60 dark:text-[#93c8a5] font-semibold">Total Invested</p>
            <p className="text-white font-bold text-lg">{formatMoney(totalInvestmentValue + totalBusinessValue)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white/60 dark:text-[#93c8a5] font-semibold">Net Worth</p>
            <p className="text-primary font-bold text-lg">{formatMoney(gameState.money + totalInvestmentValue + totalBusinessValue)}</p>
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/30">
        <p className="text-white font-bold text-lg mb-3">About Clicker Empire</p>
        <p className="text-white/80 dark:text-[#93c8a5] text-sm leading-relaxed">
          Build your empire by clicking to earn money, investing in opportunities, and starting businesses. 
          Earn passive income from your investments and businesses. Every UTC hour, you'll receive a bonus!
        </p>
      </div>
    </div>
  )
}
