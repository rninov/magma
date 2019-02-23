/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appIndexJs: resolveApp('app/main.js'),
  loginJs: resolveApp('app/login.js'),
  appSrc: resolveApp('app'),
  distPath: resolveApp('static/dist'),
  // relative path to application directory
  packagesDir: resolveApp('../../fbcnms-packages'),
  resolveApp,
};