import { useState, useEffect } from 'react'
import { formatMoney } from '../utils/gameState'
import { generateMultipleInvestments } from '../utils/generators'

export default function InvestmentsPage({ gameState, onInvest }) {
  const [availableInvestments, setAvailableInvestments] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    setAvailableInvestments(generateMultipleInvestments(5))
  }, [])

  const handleInvest = (investment) => {
    if (onInvest(investment)) {
      setMessage(`Invested in ${investment.name}!`)
      setTimeout(() => setMessage(''), 2000)
    } else {
      setMessage('Not enough money!')
      setTimeout(() => setMessage(''), 2000)
    }
  }

  const refreshInvestments = () => {
    setAvailableInvestments(generateMultipleInvestments(5))
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-white text-3xl font-bold">Investment Opportunities</h1>
          <p className="text-white/50 dark:text-[#93c8a5] text-sm mt-1">Grow your wealth with smart investments</p>
        </div>
        <button
          onClick={refreshInvestments}
          className="px-4 py-2 bg-gradient-to-r from-primary/30 to-primary/20 border border-primary/50 text-primary rounded-lg hover:bg-primary/40 transition-all text-sm font-bold hover:shadow-lg hover:shadow-primary/20"
        >
          Refresh
        </button>
      </div>

      {message && (
        <div className="mb-4 p-4 bg-primary/20 border border-primary rounded-lg text-primary text-center font-bold animate-pulse">
          {message}
        </div>
      )}

      <div className="grid gap-4 w-full mb-8">
        {availableInvestments.map(investment => (
          <div key={investment.id} className="bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-[#1A2D21] dark:to-[#0f1f16] p-5 rounded-xl border border-white/10 dark:border-[#244730] hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">{investment.name}</h3>
                <p className="text-white/60 dark:text-[#93c8a5] text-sm mt-1">{investment.description}</p>
              </div>
              <div className="text-right ml-4">
                <p className="text-primary font-bold text-xl">{formatMoney(investment.cost)}</p>
                <p className="text-white/50 dark:text-[#93c8a5] text-xs uppercase tracking-wider">Investment</p>
              </div>
            </div>
            
            <div className="flex gap-6 mb-4 pb-4 border-b border-white/10 dark:border-[#244730]">
              <div>
                <p className="text-white/50 dark:text-[#93c8a5] text-xs uppercase tracking-wider font-semibold">Daily Return</p>
                <p className="text-primary font-bold text-lg mt-1">{formatMoney(investment.dailyReturn)}</p>
              </div>
              <div>
                <p className="text-white/50 dark:text-[#93c8a5] text-xs uppercase tracking-wider font-semibold">Risk Level</p>
                <p className="text-white mt-1">{'⭐'.repeat(investment.riskLevel)}</p>
              </div>
            </div>

            <button
              onClick={() => handleInvest(investment)}
              disabled={gameState.money < investment.cost}
              className={`w-full py-3 rounded-lg font-bold transition-all duration-200 ${
                gameState.money >= investment.cost
                  ? 'bg-gradient-to-r from-primary to-primary/80 text-background-dark hover:shadow-lg hover:shadow-primary/50 hover:scale-105 active:scale-95'
                  : 'bg-white/10 text-white/50 cursor-not-allowed'
              }`}
            >
              {gameState.money >= investment.cost ? 'Invest Now' : 'Insufficient Funds'}
            </button>
          </div>
        ))}
      </div>

      {gameState.investments.length > 0 && (
        <div className="mt-8 pt-8 border-t border-white/10 dark:border-[#244730]">
          <h2 className="text-white text-xl font-bold mb-4">Your Investments ({gameState.investments.length})</h2>
          <div className="grid gap-3">
            {gameState.investments.map(inv => (
              <div key={inv.id} className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/30 hover:border-primary/50 transition-all">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-bold">{inv.name}</p>
                    <p className="text-white/60 dark:text-[#93c8a5] text-sm mt-1">Daily: {formatMoney(inv.dailyReturn)}</p>
                  </div>
                  <p className="text-primary font-bold text-lg">{formatMoney(inv.dailyReturn)}/day</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
