import React from 'react';
import './Page.css';

const Page = ({ className, children })  => {
  return (
    <>
        <article className={`content ${className}`}>{children}</article>
    </>
  )
}

export default Page;
