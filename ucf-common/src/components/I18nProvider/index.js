import React, {Component} from 'react';
import {ConfigProvider,} from 'antd';
import {ConfigProvider as AiotConfigProvider, context, NoData} from 'aiot-design';
import {defaultRequestOptions} from '../../utils/app';


//antd 所需文件，不需要删除
import antd_zh_CN from 'antd/es/locale/zh_CN'
import antd_zh_TW from 'antd/es/locale/zh_TW'
import antd_en_US from 'antd/es/locale/en_US'
import 'moment/locale/zh-cn';
import 'moment/locale/zh-tw';

//antd 相关多语
let antdLocales = {
    'zh-CN': antd_zh_CN,
    'zh-TW': antd_zh_TW,
    'en-US': antd_en_US,
};

ConfigProvider.config({
    rootPrefixCls: 'aiot-design',
    prefixCls: 'aiot-design',
});

let optionsOfRequest = defaultRequestOptions;

export default function ({children, menus = [], groups = [], isAdmin = false}) {
    let i18n = window.i18n;
    let lang = i18n.getLang();
    console.log(lang, 'langProducts');
    let locale = antdLocales[lang] || require(`antd/es/locale/${lang.replace(/-|_/gi, '_')}`);
    let htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.setAttribute('lang', lang);
    let GlobalContext = context();
    return (
        //renderEmpty  重写antd的Empty组件，改成用友的图标
        <ConfigProvider autoInsertSpaceInButton={false} renderEmpty={() => <NoData lang={lang}/>} locale={locale}
                        prefixCls="aiot-design">
            <AiotConfigProvider autoInsertSpaceInButton={false}
                                locale={require(`aiot-design/lib/components/locale/${lang.replace(/-|_/gi, '_')}`).default}
                                lang={lang} defaultOptionsOfRequest={optionsOfRequest}>
                <GlobalContext.Provider value={{
                    menus,
                    groups,
                    isAdmin
                }}>
                    {children}
                </GlobalContext.Provider>
            </AiotConfigProvider>
        </ConfigProvider>

    )
}

