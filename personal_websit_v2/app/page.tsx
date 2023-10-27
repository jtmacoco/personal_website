import Section2 from './sections/section2';
import Home from './sections/Home';
import Navbar from './components/navbar';
import './globals.css'
export default function Page() {
  return (
    <>
      <div className='relative'>
        <Navbar/>
        <div id="home">
        <Home />
        </div>
        <div id="section2">
        <Section2/>
</div>
      </div>
    </>
  );
}