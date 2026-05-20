import { notFound } from "next/navigation";
import AdminWorkflowDashboard from "@/components/article/AdminWorkflowDashboard";
import { getAutomationDashboard } from "@/lib/adminAutomation";
import { isPreviewEnabled } from "@/lib/preview";

export const dynamic = "force-dynamic";
export const metadata = { title: "Automation Dashboard", robots: { index: false, follow: false } };

export default function AdminDashboardPage() {
  if (!isPreviewEnabled()) notFound();
  const dashboard = getAutomationDashboard();

  return <AdminWorkflowDashboard dashboard={dashboard} />;
}
