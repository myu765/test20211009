import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
const markdown = `
~~~Textile
どうしてこうなった!?
\`_＿＿
/∥￣∥　∧∧
L∥＿∥ (^ω^)
|￣＼三⊂/￣￣/
|　 ｜( /　　/
~~~
`
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div" {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props} >
        {children}
      </code>
    )
  },
}
export default function step01() {
  return (
    <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
  );
}