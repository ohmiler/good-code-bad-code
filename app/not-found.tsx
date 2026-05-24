import { NotFoundContent } from "@/components/not-found-content";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center px-5 py-16">
      <NotFoundContent />
    </main>
  );
}
