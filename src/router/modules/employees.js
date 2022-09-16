// 导出员工的路由规则
import Layout from '@/layout'
export default {
  // 路由规则
  path: '/employees', // 路径
  name: '/employees', // 给路由规则加一个name
  component: Layout, // 组件
  // 配置二级路由表
  children: [{
    path: '',
    component: () => import('@/views/employees'),
    meta: {
      title: '员工管理',
      icon: 'people'
    }
  }]
}

