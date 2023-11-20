import { AddEarning, EarningsChart, EarningsList } from "../components"

export const EarningsPage = () => {
  return (
    <div>
      <AddEarning />
      <div className="flex flex-col lg:flex-row p-4 lg:items-center justify-center">
        <EarningsChart />
        <EarningsList />
      </div>
    </div>
  )
}
