/**
 * INSTAGRAM ИНТЕГРАЦ — Бүтээлүүд хуудас
 * ------------------------------------------------------------------
 * ⚠️ ЗАСВАР: Техникийн тодорхойлолтод дурдсан "Instagram Basic Display API"
 * нь Meta-гаас 2024 оны 12-р сарын 4-нд бүрэн зогссон (deprecated and
 * shut down). Одоо зөвхөн дараах хоёр сонголт байна:
 *
 *   1. Instagram Graph API — Business/Creator account, Facebook Page-тэй
 *      холбоотой байх шаардлагатай. (Энэ файлд ашигласан арга)
 *   2. "Instagram API with Instagram Login" — Facebook Page шаардлагагүй,
 *      Professional (Business/Creator) account шууд холбогддог дараа үеийн
 *      орлогч. Хэрэв зураач Facebook Page үүсгэхийг хүсэхгүй бол энэ нь
 *      хялбар сонголт.
 *
 * Хоёр сонголтын аль нэгийг ашиглахын тулд Instagram account заавал
 * Professional (Business/Creator) болгож хөрвүүлэх ёстой — хувийн
 * (personal) account-аас өгөгдөл татах боломж аль алинд нь байхгүй.
 *
 * Blueprint 3.1-д заасан "1 цаг тутамд кэшлэх" шаардлагыг Next.js-ийн
 * built-in fetch cache (`next: { revalidate }`) ашиглан server-side
 * хийнэ — клиент тал шууд Meta-той ярьдаггүй тул rate-limit-д өртөхгүй.
 */

const GRAPH_API_VERSION = "v22.0";

export type InstagramPost = {
  id: string;
  caption?: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  timestamp: string;
  likeCount?: number;
  commentsCount?: number;
};

export async function getRecentInstagramPosts(
  limit = 12,
): Promise<InstagramPost[]> {
  const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accountId || !accessToken) {
    throw new Error(
      "Instagram account холбоогдоогүй байна. .env.local-д INSTAGRAM_BUSINESS_ACCOUNT_ID, INSTAGRAM_ACCESS_TOKEN-г тохируулна уу.",
    );
  }

  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "thumbnail_url",
    "permalink",
    "timestamp",
    "like_count",
    "comments_count",
  ].join(",");

  const url =
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${accountId}/media` +
    `?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

  const res = await fetch(url, {
    // App-ийн Instagram феед нь хамгийн багадаа цаг тутамд шинэчлэгдэх
    // ёстой (Acceptance Criteria) — 3600 секунд тутамд дахин fetch хийнэ.
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Instagram Graph API алдаа: ${res.status} ${errorBody}`);
  }

  const json = await res.json();

  return (json.data ?? []).map(
    (item: {
      id: string;
      caption?: string;
      media_type: InstagramPost["mediaType"];
      media_url: string;
      thumbnail_url?: string;
      permalink: string;
      timestamp: string;
      like_count?: number;
      comments_count?: number;
    }) => ({
      id: item.id,
      caption: item.caption,
      mediaType: item.media_type,
      mediaUrl: item.media_url,
      thumbnailUrl: item.thumbnail_url,
      permalink: item.permalink,
      timestamp: item.timestamp,
      likeCount: item.like_count,
      commentsCount: item.comments_count,
    }),
  );
}

/**
 * Access token-ийн хүчинтэй хугацаа ~60 хоног. Энэ функцийг
 * cron job (жишээ нь Vercel Cron, 50 хоног тутамд) дотроос дуудаж,
 * шинэчлэгдсэн token-ийг secrets store (Vercel env vars API,
 * эсвэл database) рүү бичих ёстой.
 */
export async function refreshInstagramToken(currentToken: string) {
  const url =
    `https://graph.instagram.com/refresh_access_token` +
    `?grant_type=ig_refresh_token&access_token=${currentToken}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Instagram token refresh амжилтгүй боллоо.");
  }
  return res.json() as Promise<{ access_token: string; expires_in: number }>;
}
