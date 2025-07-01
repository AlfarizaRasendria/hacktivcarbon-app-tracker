import Navbar from '../components/navbar';
import solarPanels from '../assets/solar-panels.png';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="landing-hero"
      style={{
        backgroundImage: `url(${solarPanels})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
