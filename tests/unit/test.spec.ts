import testUtils from '@adonisjs/core/services/test_utils'
import { faker } from '@faker-js/faker'
import TestData from '#models/test_data'
import { test } from '@japa/runner'
import env from '#start/env'

const batchSizes = 10000

test.group('browser', (group) => {
  // --> HOOKS <--

  // _group.tap(test => test.pin())

  group.each.setup(() => testUtils.db().withGlobalTransaction())

  // --> GET TEAM FROM BASIC TOKEN <--

  test(`create ${batchSizes} TestData`, async ({ assert }) => {
    for (let i = 0; i < batchSizes; i++) {
      await TestData.create({
        text: faker.word.sample(),
        text2: faker.word.sample(),
        text3: faker.word.sample(),
        text4: faker.word.sample(),
      })
    }

    assert.equal(true, true)
  })

  test(`create ${batchSizes} TestData`, async ({ assert }) => {
    for (let i = 0; i < batchSizes; i++) {
      await TestData.create({
        text: faker.word.sample(),
        text2: faker.word.sample(),
        text3: faker.word.sample(),
        text4: faker.word.sample(),
      })
    }

    assert.equal(true, true)
  })

  test(`create ${batchSizes} TestData`, async ({ assert }) => {
    for (let i = 0; i < batchSizes; i++) {
      await fetch(`http://${env.get('HOST')}:${env.get('PORT')}/test`, {
        method: 'POST',
        body: JSON.stringify({
          text: faker.word.sample(),
          text2: faker.word.sample(),
          text3: faker.word.sample(),
          text4: faker.word.sample(),
        }),
      })
    }

    assert.equal(true, true)
  })

  test(`create ${batchSizes} TestData`, async ({ assert }) => {
    for (let i = 0; i < batchSizes; i++) {
      await TestData.create({
        text: faker.word.sample(),
        text2: faker.word.sample(),
        text3: faker.word.sample(),
        text4: faker.word.sample(),
      })
    }

    assert.equal(true, true)
  })

  test(`create ${batchSizes} TestData`, async ({ assert }) => {
    for (let i = 0; i < batchSizes; i++) {
      await TestData.create({
        text: faker.word.sample(),
        text2: faker.word.sample(),
        text3: faker.word.sample(),
        text4: faker.word.sample(),
      })
    }

    await new Promise((resolve) => setTimeout(resolve, 4000))

    assert.equal(true, true)
  })

  test(`create ${batchSizes} TestData`, async ({ assert }) => {
    for (let i = 0; i < batchSizes; i++) {
      await TestData.create({
        text: faker.word.sample(),
        text2: faker.word.sample(),
        text3: faker.word.sample(),
        text4: faker.word.sample(),
      })
    }

    await new Promise((resolve) => setTimeout(resolve, 4000))

    assert.equal(true, true)
  })

  test(`create ${batchSizes} TestData`, async ({ assert }) => {
    for (let i = 0; i < batchSizes; i++) {
      await TestData.create({
        text: faker.word.sample(),
        text2: faker.word.sample(),
        text3: faker.word.sample(),
        text4: faker.word.sample(),
      })
    }

    await new Promise((resolve) => setTimeout(resolve, 4000))

    assert.equal(true, true)
  })
})
