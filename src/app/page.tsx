import Image from "next/image";
import ProfilePicture from "../assets/pfp.webp";
import { MaterialSymbolsAlternateEmail } from "@/components/icons/email";
import { TdesignLogoGithubFilled } from "@/components/icons/github";
import Link from "next/link";
import Project from "@/components/project";
import { MaterialSymbolsNestClockFarsightAnalogOutline } from "@/components/icons/clock";
import { AkarIconsJavascriptFill } from "@/components/icons/javascript";
import { AkarIconsTypescriptFill } from "@/components/icons/typescript";
import { AkarIconsReactFill } from "@/components/icons/react";
import { SimpleIconsLua } from "@/components/icons/lua";

export default function Home() {
  return (
    <main>
      <div className="mt-10 text-neutral-100 space-y-5">
        <div className="flex gap-4">
          <Image
            className="size-40 rounded-xl"
            src={ProfilePicture}
            alt="pfp"
          />

          <div className="space-y-1.5 py-1">
            <div>
              <div className="text-4xl font-semibold">Hey! I&apos;m PEEVEE</div>
              <div className="text-neutral-300">
                I&apos;m full-stack developer from Finland
              </div>
            </div>

            <div className="space-y-1">
              {/* Github  */}
              <div className="flex items-center gap-1">
                <TdesignLogoGithubFilled className="size-5" />
                <Link href={"https://github.com/PEEVEEz"}>
                  github.com/PEEVEEz
                </Link>
              </div>

              {/* Email  */}
              <div className="flex items-center gap-1">
                <MaterialSymbolsAlternateEmail className="size-5" />
                <Link href={"mailto:zzpeeveezz@gmail.com"}>
                  zzpeeveezz@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-1">
                <MaterialSymbolsNestClockFarsightAnalogOutline className="size-5" />
                <div>Coding Time (Last 7 days):</div>
                <div>3 hours 10 minutes</div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="px-1">
          <div className="text-2xl font-semibold">Skills</div>

          <div className="mt-2.5 space-y-4">
            <div className="space-y-1">
              <div className="flex gap-2">
                <AkarIconsReactFill className="size-5 text-[#61DBFB]" />
              </div>

              <div className="h-4 w-full border border-neutral-900 rounded-xl">
                <div className="bg-blue-800/20 h-full w-[75%] rounded-xl"></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex gap-2">
                <SimpleIconsLua className="size-5 text-[#000080]" />
              </div>

              <div className="h-4 w-full border border-neutral-900 rounded-xl">
                <div className="bg-blue-800/20 h-full w-[80%] rounded-xl"></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex gap-2">
                <AkarIconsJavascriptFill className="size-5 text-[#f7df1e]" />
                <div>&</div>
                <AkarIconsTypescriptFill className="size-5 text-[#007acc]" />
              </div>

              <div className="h-4 w-full border border-neutral-900 rounded-xl">
                <div className="bg-blue-800/20 h-full w-[85%] rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects  */}
        <div className="px-1">
          <div className="text-2xl font-semibold">My Work</div>

          <div className="space-y-4 mt-4">
            <Project name="Unity Website" website="https://unityx.fi" />

            <Project
              name="Slottisysteemit"
              github="https://github.com/slottisysteemit"
              website="https://slottisysteemit.com"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
