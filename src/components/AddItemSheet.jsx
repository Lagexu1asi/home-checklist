import { useState } from 'react'
import './AddItemSheet.css'

/**
 * AddItemSheet —— 底部滑出的添加面板,家务与巡检共用
 * @param {Object} props
 * @param {string} props.type - 'chore' | 'inspection' 决定标签词与字段
 * @param {string[]} props.tags - 分类/区域标签列表
 * @param {Function} props.onAdd - 提交回调 (title, tag) => void
 * @param {Function} props.onClose - 关闭回调
 */
export default function AddItemSheet({ type, tags, onAdd, onClose }) {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState(tags[0] || '')
  const tagLabel = type === 'chore' ? '分类' : '区域'
  const titleLabel = type === 'chore' ? '家务内容' : '巡检项目'

  /** 提交表单:校验非空后回调,并清空输入 */
  const handleSubmit = () => {
    const t = title.trim()
    if (!t) return
    onAdd(t, tag)
    setTitle('')
  }

  return (
    <>
      <div className="sheet-overlay" onClick={onClose} />
      <div className="sheet">
        <div className="sheet-handle" />
        <h3 className="sheet-title">
          {type === 'chore' ? '添加家务待办' : '添加巡检项'}
        </h3>

        <label className="sheet-field">
          <span className="sheet-label">{titleLabel}</span>
          <input
            className="sheet-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder={type === 'chore' ? '如:擦拭餐桌' : '如:检查净水器滤芯'}
            autoFocus
          />
        </label>

        <div className="sheet-field">
          <span className="sheet-label">{tagLabel}</span>
          <div className="sheet-tags">
            {tags.map((t) => (
              <button
                key={t}
                className={`sheet-tag ${tag === t ? 'sheet-tag--active' : ''}`}
                onClick={() => setTag(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="sheet-btns">
          <button className="sheet-btn sheet-btn--cancel" onClick={onClose}>取消</button>
          <button className="sheet-btn sheet-btn--ok" onClick={handleSubmit} disabled={!title.trim()}>
            确认添加
          </button>
        </div>
      </div>
    </>
  )
}
