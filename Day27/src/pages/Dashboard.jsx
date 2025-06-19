import  { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';


const Sidebar = lazy(() => import('../components/dashboard/Sidebar'));
const Header = lazy(() => import('../components/dashboard/Header'));
const Content = lazy(() => import('../components/dashboard/Content'));

export default function Dashboard() {
  return (
    <>
  
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      
   
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      
      <div style={{ display: 'flex', flex: 1 }}>
        
       
        <Suspense fallback={<div>Loading Sidebar...</div>}>
          <Sidebar />
        </Suspense>

    
        <Suspense fallback={<div>Loading Content...</div>}>
          <Content />
        </Suspense>

      </div>
    </div>
    </>
  );
}
