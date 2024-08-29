import { Button, ButtonProps } from "@/components/ui/button";

export interface ContactButtonProps extends ButtonProps {
  subject: string;
}

export const ContactButton = ({
  children,
  subject,
  ...others
}: ContactButtonProps) => {
  return (
    <Button {...others} asChild>
      <a href={`mailto:mail@perf.reviews?subject=${subject}`}>{children}</a>
    </Button>
  );
};
