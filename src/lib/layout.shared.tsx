import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import logo from '@/app/logo.svg';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <Image
            src={logo}
            alt="Логотип"
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className={"text-xl ms-2"}>Polochka</span>
        </span>
      ),
    },
    i18n: false,
  };
}
