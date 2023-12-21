import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/product-single-one',
    name: 'product-single-one',
    component: () => import('../components/products/ProductSingleOne.vue')
  },
  {
    path: '/product-single-two',
    name: 'product-single-two',
    component: () => import('../components/products/ProductSingleTwo.vue')
  },
  {
    path: '/product-single-three',
    name: 'product-single-three',
    component: () => import('../components/products/ProductSingleThree.vue')
  },
  {
    path: '/product-single-four',
    name: 'product-single-four',
    component: () => import('../components/products/ProductSingleFour.vue')
  },
  {
    path: '/product-single-five',
    name: 'product-single-five',
    component: () => import('../components/products/ProductSingleFive.vue')
  },
  {
    path: '/product-single-six',
    name: 'product-single-six',
    component: () => import('../components/products/ProductSingleSix.vue')
  },
  {
    path: '/product-single-seven',
    name: 'product-single-seven',
    component: () => import('../components/products/ProductSingleSeven.vue')
  }, {
    path: '/product-single-eight',
    name: 'product-single-eight',
    component: () => import('../components/products/ProductSingleEight.vue')
  },
  {
    path: '/product-single-nine',
    name: 'product-single-nine',
    component: () => import('../components/products/ProductSingleNine.vue')
  },
  {
    path: '/product-single-ten',
    name: 'product-single-ten',
    component: () => import('../components/products/ProductSingleTen.vue')
  },
  {
    path: '/product-single-nine',
    name: 'product-single-nine',
    component: () => import('../components/products/ProductSingleNine.vue')
  }, {
    path: '/product-single-eleven',
    name: 'product-single-eleven',
    component: () => import('../components/products/ProductSingleEleven.vue')
  }, {
    path: '/product-single-twelwe',
    name: 'product-single-twelwe',
    component: () => import('../components/products/ProductSingleTwelwe.vue')
  }, {
    path: '/product-single-thirdteen',
    name: 'product-single-thirdteen',
    component: () => import('../components/products/ProductSingleThirdteen.vue')
  }, {
    path: '/product-single-fourteen',
    name: 'product-single-fourteen',
    component: () => import('../components/products/ProductSingleFourteen.vue')
  }, {
    path: '/product-single-fiveteen',
    name: 'product-single-fiveteen',
    component: () => import('../components/products/ProductSingleFiveteen.vue')
  }, {
    path: '/product-single-sixteen',
    name: 'product-single-sixteen',
    component: () => import('../components/products/ProductSingleSixteen.vue')
  }, {
    path: '/product-single-seventeen',
    name: 'product-single-seventeen',
    component: () => import('../components/products/ProductSingleSeventeen.vue')
  }, {
    path: '/product-single-eightteen',
    name: 'product-single-eightteen',
    component: () => import('../components/products/ProductSingleEightteen.vue')
  }, {
    path: '/product-single-nineteen',
    name: 'product-single-nineteen',
    component: () => import('../components/products/ProductSingleNineteen.vue')
  }, {
    path: '/product-single-twenty',
    name: 'product-single-twenty',
    component: () => import('../components/products/ProductSingleTwenty.vue')
  }, {
    path: '/product-single-twentyone',
    name: 'product-single-twentyone',
    component: () => import('../components/products/ProductSingleTwentyone.vue')
  }, {
    path: '/product-single-twentytwo',
    name: 'product-single-twentytwo',
    component: () => import('../components/products/ProductSingleTwentytwo.vue')
  }, {
    path: '/product-single-twentythree',
    name: 'product-single-twentythree',
    component: () => import('../components/products/ProductSingleTwentythree.vue')
  }, {
    path: '/product-single-twentyfour',
    name: 'product-single-twentyfour',
    component: () => import('../components/products/ProductSingleTwentyfour.vue')
  },
  {
    path: '/product-single-twentyfive',
    name: 'product-single-twentyfive',
    component: () => import('../components/products/ProductSingleTwentyfive.vue')
  }, {
    path: '/product-single-twentysix',
    name: 'product-single-twentysix',
    component: () => import('../components/products/ProductSingleTwentysix.vue')
  }, {
    path: '/product-single-twentyseven',
    name: 'product-single-twentyseven',
    component: () => import('../components/products/ProductSingleTwentyseven.vue')
  },
  {
    path: '/product-single-twentyeight',
    name: 'product-single-twentyeight',
    component: () => import('../components/products/ProductSingleTwentyeight.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router
