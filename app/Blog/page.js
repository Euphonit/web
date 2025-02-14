import NavButton from "../lib/nav-button";
import * as Text from "../lib/text";

export default function BlogPage() {
  return (
    <div>
      <NavButton content="Home" local="/" />
      <Text.H1 content="Blog Test" />
    </div>
  );
}
