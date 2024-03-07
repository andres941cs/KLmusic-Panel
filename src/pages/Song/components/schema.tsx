import { z } from "zod"

export const SongSchema = z.object({
  id: z.number(),
  name: z.string(),
  duration: z.number(),
  genre: z.string(),
})

export type Song = z.infer<typeof SongSchema>
// export type Song = {
//   id: string
//   name:string
//   duration: Number
//   genre: string
// }