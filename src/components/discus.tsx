'use client';
import Giscus from '@giscus/react';


export default function DiscusBlock() {
    return (
        <Giscus
            id='comments'
            repo='FoerMaster/blog.vyatk1n.ru'
            repoId='R_kgDOQ6S6aQ'
            category='Announcements'
            categoryId='DIC_kwDOQ6S6ac4C1EWC'
            mapping='title'
            term='Welcome to namnguyenthanhwork/giscus-demo-nextjs'
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='top'
            theme='transparent_dark'
            lang='ru'
            loading='lazy'
        />
    );
}