import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="d-flex">
        <Sidebar></Sidebar>
        <div className="p-4" style={{ flex: 1 }}>
        {children}
        </div>
    </div>
  );
};

export default DashboardLayout;