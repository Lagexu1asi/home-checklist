import ScheduleItem from './ScheduleItem'
import { isDueToday, describeInterval } from '../hooks/useLocalStorage'
import './Module.css'

/**
 * ScheduleModule —— 家务周期设定模块:按分类分组展示,可编辑每项的执行周期
 * @param {Object} props
 * @param {Array} props.chores - 全部家务列表(含 interval/lastDone)
 * @param {Function} props.onIntervalChange - 修改周期
 * @param {Function} props.onMarkDone - 标记今日已执行
 * @param {Function} props.onResetLastDone - 清除执行记录
 * @param {Function} props.onDelete - 删除家务项
 * @param {Function} props.onAdd - 打开添加面板
 */
export default function ScheduleModule({ chores, onIntervalChange, onMarkDone, onResetLastDone, onDelete, onAdd }) {
  const dueCount = chores.filter((c) => isDueToday(c.interval, c.lastDone)).length
  const usedCats = [...new Set(chores.map((c) => c.category))]

  return (
    <section className="module">
      <div className="module-summary">
        <div className="sched-overview">
          <div className="sched-overview-item">
            <span className="sched-overview-num">{chores.length}</span>
            <span className="sched-overview-label">家务总数</span>
          </div>
          <div className="sched-overview-divider" />
          <div className="sched-overview-item">
            <span className="sched-overview-num sched-overview-num--due">{dueCount}</span>
            <span className="sched-overview-label">今日到期</span>
          </div>
          <div className="sched-overview-divider" />
          <div className="sched-overview-item">
            <span className="sched-overview-num">{chores.length - dueCount}</span>
            <span className="sched-overview-label">未到期</span>
          </div>
        </div>
      </div>

      {chores.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📅</span>
          <p>还没有家务项,点击右下角 + 添加</p>
        </div>
      ) : (
        <div className="groups">
          {usedCats.map((cat) => {
            const items = chores.filter((c) => c.category === cat)
            const catDue = items.filter((c) => isDueToday(c.interval, c.lastDone)).length
            return (
              <div key={cat} className="group">
                <div className="group-head">
                  <h4 className="group-title">{cat}</h4>
                  <span className="group-count">
                    {catDue}/{items.length} 到期
                  </span>
                </div>
                <ul className="item-list">
                  {items.map((c) => (
                    <ScheduleItem
                      key={c.id}
                      chore={c}
                      onIntervalChange={onIntervalChange}
                      onMarkDone={onMarkDone}
                      onResetLastDone={onResetLastDone}
                      onDelete={onDelete}
                    />
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
