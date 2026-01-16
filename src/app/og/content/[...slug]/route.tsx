import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from '@takumi-rs/image-response';
import { generate as DefaultImage } from 'fumadocs-ui/og';

export const revalidate = false;

// @ts-ignore
export async function GET(_req: Request, { params }: RouteContext<'/og/content/[...slug]'>) {
  // @ts-ignore
    const { slug } = await params;
    const encodedSlug = slug.map(encodeURIComponent).slice(0, -1);
    const page = source.getPage(encodedSlug);
  if (!page) notFound();

  return new ImageResponse(
    <DefaultImage title={page.data.title} description={page.data.description} site="Polochka" />,
    {
      width: 1200,
      height: 630,
        format: 'webp'
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
