import NavButton from "./lib/nav-button";
import * as Text from "./lib/text";

export default function HomePage() {
  return (
    <div>
      <NavButton content="Blog" local="/Blog" />
      <Text.H1 content="Im Daniel Crutti (euphonit) and this is my website!" />
      <Text.P content="Some info about me is that I love all things music and theater!" />
    </div>
  );
}
