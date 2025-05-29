import { defineDb, defineTable, column } from 'astro:db';

export const School = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
      autoIncrement: true,
    }),
    name: column.text(),
  },
})

export const Answer = defineTable({
  columns: {
    id: column.number(),
    schoolId: column.number({
      references: () => School.columns.id,
    }),
    best: column.text(),
    worst: column.text(),
    middle: column.text(),
  }
});

export default defineDb({
  tables: { 
    School,
    Answer
  },
})