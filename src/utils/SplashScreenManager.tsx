
import  { ReactNode, useEffect, useState } from 'react'
import IntroScreen from '../components/IntroScreen';


interface SplashScreenManagerProps {
    children: ReactNode;
  }
  export default function SplashScreenManager({ children }: SplashScreenManagerProps) {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowSplash(false);
        }, 2000); 
        return () => clearTimeout(timeout);
      }, []);
      
    const finishLoading = () => {
        setShowSplash(false);
      }
    return showSplash ? <IntroScreen finishLoading={finishLoading} /> : children ;
  }