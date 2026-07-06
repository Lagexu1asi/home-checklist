import './ChoreItem.css'

/**
 * ChoreItem —— 单条家务待办项,支持勾选完成
 * @param {Object} props
 * @param {Object} props.chore - 家务项 { id, title, category, done }
 * @param {Function} props.onToggle - 切换完成状态回调
 * @param {Function} props.onDelete - 删除回调(保留接口,待办页不再展示删除按钮)
 */
export default function ChoreItem({ chore, onToggle, onDelete }) {
  return (
    <li className={`chore-item ${chore.done ? 'chore-item--done' : ''}`}>
      <button
        className="chore-check"
        onClick={() => onToggle(chore.id)}
        aria-label={chore.done ? '标记为未完成' : '标记为已完成'}
      >
        <svg viewBox="0 0 24 24" className="check-icon">
          <path
            className="check-path"
            d="M5 13l4 4L19 7"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="chore-body">
        <span className="chore-title">{chore.title}</span>
        <span className="chore-cat">{chore.category}</span>
      </div>
    </li>
  )
}
