/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    "Getting Started": ['getting-started', 'dev-portal', 'faq'],
    "Guides": ['connections', 'credentials', 'verifications', 'organizations', 'webhooks'],
    "API Reference": [
      'api',
      {type: 'link', label: 'Agency API', href: '../agency'},
      {type: 'link', label: 'Custodian', href: '../custody'}
      ]
  },
};
