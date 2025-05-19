import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
const { generateCssVariables } = require('../utils/theme-utils');

class MyDocument extends Document {
  render() {
    const cssVars = generateCssVariables();

    return (
      <Html lang="en" className="theme-compiled">
        <Head>
          <style>{`:root{${cssVars}}`}</style>
        </Head>
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;