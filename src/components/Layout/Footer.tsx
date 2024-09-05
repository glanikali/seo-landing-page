import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <Container>
      <footer className="py-6 w-full">
        <div className="container max-w-7xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Uptime.com
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </Container>
  );
}
