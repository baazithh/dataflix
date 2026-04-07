import Link from "next/link";
import { medallionRows } from "@/components/dashboard/data";
import { MedallionRow } from "@/components/dashboard/MedallionRow";

export default function BronzeLayerPage() {
  const bronzeRow = medallionRows.find((row) => row.layer === "Bronze");

  if (!bronzeRow) return null;

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-zinc-100 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-netflix-red">
          Back to Home
        </Link>
        <MedallionRow title={bronzeRow.title} items={bronzeRow.items} />
      </div>
    </main>
  );
}
