import './storybook.requires';
import {getStorybookUI} from '@storybook/react-native';

export default getStorybookUI({
  enableWebsockets: !process.env.JEST_WORKER_ID, // We don't want to enable web sockets when running headless tests
  initialSelection: null,
  onDeviceUI: true,
  port: 7007,
  shouldPersistSelection: false,
});
