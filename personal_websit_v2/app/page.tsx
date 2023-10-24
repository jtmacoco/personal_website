import Section2 from './sections/section2';
import Home from './sections/Home';
import Navbar from './components/navbar';
import './globals.css'
export default function Page() {
  return (
    <>
      <div className='relative'>
        <Navbar/>
        <Home/>
        <Section2/>
      </div>
    </>
  );
}