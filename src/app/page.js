import NavButton from "./comp/nav-button";
import * as Text from "./comp/text";

export default function HomePage() {
  return (
    <div>
      <NavButton content="Blog" local="/Blog" />
      <Text.H1 content="Im Daniel Crutti (euphonit) and this is my website!" />
      <Text.H4 content="Im a highschool student" />
      <Text.P content="Some info about me is that I love all things music and theater!" />
    </div>
  );
}
