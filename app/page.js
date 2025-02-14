import NavButton from "./lib/nav-button";
import * as Text from "./lib/text";
import { poppins } from "./lib/fonts";

export default function HomePage() {
  return (
    <div>
      <NavButton content="Blog" local="/blog" />
      <Text.H1
        content="Im Daniel Crutti (euphonit) and this is my website!"
        css="text-blue-500"
      />
      <Text.P content="Some info about me is that I love all things music and theater!" />
    </div>
  );
}
