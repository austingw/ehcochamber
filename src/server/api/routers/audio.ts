import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import axios from "axios";

export const audio = createTRPCRouter({
  getAudio: publicProcedure.query(async () => {
    try {
      const response = await axios.get(
        "https://www.myinstants.com/media/sounds/goofy-ahh-sounds.mp3",
        {
          responseType: "arraybuffer",
          headers: {
            "Content-Type": "audio/mpeg",
            Accept: "audio/mpeg",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(
          `Failed to fetch audio: ${response.status} ${response.statusText}`
        );
      }

      return response?.data;
    } catch (error) {
      console.error("Error fetching audio:", error);
      throw error;
    }
  }),
});
