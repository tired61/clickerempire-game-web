import React, { useState, useEffect } from 'react'
import { loadGameState, saveGameState, calculateHourlyBonus } from './utils/gameState'
import MoneyPage from './pages/MoneyPage'
import InvestmentsPage from './pages/InvestmentsPage'
import BusinessesPage from './pages/BusinessesPage'
import OwnerPage from './pages/OwnerPage'
import Header from './components/Header'
import Navigation from './components/Navigation'

export default function App() {
  const [currentPage, setCurrentPage] = useState('money')
  const [gameState, setGameState] = useState(loadGameState())
  const [hourlyNotification, setHourlyNotification] = useState(null)

  // Save game state whenever it changes
  useEffect(() => {
    saveGameState(gameState)
  }, [gameState])

  // Check for hourly bonus
  useEffect(() => {
    const checkHourly = () => {
      const bonus = calculateHourlyBonus(gameState)
      if (bonus) {
        setGameState(prev => ({
          ...prev,
          money: prev.money + bonus.bonus,
          totalEarned: prev.totalEarned + bonus.bonus,
          lastHourlyTime: Date.now(),
        }))
        setHourlyNotification(`+$${bonus.bonus} hourly bonus!`)
        setTimeout(() => setHourlyNotification(null), 3000)
      }
    }

    const interval = setInterval(checkHourly, 60000) // Check every minute
    return () => clearInterval(interval)
  }, [gameState])

  const handleClick = () => {
    setGameState(prev => ({
      ...prev,
      money: prev.money + 1,
      totalEarned: prev.totalEarned + 1,
      clicksCount: prev.clicksCount + 1,
    }))
  }

  const handleInvest = (investment) => {
    if (gameState.money >= investment.cost) {
      setGameState(prev => ({
        ...prev,
        money: prev.money - investment.cost,
        investments: [...prev.investments, { ...investment, purchasedAt: Date.now() }],
      }))
      return true
    }
    return false
  }

  const handleBusiness = (business) => {
    if (gameState.money >= business.cost) {
      setGameState(prev => ({
        ...prev,
        money: prev.money - business.cost,
        businesses: [...prev.businesses, { ...business, purchasedAt: Date.now() }],
      }))
      return true
    }
    return false
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'money':
        return <MoneyPage gameState={gameState} onClick={handleClick} />
      case 'investments':
        return <InvestmentsPage gameState={gameState} onInvest={handleInvest} />
      case 'businesses':
        return <BusinessesPage gameState={gameState} onBusiness={handleBusiness} />
      case 'owner':
        return <OwnerPage gameState={gameState} />
      default:
        return <MoneyPage gameState={gameState} onClick={handleClick} />
    }
  }

  return (
    <div className="relative flex h-screen min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-4 sm:px-10 md:px-20 lg:px-40 py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <Header />
            
            {hourlyNotification && (
              <div className="mb-4 p-3 bg-primary/20 border border-primary rounded-lg text-primary text-center font-bold">
                {hourlyNotification}
              </div>
            )}

            <main className="flex flex-1 flex-col items-center justify-center gap-8 p-4">
              {renderPage()}
            </main>

            <div className="flex-grow"></div>

            <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  )
}
