import { z } from "zod"

export const LyricSchema = z.object({
  id: z.number(),
  lyric: z.string(),
  language: z.string(),
  isInstrumental: z.number(),
  url: z.string(),
  id_song: z.number()
})

export type Lyric = z.infer<typeof LyricSchema>

export const KaraokeSchema = z.object({
  id: z.number(),
  settings: z.string(),
  id_lyric: z.number(),
})

export type Karaoke = z.infer<typeof KaraokeSchema>

export const PublicationSchema = z.object({
  id: z.number(),
  text: z.string(),
  isPublished: z.number(),
  publication_date: z.string(),
  id_user: z.number(),
  id_karaoke: z.number()
})

export type Publication = z.infer<typeof PublicationSchema>