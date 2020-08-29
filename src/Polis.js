const { InvalidArgumentException } = require('@adonisjs/generic-exceptions')

class Polis {
  constructor (Config) {
    this.config = Config.merge('polis', {
      tenantColumn: 'tenant',
      tenantSource: 'url_param',
      tenantSourceKey: 'tenant'
    })
  }

  setTenant (tenant) {
    if (!tenant) {
      throw InvalidArgumentException.invalidParameter(
        'Tenant must be a valid string',
        tenant
      )
    }
    this.tenant = tenant
  }

  /**
   * @todo clean up hard code for seeding
   * @returns {*|number}
   */
  getTenant () {
    return this.tenant ? this.tenant : 1
  }

  getTenantColumn () {
    return this.config.tenantColumn
  }

  getTenantSource () {
    return this.config.tenantSource
  }

  getTenantSourceKey () {
    return this.config.tenantSourceKey
  }

  hasTenancy () {
    return !!this.tenant
  }
}

module.exports = Polis