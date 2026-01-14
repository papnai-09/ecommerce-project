import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import styles from "./admin.module.css";

export const metadata = {
  title: "Admin - Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${styles.root} min-h-screen flex flex-col md:flex-row`}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 w-full max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
