import Handlebars from 'handlebars/runtime'
import { describe, expect, it } from 'vitest'

import { setConfig } from '../config'
import {
  registerHandlebarHelpers,
  registerHandlebarTemplates
} from '../handlebars'

describe('registerHandlebarHelpers', () => {
  it('should register the helpers', () => {
    setConfig({
      client: 'fetch',
      debug: false,
      dryRun: false,
      enums: 'javascript',
      exportCore: true,
      exportServices: true,
      format: true,
      input: '',
      lint: false,
      operationId: true,
      output: '',
      postfixServices: '',
      schemas: true,
      serviceResponse: 'body',
      types: {},
      useDateType: false,
      useOptions: false
    })
    registerHandlebarHelpers()
    const helpers = Object.keys(Handlebars.helpers)
    expect(helpers).toContain('camelCase')
    expect(helpers).toContain('equals')
    expect(helpers).toContain('ifdef')
    expect(helpers).toContain('notEquals')
  })
})

describe('registerHandlebarTemplates', () => {
  it('should return correct templates', () => {
    setConfig({
      client: 'fetch',
      debug: false,
      dryRun: false,
      enums: 'javascript',
      exportCore: true,
      exportServices: true,
      format: true,
      input: '',
      lint: false,
      operationId: true,
      output: '',
      postfixServices: '',
      schemas: true,
      serviceResponse: 'body',
      types: {},
      useDateType: false,
      useOptions: false
    })
    const templates = registerHandlebarTemplates()
    expect(templates.core.settings).toBeDefined()
    expect(templates.core.apiError).toBeDefined()
    expect(templates.core.apiRequestOptions).toBeDefined()
    expect(templates.core.apiResult).toBeDefined()
    expect(templates.core.request).toBeDefined()
  })
})
