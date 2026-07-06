import ProgressBar from './ProgressBar'
import InspectionItem from './InspectionItem'
import { INSPECTION_STATUS } from '../data/defaults'
import './Module.css'

const STATUS_CYCLE = { pending: 'ok', ok: 'issue', issue: 'pending' }

/**
 * InspectionModule —— 巡检清单模块:按区域分组,点击状态标签循环切换
 * @param {Object} props
 * @param {Array} props.items - 巡检列表
 * @param {Function} props.onCycle - 状态循环切换
 * @param {Function} props.onNote - 备注更新
 * @param {Function} props.onDelete - 删除项
 * @param {Function} props.onReset - 重置全部为待检
 * @param {Function} props.onAdd - 打开添加面板
 */
export default function InspectionModule({ items, onCycle, onNote, onDelete, onReset, onAdd }) {
  const okCount = items.filter((i) => i.status === 'ok').length
  const issueCount = items.filter((i) => i.status === 'issue').length
  const usedAreas = [...new Set(items.map((i) => i.area))]

  return (
    <section className="module">
      <div className="module-summary">
        <ProgressBar
          done={okCount}
          total={items.length}
          tone="sage"
          label={`正常 ${okCount} · 异常 ${issueCount} · 待检 ${items.length - okCount - issueCount}`}
        />
        <button className="reset-btn" onClick={onReset}>重置巡检</button>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <p>还没有巡检项,点击右下角 + 添加</p>
        </div>
      ) : (
        <div className="groups">
          {usedAreas.map((area) => {
            const list = items.filter((i) => i.area === area)
            return (
              <div key={area} className="group">
                <div className="group-head">
                  <h4 className="group-title">{area}</h4>
                  <span className="group-count">{list.length} 项</span>
                </div>
                <ul className="item-list inspect-list">
                  {list.map((item) => (
                    <InspectionItem
                      key={item.id}
                      item={item}
                      onCycle={onCycle}
                      onNote={onNote}
                      onDelete={onDelete}
                    />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      )}

      <button className="fab fab--sage" onClick={onAdd} aria-label="添加巡检项">
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>
    </section>
  )
}
