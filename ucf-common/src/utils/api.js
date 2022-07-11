/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2020-07-14 09:54:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-28 11:35:43
 */

export default {
    // 菜单
    getAccessMemu: `GET /authn/api/v1/current/getaccessmenu`, // 查询所有菜单树
    getAllMenus: `GET /authn/api/v1/menu.tree`, //获取所有菜单
    getOrgsTree: `GET /authn/api/v1/current/grouptree`,//获取用户下组织树
    getLicenseInfo: `GET /authn/api/v1/lic`, // 获取license授权规格信息
    // lang
    getResources: 'GET /locale/api/v2/resource/lang/:lang',// 获取网站的语料资源
    getLangOptions: 'GET /locale/api/v2/language', // 获取支持的语种列表
    // 租户
    getTenants: 'GET /cloud-user/api/v1/tenant', //获取租户列表
    SwitchTenant:'POST /cloud-user/api/v1/switchTenant', //切换租户
    isOrganizationAdmin: 'GET /authn/api/v1/orgAdmin', //是否为企业管理员

    // 用户
    getUserInfo: 'GET /authn/api/v1/identify',
    // logout: 'GET /cloud-user/api/v1/logout',
    logout:'https://diwork-daily.yyuap.com/logout?tenantId=tl27pqwt&service=https%3A%2F%2Fdiwork-daily.yyuap.com%2F',

}
