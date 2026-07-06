import ProgressBar from './ProgressBar'
import ChoreItem from './ChoreItem'
import { isDueToday, describeInterval } from '../hooks/useLocalStorage'
import './Module.css'

/**
 * ChoresModule —— 家务待办模块:仅显示今日到期且未完成的家务
 * 到期判定:isDueToday(interval, lastDone) && !done
 * @param {Object} props
 * @param {Array} props.chores - 全部家务列表(含 interval/lastDone/done)
 * @param {Function} props.onToggle - 切换完成(同时更新 lastDone)
 * @param {Function} props.onDelete - 删除项(保留接口,待办页不再展示删除按钮)
 * @param {Function} props.onReset - 重置今日完成状态(保留接口,待办页不再展示按钮)
 * @param {Function} props.onAdd - 打开添加面板
 */
export default function ChoresModule({ chores, onToggle, onDelete, onReset, onAdd }) {
  // 仅显示今日到期且未完成的家务
  const dueChores = chores.filter((c) => isDueToday(c.interval, c.lastDone) && !c.done)
  const todayDoneCount = chores.filter((c) => c.done).length
  const totalDue = dueChores.length + todayDoneCount
  const usedCats = [...new Set(dueChores.map((c) => c.category))]

  return (
    <section className="module">
      <div className="module-summary">
        <ProgressBar
          done={todayDoneCount}
          total={totalDue}
          tone="terracotta"
          label={`今日到期 ${totalDue} 项 · 已完成 ${todayDoneCount}`}
        />
      </div>

      {dueChores.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">✨</span>
          <p>{totalDue > 0 ? '今日家务已全部完成!' : '今日暂无到期的家务'}</p>
        </div>
      ) : (
        <div className="groups">
          {usedCats.map((cat) => {
            const items = dueChores.filter((c) => c.category === cat)
            return (
              <div key={cat} className="group">
                <div className="group-head">
                  <h4 className="group-title">{cat}</h4>
                  <span className="group-count">{items.length} 项待办</span>
                </div>
                <ul className="item-list">
                  {items.map((c) => (
                    <ChoreItem key={c.id} chore={c} onToggle={onToggle} onDelete={onDelete} />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      )}

      <button className="fab" onClick={onAdd} aria-label="添加家务">
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>
    </section>
  )
}
