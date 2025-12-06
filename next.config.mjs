import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 1. Enable 'standalone' output to ensure the advanced file tracing is active
  // This is often required for the exclusion property to work reliably on Vercel.
  output: "standalone",

  // 2. Explicitly exclude the 'best' directory from all serverless function traces
  // This tells the Vercel build to not include these files in the server bundle.
  outputFileTracingExcludes: {
    // The '/' key applies this exclusion to all serverless routes
    "/": [
      // Excludes all files and folders recursively inside 'public/Photography/best'
      "public/Photography/best/**/*",
    ],
  },

  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
