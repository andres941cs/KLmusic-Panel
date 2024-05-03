import { z } from "zod"

export const LyricSchema = z.object({
  id: z.number(),
  lyric: z.string(),
  language: z.string(),
  isInstrumental: z.number(),
  url: z.string(),
  preview: z.string().nullable(),
  id_song: z.number()
})

export type Lyric = z.infer<typeof LyricSchema>
