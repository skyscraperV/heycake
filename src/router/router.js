// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Test = resolve => require(['../components/Test'], resolve)
const Index = resolve => require(['../components/Index'], resolve)
const ProductsList = resolve => require(['../components/ProductsList'], resolve)
const NewArrivals = resolve => require(['../components/NewArrivals'], resolve)
const UserCenter = resolve => require(['../components/UserCenter'], resolve)
const Loading = resolve => require(['../components/Loading'], resolve)
const Bar = { template: '<div>bar</div>' }
const routes = [
    { path: '/site/bar', component: Bar },
    { path: '/site/test', component: Test },
    { path: '/site/index', component: Index },
    { path: '/site/productsList', component: ProductsList },
    { path: '/site/newArrivals', component: NewArrivals },
    { path: '/site/userCenter', component: UserCenter },
    { path: '/site/loading', component: Loading }
]
export default routes
