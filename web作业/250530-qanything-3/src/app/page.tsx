import { UnifiedDashboard } from "@/components/unified-dashboard";

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_QANYTHING_API_KEY || '';

  return <UnifiedDashboard apiKey={apiKey} />;
}
