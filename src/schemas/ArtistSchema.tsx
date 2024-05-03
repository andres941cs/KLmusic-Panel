import { z } from "zod"

export const ArtistSchema = z.object({
  id: z.number(),
  name: z.string(),
  country: z.string(),
  verified: z.number(),
  image: z.string().nullable(),
})

export type Artist = z.infer<typeof ArtistSchema>
