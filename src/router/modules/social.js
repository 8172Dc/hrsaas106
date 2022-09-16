// 导出员工的路由规则
import Layout from '@/layout'
export default {
  // 路由规则
  path: '/social', // 路径
  name: '/social', // 给路由规则加一个name
  component: Layout, // 组件
  // 配置二级路由表
  children: [{
    path: '',
    component: () => import('@/views/social'),
    meta: {
      title: '社保',
      icon: 'table'
    }
  }]
}

