import { SITE_URL } from "@/constants/profile";

export const dynamic = "force-static";

const allowAll = { allow: "/" };

const answerEngineAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", ...allowAll },
      ...answerEngineAgents.map((userAgent) => ({ userAgent, ...allowAll })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
