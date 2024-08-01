import { FC, memo } from "react";
import ReactMarkdown, { Options } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const Base: FC<Options> = memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
);

export const Markdown: FC<Options> = (props) => {
  return (
    <Base
      className="prose prose-neutral dark:prose-invert min-w-full"
      remarkPlugins={[remarkGfm, remarkMath]}
      components={{
        table: (props) => (
          <div className="overflow-x-auto">
            <table {...props} />
          </div>
        ),
      }}
      {...props}
    />
  );
};
