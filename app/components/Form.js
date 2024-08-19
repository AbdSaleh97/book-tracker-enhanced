
import { useState } from "react";
import Toast from "./Toast";

function RegisterBookForm() {
    const [showFlag, setShowFlag] = useState(false);
    const [message, setMessage] = useState("");

    const handleClose = () => {
        setShowFlag(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookTitle = e.target.bookTitle.value;
        const author = e.target.author.value;
        const genre = e.target.genre.value;
        const publishedDate = e.target.publishedDate.value;
        const isbn = e.target.isbn.value;

        const formData = `Book: ${bookTitle}, Author: ${author}, Genre: ${genre}, Published: ${publishedDate}, ISBN: ${isbn}`;
        setMessage(formData);
        setShowFlag(true);
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-xs">
                    <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookTitle">
                                Book Title
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="bookTitle" type="text" placeholder="Book Title" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                                Author
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="author" type="text" placeholder="Author" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
                                Genre
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="genre" type="text" placeholder="Genre" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publishedDate">
                                Published Date
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="publishedDate" type="date" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isbn">
                                ISBN
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="isbn" type="text" placeholder="ISBN" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Register Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {showFlag && <Toast message={message} closeFun={handleClose} />}
        </>
    );
}

export default RegisterBookForm;
