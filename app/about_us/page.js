import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
      <section className="pt-10 flex flex-col justify-center min-h-screen bg-gray-50 dark:bg-gray-800">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl lg:text-6xl">
                Welcome to Our Book Tracker System
              </h2>
              <p className="max-w-lg mt-6 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                Our Book Tracker System is designed to simplify the way you manage and track your book collection. Whether you’re a book lover, a librarian, or managing a bookstore, our system offers a comprehensive and user-friendly platform to keep everything organized. From logging new books to tracking their status and managing detailed records, we’ve got you covered.
              </p>

              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />Feel free to <a href="#" title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">contact us</a> or follow us on <a href="#" title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Twitter</a> for updates and support.
              </p>
            </div>

            <div className="relative">
              <Image
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt="Decorative Shape"
                width={500}
                height={500}
              />

              <Image
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                alt="Business Woman"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
