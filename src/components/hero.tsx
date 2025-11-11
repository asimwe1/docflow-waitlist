"use client";

import { useMemo, useState } from "react";
import Countdown from "./countdown";
import People from "./people";
import { Logo } from "./svgs";
import Form from "./form";

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12">
      {/* Logo + Status */}
      <div className="flex flex-col items-center justify-center gap-6">
        <Logo />
        <div className="flex items-center gap-3 rounded-full border border-border px-4 py-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Launching December {year}
          </p>
        </div>
      </div>

      {/* Headline + Subheadline */}
      <div className="flex flex-col items-center justify-center gap-3 text-center max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          {isSuccess ? (
            <>You’re on the waitlist</>
          ) : (
            <>
              Extract PDF Data in <span className="text-emerald-600 dark:text-emerald-400">Seconds</span>
            </>
          )}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
          {isSuccess ? (
            <>
              You’ve secured your spot. We’ll notify you the moment early access opens.{" "}
              <strong className="text-emerald-600 dark:text-emerald-400">
                Your $9/month lifetime rate is locked.
              </strong>
            </>
          ) : (
            <>
              Join 200+ accountants saving <strong>5+ hours/week</strong> on invoice entry, 1099s, and compliance.
              <br />
              <span className="text-emerald-600 dark:text-emera font-medium">
                Waitlist = 25% lifetime discount → $12 → $9/month
              </span>
            </>
          )}
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md px-4">
        <Form onSuccessChange={setIsSuccess} />
      </div>

      {/* Social Proof + Countdown */}
      <div className="flex flex-col items-center gap-6 mt-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <People count={waitlistPeople + 10} />
          {/* <span className="text-lg text-muted-foreground">
            already joined the waitlist
          </span> */}
        </div>
        <Countdown period={new Date("2025-12-15")} />
      </div>
    </div>
  );
}