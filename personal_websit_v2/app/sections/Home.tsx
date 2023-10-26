import '../globals.css'
import { about } from '../constants/info';
export default function Home() {
  return (
    <>
      <main className="home w-full h-full">
        <div className="relative container rounded">
            <p className='text-white text-xl  '>{about}</p>
        </div>
      </main>
    </>
  );
}