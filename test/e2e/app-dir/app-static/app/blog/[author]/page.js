import Link from 'next/link'

export const config = {
  dynamicParams: false,
}

export default function Page({ params }) {
  return (
    <>
      <p id="page">/blog/[author]</p>
      <p id="params">{JSON.stringify(params)}</p>
      <p id="date">{Date.now()}</p>
      <Link href="/blog/tim" id="author-1">
        /blog/tim
      </Link>
      <br />
      <Link href="/blog/seb" id="author-2">
        /blog/seb
      </Link>
      <br />
      <Link href="/blog/styfle" id="author-3">
        /blog/styfle
      </Link>
      <br />

      <Link href="/blog/tim/first-post" id="author-1-post-1">
        /blog/tim/first-post
      </Link>
      <br />
      <Link href="/blog/seb/second-post" id="author-2-post-1">
        /blog/seb/second-post
      </Link>
      <br />
      <Link href="/blog/styfle/first-post" id="author-3-post-1">
        /blog/styfle/first-post
      </Link>
      <br />

      <Link href="/dynamic-no-gen-params/first" id="dynamic-no-params">
        /dynamic-no-gen-params/first
      </Link>
      <br />
    </>
  )
}
