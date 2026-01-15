import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import React from 'react';
import { Box, NotebookPen } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/content'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        defaultOpenLevel: 99,
        tabs: [
          {
            title: 'Блог',
            description: 'Записи блога',
            url: '/content/blog',
            icon: <NotebookPen size={20} color={'oklch(59.6% 0.145 163.225)'} />,
          },
          {
            title: 'Ресурсы',
            description: 'Подборки материалов',
            url: '/content/resources',
            icon: <Box size={20} color={'oklch(51.1% 0.262 276.966)'} />,
          },
        ],
      }}
    >
      {children}
    </DocsLayout>
  );
}
