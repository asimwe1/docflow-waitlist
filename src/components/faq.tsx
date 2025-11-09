// src/components/faq.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2 max-w-md">
        <h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="sm:text-base text-sm text-muted-foreground text-center">
          Everything you need to know about DocFlow AI and the wait-list.
        </p>
      </div>

      {/* Accordion */}
      <div className="w-full max-w-lg">
        <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
          {/* 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              What is DocFlow AI?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              DocFlow AI extracts financial data from PDFs in seconds – think
              invoices, receipts, bank statements – and turns it into clean,
              structured JSON or CSV. No more manual data entry.
            </AccordionContent>
          </AccordionItem>

          {/* 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline">
              How do I get early access?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Join the wait-list on the home page. The sooner you sign up, the
              higher your position. Share your unique referral link to skip the
              line – every 3 referrals jumps you 5 spots!
            </AccordionContent>
          </AccordionItem>

          {/* 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline">
              What happens after I join the wait-list?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You’ll receive a confirmation email with your position and a
              personal referral link. When we open early-access, you’ll get an
              invite with a **25 % lifetime discount**.
            </AccordionContent>
          </AccordionItem>

          {/* 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline">
              Is my data safe?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes. All uploaded PDFs are processed server-side, encrypted in
              transit (TLS), and deleted after extraction. We never store your
              documents longer than necessary.
            </AccordionContent>
          </AccordionItem>

          {/* 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline">
              When will DocFlow AI launch?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We’re aiming for **Q1 2026**. Wait-list members get first dibs and
              priority support. The more referrals you bring, the earlier you’ll
              get in.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}