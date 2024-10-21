import { App, Plugin } from 'vue';

import { each } from 'lodash-es';

type SFCWithInstall<T> = T & Plugin;

export const makeInstaller = (components: Plugin[]) => {
	// 定义一个安装器函数，该函数接收一个App对象作为参数
	const installer = (app: App) => {
		// 遍历components数组中的每个插件组件
		each(components, (c) => {
			// 使用App对象的use方法注册插件组件
			// c: 当前遍历到的插件组件
			app.use(c);
		});
		// 中文注释：遍历components数组，对数组中的每个插件组件使用app的use方法进行注册
	};
	// 返回安装器函数
	return installer;
};

export const withInstall = <T>(comp: T) => {
	// 将组件扩展为带有install方法的SFCWithInstall类型
	// (SFCWithInstall<T>是一个假设的类型，实际使用时需要根据实际情况定义)
	(comp as SFCWithInstall<T>).install = (app: App) => {
		// 获取组件名称，如果组件没有定义name属性，则默认为'UnnamedComponent'
		const name = (comp as any)?.name || 'UnnamedComponent';
		// 将组件注册到Vue应用实例中，组件名称作为全局组件的标识
		app.component(name, comp as SFCWithInstall<T>);
		// 注册后返回组件实例
	};
	// 返回扩展后的组件实例
	return comp as SFCWithInstall<T>;
};
