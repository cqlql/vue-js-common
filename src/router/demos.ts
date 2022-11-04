import { h } from 'vue'
import DemosNav from '@/views/comp/DemosNav.vue'
import type { RouteRecordRaw } from 'vue-router'

const demos = [
  {
    path: '/all',
    meta: {
      title: '所有常用组件',
    },
    component: () => import('@/views/AllComp/index.vue'),
  },
  {
    path: '/animation',
    meta: {
      title: 'animation - 动画',
    },
    component: () => import('@/views/Animation/AnimationView.vue'),
  },
  {
    path: '/PreventBack',
    meta: {
      title: '返回阻止',
    },
    component: () => import('@/views/PreventBack/PreventBack.vue'),
  },
  // {
  //   path: '/Skeleton',
  //   component: import('@/components/Skeleton/SkeletonDemo.vue'),
  // },
  // {
  //   path: '/CountDown',
  //   component: import('@/components/CountDown/CountDown.vue'),
  // },
  {
    path: '/TurntableView',
    meta: {
      title: 'TurntableView - 转盘抽奖',
    },
    component: () => import('@/views/Turntable/TurntableView.vue'),
  },
  {
    path: '/DigitalRandomAnimation',
    meta: {
      title: 'DigitalRandomAnimation - 随机数抽奖',
    },
    component: () =>
      import('@/views/DigitalRandomAnimation/DigitalRandomAnimation.vue'),
  },
  {
    path: '/ClockView',
    meta: {
      title: 'ClockView - 可拖动时钟',
    },
    component: () => import('@/views/ClockSimulation/ClockSimulation.vue'),
  },
  {
    path: '/DemoJSX',
    meta: {
      title: 'DemoJSX - JSX 语法实验',
    },
    component: () => import('@/views/DemoJSX/DemoJSX.vue'),
  },
  {
    path: '/PieChartCss',
    meta: {
      title: 'PieChartCss - css饼图',
    },
    component: () => import('@/views/PieChartCss/PieChartCss.vue'),
  },
  {
    path: '/Resume',
    meta: {
      title: 'Resume',
    },
    component: () => import('@/views/Resume/ResumeIndex.vue'),
  },
  {
    path: '/temp',
    meta: {
      title: '临时实验',
    },
    component: () => import('@/views/Temp/TempIndex.vue'),
  },
  {
    path: '/I18n',
    meta: {
      title: 'I18n',
    },
    component: () => import('@/views/I18n/I18nIndex.vue'),
  },
  {
    path: '/Calendar',
    meta: {
      title: 'Calendar 日历',
    },
    component: () => import('@/components/Calendar/Calendar.demo.vue'),
  },
  {
    path: '/OneWeekPicker',
    meta: {
      title: 'OneWeekPicker 日期选择',
    },
    component: () => import('@/views/OneWeekPickerDemo/OneWeekPickerDemo.vue'),
  },
  {
    path: '/VideoAdd',
    meta: {
      title: 'VideoAdd 视频增加',
    },
    component: () => import('@/views/VideoAdd/index.vue'),
  },
  {
    path: '/Search',
    meta: {
      title: 'Search 搜索',
    },
    component: () => import('@/utils/search/demo/SearchDemo.vue'),
  },
  {
    path: '/UseSearchDemo',
    meta: {
      title: 'UseSearch 搜索',
    },
    component: () => import('@/utils/search/demo/UseSearchDemo.vue'),
  },
]

const routes: RouteRecordRaw[] = demos

routes.push({
  path: '/:pathMatch(.*)',
  component: {
    render() {
      return h(DemosNav, {
        list: demos,
      })
    },
  },
})

export default routes
