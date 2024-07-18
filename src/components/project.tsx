import Link from "next/link";
import { TdesignLogoGithubFilled } from "./icons/github";
import { MdiWeb } from "./icons/web";

type Props = {
  name: string;

  github?: string;
  website?: string;
};

export default function Project(props: Props) {
  return (
    <div className="border flex items-center justify-between gap-2 border-neutral-900 bg-gradient-to-r from-blue-800/20 to-neutral-950 rounded-xl p-4">
      <div>{props.name}</div>

      <div className="flex items-center gap-4">
        {props.github && (
          <Link href={props.github}>
            <TdesignLogoGithubFilled className="size-6" />
          </Link>
        )}

        {props.website && (
          <Link href={props.website}>
            <MdiWeb className="size-6" />
          </Link>
        )}
      </div>
    </div>
  );
}
