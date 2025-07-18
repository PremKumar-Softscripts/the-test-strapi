'use strict';

/**
 * the-demo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::the-demo.the-demo');
