import { useState } from 'react'
import { INSPECTION_STATUS } from '../data/defaults'
import './InspectionItem.css'

const STATUS_ORDER = ['pending', 'ok', 'issue']

/**
 * InspectionItem —— 单条巡检项,支持状态循环切换、备注录入与删除
 * @param {Object} props
 * @param {Object} props.item - 巡检项 { id, title, area, status, note }
 * @param {Function} props.onCycle - 状态循环切换回调
 * @param {Function} props.onNote - 备注更新回调
 * @param {Function} props.onDelete - 删除回调
 */
export default function InspectionItem({ item, onCycle, onNote, onDelete }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(item.note)
  const st = INSPECTION_STATUS[item.status]

  /** 保存备注并退出编辑态 */
  const saveNote = () => {
    onNote(item.id, draft.trim())
    setEditing(false)
  }

  return (
    <li className={`inspect-item inspect-item--${item.status}`}>
      <div className="inspect-head">
        <span className="inspect-area">{item.area}</span>
        <button
          className="inspect-status"
          style={{ '--st-color': st.color }}
          onClick={() => onCycle(item.id)}
        >
          {st.label}
        </button>
      </div>
      <p className="inspect-title">{item.title}</p>

      {item.note && !editing && (
        <p className="inspect-note" onClick={() => { setDraft(item.note); setEditing(true) }}>
          📝 {item.note}
        </p>
      )}

      {editing ? (
        <div className="inspect-note-edit">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="记录异常详情或备注…"
            autoFocus
          />
          <button className="note-save" onClick={saveNote}>保存</button>
        </div>
      ) : (
        <div className="inspect-actions">
          <button className="inspect-act" onClick={() => { setDraft(item.note); setEditing(true) }}>
            {item.note ? '改备注' : '加备注'}
          </button>
          <button className="inspect-act inspect-act--del" onClick={() => onDelete(item.id)}>删除</button>
        </div>
      )}
    </li>
  )
}
