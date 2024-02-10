import testUtils from '@adonisjs/core/services/test_utils'
import { faker } from '@faker-js/faker'
import TestData from '#models/test_data'
import { test } from '@japa/runner'

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
})
