// 家务分类标签
export const CHORE_CATEGORIES = ['厨房', '客厅', '主卧', '次卧', '书房', '卫生间', '阳台', '其他']

// 巡检区域标签
export const INSPECTION_AREAS = ['厨房', '客厅', '主卧', '次卧', '书房', '卫生间', '阳台', '全屋']

// 巡检状态定义:pending 待检 / ok 正常 / issue 异常
export const INSPECTION_STATUS = {
  pending: { label: '待检', color: '#8A8478' },
  ok: { label: '正常', color: '#5C7A5A' },
  issue: { label: '异常', color: '#C8643C' }
}

// 周期预设选项(天):用于周期设定页快捷选择
export const INTERVAL_PRESETS = [
  { label: '每日', days: 1 },
  { label: '每3天', days: 3 },
  { label: '每周', days: 7 },
  { label: '每2周', days: 14 },
  { label: '每4周', days: 28 },
  { label: '每月', days: 30 },
  { label: '每3月', days: 90 },
  { label: '每半年', days: 180 }
]

// 默认家务待办项(首次使用时注入)
// interval: 执行周期天数;lastDone: 最后一次执行日期 'YYYY-MM-DD' 或 null
export const DEFAULT_CHORES = [
  { id: 'c1', title: '洗碗并清理水槽', category: '厨房', interval: 1, lastDone: null, done: false },
  { id: 'c2', title: '擦拭灶台与料理台', category: '厨房', interval: 1, lastDone: null, done: false },
  { id: 'c3', title: '整理桌面杂物', category: '客厅', interval: 1, lastDone: null, done: false },
  { id: 'c4', title: '扫地或吸尘', category: '客厅', interval: 3, lastDone: null, done: false },
  { id: 'c5', title: '拖地', category: '客厅', interval: 3, lastDone: null, done: false },
  { id: 'c6', title: '整理床铺', category: '主卧', interval: 1, lastDone: null, done: false },
  { id: 'c7', title: '收衣叠衣入柜', category: '主卧', interval: 2, lastDone: null, done: false },
  { id: 'c8', title: '更换床单被套', category: '次卧', interval: 14, lastDone: null, done: false },
  { id: 'c9', title: '整理书桌与书架', category: '书房', interval: 3, lastDone: null, done: false },
  { id: 'c10', title: '擦拭镜面与洗手台', category: '卫生间', interval: 2, lastDone: null, done: false },
  { id: 'c11', title: '清理地面积水', category: '卫生间', interval: 1, lastDone: null, done: false },
  { id: 'c12', title: '清洗洗衣机', category: '卫生间', interval: 28, lastDone: null, done: false },
  { id: 'c13', title: '清洁浴室地缝', category: '卫生间', interval: 7, lastDone: null, done: false },
  { id: 'c14', title: '清洗纱窗', category: '阳台', interval: 90, lastDone: null, done: false }
]

// 默认巡检项(首次使用时注入)
export const DEFAULT_INSPECTIONS = [
  { id: 'i1', title: '燃气阀门已关闭', area: '厨房', status: 'pending', note: '' },
  { id: 'i2', title: '灶台周围无易燃物', area: '厨房', status: 'pending', note: '' },
  { id: 'i3', title: '门窗锁闭完好', area: '全屋', status: 'pending', note: '' },
  { id: 'i4', title: '水龙头无滴漏', area: '卫生间', status: 'pending', note: '' },
  { id: 'i5', title: '地漏排水通畅', area: '卫生间', status: 'pending', note: '' },
  { id: 'i6', title: '非必要电器电源已断', area: '客厅', status: 'pending', note: '' },
  { id: 'i7', title: '阳台排水口无堵塞', area: '阳台', status: 'pending', note: '' },
  { id: 'i8', title: '晾衣架稳固无松动', area: '阳台', status: 'pending', note: '' }
]
