import Image from 'next/image';

function BookCards({ books }) {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-50">
            {books.map((book) => (
                <div
                    key={book.id}
                    className="flex flex-col items-center border rounded-lg bg-blue-100 shadow-lg p-4 max-w-xs"
                >
                    <Image
                        src="https://th.bing.com/th/id/R.8546820ee580a8cdb3a9c1ebd11a4daa?rik=4fwMklQJCQU1Ow&riu=http%3a%2f%2fredonline.cdnds.net%2fmain%2fthumbs%2f25788%2fstack_of_books.jpg&ehk=xwtWWiDiDhhxV8yXIhXFgeNFvZ4ETt83uVe2km2jabI%3d&risl=&pid=ImgRaw&r=0"
                        alt={book.title}
                        className="w-full h-32 object-cover mb-4 rounded-md"
                        width={200}
                        height={300}
                    />
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                        <p className="text-gray-800 mb-2">{book.description}</p>
                        <p className="text-gray-900 font-semibold">{book.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookCards;
