import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "./context/theme";

function BookCards({ books }) {
    const { isDarktheme } = useContext(ThemeContext);

    return (
        <div className={`flex flex-wrap justify-center gap-4 p-4 ${isDarktheme ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {books.map((book) => (
                <div
                    key={book.id}
                    className={`flex flex-col items-center border rounded-lg shadow-lg p-4 max-w-xs ${isDarktheme ? 'bg-gray-800' : 'bg-blue-100'}`}
                >
                    <Image
                        src="https://th.bing.com/th/id/R.8546820ee580a8cdb3a9c1ebd11a4daa?rik=4fwMklQJCQU1Ow&riu=http%3a%2f%2fredonline.cdnds.net%2fmain%2fthumbs%2f25788%2fstack_of_books.jpg&ehk=xwtWWiDiDhhxV8yXIhXFgeNFvZ4ETt83uVe2km2jabI%3d&risl=&pid=ImgRaw&r=0"
                        alt={book.title}
                        className="w-full h-32 object-cover mb-4 rounded-md"
                        width={200}
                        height={300}
                    />
                    <div className="text-center">
                        <h3 className={`text-xl font-bold mb-2 ${isDarktheme ? 'text-white' : 'text-gray-900'}`}>
                            {book.title}
                        </h3>
                        <p className={`mb-2 ${isDarktheme ? 'text-gray-300' : 'text-gray-800'}`}>
                            {book.description}
                        </p>
                        <p className={`font-semibold ${isDarktheme ? 'text-white' : 'text-gray-900'}`}>
                            {book.price}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookCards;
