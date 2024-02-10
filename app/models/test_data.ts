import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TestData extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare text?: string

  @column()
  declare text2?: string

  @column()
  declare text3?: string

  @column()
  declare text4?: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
