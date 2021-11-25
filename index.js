/**
 * @format
 */

import { CacheProvider } from 'rest-hooks';
import React, { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const Root = () => (
    <CacheProvider>
        <App />
    </CacheProvider>
);

AppRegistry.registerComponent(appName, () => Root);
