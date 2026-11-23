import type { ReactNode } from "react";

/**
 * Minimal single-line highlighter inside the two-signal palette:
 * keywords and JSX tags in design blue, comments muted, security-relevant
 * tokens in amber, everything else plain text.
 */
const KEYWORDS =
  /^(?:const|let|var|function|return|export|default|import|from|if|else|for|of|in|await|async|new|type|interface|extends|true|false|null|undefined|class|try|catch|throw)$/;
const SECURITY =
  /^(?:Content-Security-Policy|Strict-Transport-Security|X-Content-Type-Options|X-Frame-Options|Referrer-Policy|Permissions-Policy|Cross-Origin-Opener-Policy|nonce|integrity|csp|headers|securityHeaders|rateLimit|frame-ancestors)$/;

const TOKEN = /(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(<\/?[A-Za-z][\w.]*)|([A-Za-z_$][\w$-]*)/g;

export function highlight(line: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  for (const m of line.matchAll(TOKEN)) {
    const i = m.index ?? 0;
    if (i > last) out.push(line.slice(last, i));
    const [text, comment, str, tag, word] = m;
    if (comment) out.push(<span key={k++} className="text-text-muted">{text}</span>);
    else if (str) {
      const inner = str.slice(1, -1);
      out.push(
        <span key={k++} className={SECURITY.test(inner) ? "text-security" : undefined}>
          {text}
        </span>,
      );
    } else if (tag) out.push(<span key={k++} className="text-design">{text}</span>);
    else if (word && SECURITY.test(word)) out.push(<span key={k++} className="text-security">{text}</span>);
    else if (word && KEYWORDS.test(word)) out.push(<span key={k++} className="text-design">{text}</span>);
    else out.push(text);
    last = i + text.length;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
}
