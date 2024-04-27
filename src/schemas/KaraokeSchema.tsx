import { z } from "zod"

export const KaraokeSchema = z.object({
  id: z.number(),
  settings: z.string(),
  publication_date: z.string(),
  isPublished: z.number(),
  id_lyric: z.number(),
  id_user: z.number(),
})

export type Karaoke = z.infer<typeof KaraokeSchema>
