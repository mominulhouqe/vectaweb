// pages/license.tsx
import type { NextPage } from "next";
import Head from "next/head";

const License: NextPage = () => {
  return (
    <>
      <Head>
        <title>License - Vectaweb</title>
        <meta name="description" content="License information for Vectaweb" />
      </Head>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">License Information</h1>
          <p className="text-lg mb-4">
            This project is licensed under the MIT License. The full text of the
            license is provided below:
          </p>
          <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded border border-gray-300">
            {`MIT License

Copyright (c) 2024 vectaweb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`}
          </pre>
        </div>
      </div>
    </>
  );
};

export default License;
