import { useMemo, useState } from 'react'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const emptyResult = {
  loan_status: 'HISTORICAL',
  principal: 0,
  total_interest: 0,
  total_repayment: 0,
  reference_rate: 'SOFR',
  current_effective_rate: 0,
  latest_available_reference_rate: 0,
  accrued_interest_so_far: 0,
  current_amount: 0,
  last_rate_update: null,
  rate_history: [],
  daily_interest_breakdown: [],
  rate_chart: null,
  rate_chart_error: '',
  convention_note: '',
  future_interest_note: '',
}

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value || 0)

const formatPercent = (value) => `${Number(value || 0).toFixed(2)}%`

export default function InterestCalculatorPage() {
  const [mode, setMode] = useState('historical')
  const [form, setForm] = useState({
    principal: 1000000,
    referenceRate: 'SOFR',
    spread: 2,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    dayCount: 'ACT/360',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [historicalResult, setHistoricalResult] = useState(emptyResult)
  const [activeResult, setActiveResult] = useState({ ...emptyResult, loan_status: 'ACTIVE' })

  const endpoint = useMemo(() =>
    mode === 'historical' ? '${API_BASE_URL}/api/historical-loan' : '${API_BASE_URL}/api/active-loan',
    [mode]
  )

  const result = mode === 'historical' ? historicalResult : activeResult
  const isActiveMode = mode === 'active'

  const onFieldChange = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    const payload = {
      principal: Number(form.principal),
      reference_rate: form.referenceRate,
      spread: Number(form.spread),
      start_date: form.startDate,
      end_date: mode === 'historical' ? form.endDate : undefined,
      day_count: form.dayCount,
      as_of_date: mode === 'active' ? new Date().toISOString().slice(0, 10) : undefined,
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.detail || 'The calculator could not complete the request.')
      }

      if (mode === 'historical') {
        setHistoricalResult(data)
      } else {
        setActiveResult(data)
      }
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] px-4 pb-16 pt-28 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600">Prototype</div>
            <h1 className="mt-3 text-4xl tracking-tight text-slate-900">Interest Calculator</h1>
          </div>
          <div className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-700">
            Daily simple interest prototype
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
          <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="mb-6 flex rounded-2xl border border-slate-200 bg-slate-100 p-1">
              {[
                { id: 'historical', label: 'Historical' },
                { id: 'active', label: 'Active loan' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMode(tab.id)}
                  className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    mode === tab.id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Principal</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={form.principal}
                  onChange={(event) => onFieldChange('principal', event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-sky-500 focus:bg-white"
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Reference rate</span>
                  <select
                    value={form.referenceRate}
                    onChange={(event) => onFieldChange('referenceRate', event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
                  >
                    <option value="SOFR">SOFR</option>
                    <option value="SONIA">SONIA</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Spread</span>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={form.spread}
                      onChange={(event) => onFieldChange('spread', event.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm text-slate-500">%</span>
                  </div>
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Start date</span>
                  <input
                    type="date"
                    value={form.startDate}
                    onChange={(event) => onFieldChange('startDate', event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
                  />
                </label>

                {mode === 'historical' ? (
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">End date</span>
                    <input
                      type="date"
                      value={form.endDate}
                      onChange={(event) => onFieldChange('endDate', event.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
                    />
                  </label>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-medium text-slate-700">Active loan</div>
                    <p className="mt-2 text-sm text-slate-500">The calculator uses today as the as-of date automatically.</p>
                  </div>
                )}
              </div>

              {mode === 'historical' && (
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Day count convention</span>
                  <select
                    value={form.dayCount}
                    onChange={(event) => onFieldChange('dayCount', event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
                  >
                    <option value="ACT/360">ACT/360</option>
                    <option value="ACT/365">ACT/365</option>
                  </select>
                </label>
              )}
            </div>

            {error && (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#1677FF] to-[#20C997] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_32px_rgba(22,119,255,0.25)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Calculating…' : 'Calculate interest'}
            </button>
          </form>

          <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-[#071A2B] via-[#0b1f39] to-[#0b2440] p-6 text-white shadow-[0_25px_60px_rgba(9,17,30,0.35)]">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">Result</div>
                <h2 className="mt-2 text-2xl font-semibold text-white">{isActiveMode ? 'Active loan summary' : 'Historical calculation'}</h2>
              </div>
              <span className={`rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${isActiveMode ? 'bg-emerald-400/20 text-emerald-200' : 'bg-sky-400/20 text-sky-200'}`}>
                {isActiveMode ? 'ACTIVE' : 'HISTORICAL'}
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-300">Principal</div>
                <div className="mt-3 text-xl font-semibold text-white">{formatCurrency(result.principal)}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-300">Accrued interest</div>
                <div className="mt-3 text-xl font-semibold text-white">
                  {formatCurrency(isActiveMode ? result.accrued_interest_so_far : result.total_interest)}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-300">Current amount</div>
                <div className="mt-3 text-xl font-semibold text-white">
                  {formatCurrency(isActiveMode ? result.current_amount : result.total_repayment)}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-300">{isActiveMode ? 'Current effective rate' : 'Average effective rate'}</div>
                <div className="mt-3 text-xl font-semibold text-white">
                  {formatPercent(isActiveMode ? result.current_effective_rate : (result.average_effective_rate ?? Number(result.average_reference_rate || 0) + Number(form.spread)))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              {isActiveMode ? (
                <>
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                    <span>Reference rate</span>
                    <span className="font-medium text-white">{result.reference_rate || form.referenceRate}</span>
                  </div>
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                    <span>Spread</span>
                    <span className="font-medium text-white">{formatPercent(form.spread)}</span>
                  </div>
                  <div className="mb-3 flex items-center justify-between text-base font-semibold text-white">
                    <span>Latest available reference rate</span>
                    <span className="text-emerald-300">{formatPercent(result.latest_available_reference_rate)}</span>
                  </div>
                  <div className="flex items-center justify-between text-base font-semibold text-white">
                    <span>Latest effective rate</span>
                    <span className="text-emerald-300">{formatPercent(result.current_effective_rate)}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                    <span>Average reference rate</span>
                    <span className="font-medium text-white">{formatPercent(result.average_reference_rate || 0)}</span>
                  </div>
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                    <span>Spread</span>
                    <span className="font-medium text-white">{formatPercent(result.spread ?? form.spread)}</span>
                  </div>
                  <div className="mb-3 flex items-center justify-between text-base font-semibold text-white">
                    <span>Average effective rate</span>
                    <span className="text-emerald-300">{formatPercent(result.average_effective_rate ?? Number(result.average_reference_rate || 0) + Number(result.spread ?? form.spread))}</span>
                  </div>
                  <div className="mb-3 flex items-center justify-between text-base font-semibold text-white">
                    <span>Latest reference rate</span>
                    <span className="text-emerald-300">{formatPercent(result.latest_reference_rate ?? 0)}</span>
                  </div>
                  <div className="flex items-center justify-between text-base font-semibold text-white">
                    <span>Latest effective rate</span>
                    <span className="text-emerald-300">{formatPercent(result.latest_effective_rate ?? Number(result.latest_reference_rate || 0) + Number(result.spread ?? form.spread))}</span>
                  </div>
                </>
              )}
            </div>
            {/* MAPS */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4 xl:col-span-2">
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.18em] text-slate-300">Rate fluctuation</div>
                    <div className="mt-1 text-sm text-slate-400">
                      {result.rate_chart?.title || `${form.referenceRate} published observations`}
                    </div>
                  </div>
                  {result.rate_chart?.latest_observation_date && (
                    <div className="text-xs text-slate-400">
                      Published rates available through {result.rate_chart.latest_observation_date}
                    </div>
                  )}
                </div>
                {result.rate_chart?.image_base64 ? (
                  <>
                    <img
                      src={`data:image/png;base64,${result.rate_chart.image_base64}`}
                      alt={`${form.referenceRate} rate fluctuation chart`}
                      className="w-full rounded-xl border border-white/10"
                    />
                    <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-4">
                      <div><span className="text-slate-500">Highest</span><div className="mt-1 font-medium text-white">{formatPercent(result.rate_chart.highest_rate)}</div></div>
                      <div><span className="text-slate-500">Lowest</span><div className="mt-1 font-medium text-white">{formatPercent(result.rate_chart.lowest_rate)}</div></div>
                      <div><span className="text-slate-500">Latest</span><div className="mt-1 font-medium text-white">{formatPercent(result.rate_chart.latest_rate)}</div></div>
                      <div><span className="text-slate-500">Average</span><div className="mt-1 font-medium text-white">{formatPercent(result.rate_chart.average_rate)}</div></div>
                    </div>
                  </>
                ) : (
                  <p className="rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
                    Rate visualization unavailable{result.rate_chart_error ? `: ${result.rate_chart_error}` : '.'}
                  </p>
                )}
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
                <div className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-300">Rate history</div>
                <div className="space-y-2">
                  {(result.rate_history || []).slice(-6).map((entry) => (
                    <div key={entry.date} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                      <span>{entry.date}</span>
                      <span>{formatPercent(entry.reference_rate)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
                <div className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-300">Notes</div>
                <p className="text-sm leading-6 text-slate-300">
                  {isActiveMode
                    ? result.future_interest_note || 'Not yet accrued / dependent on future reference-rate observations.'
                    : result.convention_note || 'The prototype carries the last published business-day rate forward for calendar days without a fresh observation.'}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {isActiveMode && result.last_rate_update
                    ? `Last rate update: ${result.last_rate_update}`
                    : `Day count: ${form.dayCount}`}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/20 p-4">
              <div className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-300">Daily interest breakdown</div>
              <div className="max-h-64 overflow-auto">
                <table className="w-full text-left text-sm text-slate-200">
                  <thead className="text-slate-400">
                    <tr>
                      <th className="pb-2 font-medium">Date</th>
                      <th className="pb-2 font-medium">Rate</th>
                      <th className="pb-2 font-medium">Interest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(result.daily_interest_breakdown || []).slice(0, 12).map((entry) => (
                      <tr key={`${entry.date}-${entry.source}`} className="border-t border-white/10 text-slate-200">
                        <td className="py-2">{entry.date}</td>
                        <td className="py-2">{formatPercent(entry.reference_rate)}</td>
                        <td className="py-2">{formatCurrency(entry.daily_interest)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
