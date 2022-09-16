// 导出员工的路由规则
import Layout from '@/layout'
export default {
  // 路由规则
  path: '/permission', // 路径
  name: '/permission', // 给路由规则加一个name
  component: Layout, // 组件
  // 配置二级路由表
  children: [{
    path: '',
    component: () => import('@/views/permission'),
    meta: {
      title: '权限管理',
      icon: 'lock'
    }
  }]
}

