import { type SchemaTypeDefinition } from 'sanity'
import { serviceSchema } from '../schema/service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceSchema],
}
