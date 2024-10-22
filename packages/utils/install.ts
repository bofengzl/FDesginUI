import { App, Plugin } from 'vue';

import { each } from 'lodash-es';

// 定义一个类型，表示带有安装方法的单文件组件
type SFCWithInstall<T> = T & Plugin;

// 创建一个安装器函数，用于批量安装多个组件
export const makeInstaller = (components: Plugin[]) => {
	// 定义一个安装器函数，该函数接收一个App对象作为参数
	const installer = (app: App) => {
		// 遍历components数组中的每个插件组件
		each(components, (c) => {
			// 使用App对象的use方法注册插件组件
			app.use(c);
		});
		// 遍历components数组，对数组中的每个插件组件使用app的use方法进行注册
	};
	// 返回安装器函数
	return installer;
};

// 为组件添加安装方法，使其成为可安装的插件
export const withInstall = <T>(comp: T) => {
	// 将组件扩展为带有install方法的SFCWithInstall类型
	(comp as SFCWithInstall<T>).install = (app: App) => {
		// 获取组件名称，如果组件没有定义name属性，则默认为'UnnamedComponent'
		const name = (comp as any)?.name || 'UnnamedComponent';
		// 将组件注册到Vue应用实例中，组件名称作为全局组件的标识
		app.component(name, comp as SFCWithInstall<T>);
	};
	// 返回扩展后的组件实例
	return comp as SFCWithInstall<T>;
};
