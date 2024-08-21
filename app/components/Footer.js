import { useContext } from "react";
import { ThemeContext } from "./context/theme";

export default function Footer() {
  const { isDarktheme } = useContext(ThemeContext);

    return (
        <footer className={`py-4 mt-8 ${isDarktheme ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Library Book Tracker. All rights reserved.</p>
                <p className="mt-2">
                    <a 
                        href="/privacy" 
                        className={`hover:underline ${isDarktheme ? 'text-gray-300 hover:text-white' : 'text-black hover:text-gray-700'}`}
                    >
                        Privacy Policy
                    </a> 
                    {' '}|{' '}
                    <a 
                        href="/terms" 
                        className={`hover:underline ${isDarktheme ? 'text-gray-300 hover:text-white' : 'text-black hover:text-gray-700'}`}
                    >
                        Terms of Service
                    </a>
                </p>
            </div>
        </footer>
    );
}
