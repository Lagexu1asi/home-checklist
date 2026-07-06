import './ProgressBar.css'

/**
 * ProgressBar —— 环形进度展示组件,显示完成比例与计数
 * @param {Object} props
 * @param {number} props.done - 已完成数
 * @param {number} props.total - 总数
 * @param {string} props.tone - 主题色 'terracotta' | 'sage'
 * @param {string} props.label - 进度下方说明文字
 */
export default function ProgressBar({ done, total, tone = 'terracotta', label }) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100)
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (pct / 100) * circumference
  const allDone = total > 0 && done === total

  return (
    <div className="progress-wrap">
      <div className={`progress-ring progress-ring--${tone}`}>
        <svg viewBox="0 0 120 120" className="progress-svg">
          <circle className="progress-track" cx="60" cy="60" r={radius} />
          <circle
            className="progress-fill"
            cx="60"
            cy="60"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="progress-center">
          <span className="progress-pct">{pct}%</span>
          {allDone && <span className="progress-badge">已完成</span>}
        </div>
      </div>
      <div className="progress-info">
        <span className="progress-count">
          {done} / {total}
        </span>
        <span className="progress-label">{label}</span>
      </div>
    </div>
  )
}
