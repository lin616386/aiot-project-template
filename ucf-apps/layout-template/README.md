### 配置方式
# layout 布局
# ChildRouteContainer 此处引入自己的页面，配置路由
# HeaderContainer 头部布局
# pages 此处存放创建的路由页面

# SiderContainer 渲染左侧菜单

### 入口文件
 routers > home

 SiderContainer
 参数：
    width:300,
    menus:[]
    例如:menus:[
			{
				id: "title1",
				icon: defaultIcon,
				menu: '菜单列表',
				url: '/app',
				isMenu:true, //是否显示菜单
			}
		]
HeaderContainer
参数：
    title:"标题1",
    icon:img //图片


 


		
