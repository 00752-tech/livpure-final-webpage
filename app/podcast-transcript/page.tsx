import type { Metadata } from "next"
import { PodcastTranscriptContent } from "./podcast-transcript-content"

export const metadata: Metadata = {
  title: "LivPure Podcast Transcript: Fat Burning Breakthrough",
  description:
    "Read the full transcript of our podcast episode on how LivPure supports metabolism and promotes fat burning. Discover the science behind LivPure's natural ingredients.",
}

export default function PodcastTranscriptPage() {
  return <PodcastTranscriptContent />
}

