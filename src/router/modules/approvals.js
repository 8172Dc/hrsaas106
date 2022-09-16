// 导出员工的路由规则
import Layout from '@/layout'
export default {
  // 路由规则
  path: '/approvals', // 路径
  name: '/approvals', // 给路由规则加一个name
  component: Layout, // 组件
  // 配置二级路由表
  children: [{
    path: '',
    component: () => import('@/views/approvals'),
    meta: {
      title: '审批',
      icon: 'tree-table'
    }
  }]
}

