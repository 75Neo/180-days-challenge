import { defineContentConfig, defineCollection } from "@nuxt/content";
import * as v from "valibot";

const difficultySchema = v.union([
  v.literal("de"),
  v.literal("trung-binh"),
  v.literal("kho"),
  v.literal("chuyen-gia"),
]);

const categorySchema = v.union([
  v.literal("fundamentals"),
  v.literal("data-structure"),
  v.literal("algorithm"),
  v.literal("design-pattern"),
]);

const baseSchema = v.object({
  title: v.string(),
  description: v.string(),
  lastUpdate: v.date(),
  day: v.optional(v.number()),
  difficulty: v.optional(difficultySchema),
  category: v.optional(categorySchema),
  estimatedMinutes: v.optional(v.number()),
  tags: v.optional(v.array(v.string())),
  prerequisites: v.optional(v.array(v.string())),
  outcomes: v.optional(v.array(v.string())),
});

export default defineContentConfig({
  collections: {
    challenges: defineCollection({
      type: "page",
      source: "challenges/**/*.md",
      schema: baseSchema,
    }),
    fundamentals: defineCollection({
      type: "page",
      source: "fundamentals/**/*.md",
      schema: baseSchema,
    }),
  },
});
