```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```
The solution involves verifying the correct setup of the Next.js application and ensuring proper routing configuration. This includes checking for any typos in the file paths or errors in the Next.js configuration. If the issue persists, double-checking the version of Next.js and its dependencies might be necessary.