import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Sarah Thompson",
    username: "@sarah.learnpro",
    body: "Borcella transformed our training process. Our team now onboards 3x faster!",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Michael Chen",
    username: "@mike_teachhub",
    body: "The analytics alone are worth it. Borcella helps us identify top performers instantly.",
    img: "https://avatar.vercel.sh/mike",
  },
  {
    name: "Priya Desai",
    username: "@priya.academy",
    body: "Managing live classes and self-paced modules has never been this easy.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Lucas Wright",
    username: "@lucas_trainpro",
    body: "Our learners actually enjoy the platform. Clean UX, powerful tools — win-win!",
    img: "https://avatar.vercel.sh/lucas",
  },
  {
    name: "Amira Khaled",
    username: "@amira.globallearn",
    body: "We cut content delivery time by half with Borcella’s automation features.",
    img: "https://avatar.vercel.sh/amira",
  },
  {
    name: "Daniel Rivera",
    username: "@daniel.eduplus",
    body: "The best LMS for fast-scaling teams. Zero friction, total control.",
    img: "https://avatar.vercel.sh/daniel",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-yellow-200/[.4] bg-yellow-50 hover:bg-yellow-100/[1]",
        "dark:border-yellow-100/[.1] dark:bg-yellow-100/[.1] dark:hover:bg-yellow-100/[.2]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-syne font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium font-mont dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-black font-medium font-mont-alt dark:text-white/80">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
