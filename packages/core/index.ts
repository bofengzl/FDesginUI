import { makeInstaller } from '@f-design-ui/utils';
import components from './components';
import '@f-design-ui/theme/index.css';

const installer = makeInstaller(components);

export * from '@f-design-ui/components';
export default installer;
