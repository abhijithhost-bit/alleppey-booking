import React from "react";

interface WordPressPageViewProps {
  htmlContent: string;
  schemas?: any[];
}

export default function WordPressPageView({
  htmlContent,
  schemas = [],
}: WordPressPageViewProps) {
  const normalizedHtml = (htmlContent || "").replace(/\r\n/g, "\n");

  return (
    <>
      {schemas &&
        schemas.length > 0 &&
        schemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      <div
        className="wp-rendered-page w-full min-h-screen"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: normalizedHtml }}
      />
    </>
  );
}
