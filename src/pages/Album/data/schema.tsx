import { z } from "zod"

export const AlbumSchema = z.object({
  id: z.number(),
  name: z.string(),
  release_date: z.string(),
  genre: z.string(),
  id_artist: z.number()
})

export type Album = z.infer<typeof AlbumSchema>