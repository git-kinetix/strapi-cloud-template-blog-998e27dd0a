'use strict';

/**
 * mocap service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mocap.mocap');
