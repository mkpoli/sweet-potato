import React from 'react';
import Head from 'next/head';

type SEO = {
  path: string;
  title: string;
  description: string;
  thumbnail: string;

  allowIndex: boolean;
};

const SEOTags: React.FC<SEO> = ({
  path,
  title,
  description,
  thumbnail,
  allowIndex,
}): JSX.Element => {
  title = title + '｜Sweet Potato';
  const domain = process.env.FRONT_URL;
  const url = domain + path;

  return (
    <Head>
      <title>{title}</title>

      {allowIndex === true ? (
        <meta name="robots" content="index,follow" />
      ) : (
        <meta name="robots" content="noindex" />
      )}

      <link rel="canonical" href={domain} />
      <meta name="keywords" content="創作譜面,Sonolus,Sweet Potato" />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnail} />
    </Head>
  );
};

export default SEOTags;
