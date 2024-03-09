import { z } from "zod"

export const KaraokeSchema = z.object({
  id: z.number(),
  settings: z.string(),
  id_lyric: z.number(),
})

export type Karaoke = z.infer<typeof KaraokeSchema>
