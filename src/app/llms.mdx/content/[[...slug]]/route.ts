import { getLLMText, source } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

// @ts-ignore
export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/content/[[...slug]]'>) {
  // @ts-ignore
    const { slug } = await params;
    const encodedSlug = slug?.map(encodeURIComponent);
  const page = source.getPage(encodedSlug);
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}

export function generateStaticParams() {
  return source.generateParams();
}
