/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import TestData from '#models/test_data'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/test', async (event) => {
  const body = event.request.body()

  const testData = await TestData.create({
    ...body,
  })

  return testData.toJSON()
})
