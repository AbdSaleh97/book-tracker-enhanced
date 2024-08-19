// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Library Book Tracker. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:underline">Privacy Policy</a> | 
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </footer>
    );
  }
  