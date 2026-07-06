import './TabNav.css'

/**
 * TabNav —— 顶部三标签切换(家务待办 / 周期设定 / 巡检清单)
 * @param {Object} props
 * @param {string} props.active - 当前激活的标签 'chores' | 'schedule' | 'inspection'
 * @param {Function} props.onChange - 切换回调
 */
export default function TabNav({ active, onChange }) {
  const tabs = [
    { key: 'chores', label: '待办', icon: '🏠' },
    { key: 'schedule', label: '周期', icon: '📅' },
    { key: 'inspection', label: '巡检', icon: '🔍' }
  ]

  return (
    <nav className="tab-nav">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`tab-btn ${active === tab.key ? 'tab-btn--active' : ''}`}
          onClick={() => onChange(tab.key)}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
