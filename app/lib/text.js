import { poppins } from "./fonts";

export function H1({ content, css = "" }) {
  return (
    <h1 className="text-blue-500">{content ? content : "Default text"}</h1>
  );
}

export function H2({ content }) {
  return (
    <h2 className={`${poppins.className} antialiased`}>
      {content ? content : "Default text"}
    </h2>
  );
}

export function H3({ content }) {
  return <h3>{content ? content : "Default text"}</h3>;
}

export function H4({ content }) {
  return <h4>{content ? content : "Default text"}</h4>;
}

export function P({ content, font }) {
  return (
    <p className={`${poppins.className} antialiased`}>
      {content ? content : "Default text"}
    </p>
  );
}
