import Link from "next/link";

export default function GitPage() {
  return (
    <div>
      <p
        className="antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md
        cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
        focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700"
      >
        <Link href="/pages/blog">Back to blog home</Link>
      </p>
      <h1 className="antialiased font-bold text-7xl text-center text-white bg-red-700">
        3# Our lead male just quit our theater show (Mar 20, 2025)
      </h1>
      <br />
      <p className="antialiased text-3xl text-white text-center text-clip">
        My Junior High is doing Charlie and The Chocolate Factory for our end-of-year musical, and our
        guy playing Willy Wonka just quit.
      </p>
      <p className="antialiased text-3xl text-white text-center text-clip">
        <br />
        Our show had is split, where one show all the 7th graders are lead characters and one show all
        the 8th graders are the leads. The 7th grader we have playing wonka is super underprepared. The
        8th grader we have is a really talented guy with a strong voice. The 8th grade wonka had
        skipped practice every day this week, and the theater teacher said he HAD to come in for
        today's practice (They had agreed beforehand he could skip all week if he went to this practice
        today). He walks in today and tells the teacher he is skipping this rehearsal. She is obviously
        furious because he said he would come today. She said there are no exceptions for just cause he
        is the lead and if he refuses to attend this rehearsal he's out of the show. Then he just walks
        out of the room.
      </p>
    </div>
  );
}
