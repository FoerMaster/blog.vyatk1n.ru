import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Привет, мир</h1>
      <p>
        Вы можете открыть{' '}
        <Link href="/content" className="font-medium underline">
          /content
        </Link>{' '}
        и посмотреть документацию.
      </p>
    </div>
  );
}
