import Image from "next/image"

function Hero(){
    return (
        <section className="bg-white">
            <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12">
                <section className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight">Welcome to the Book tracker system</h1>

                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 lg:text-xl ">Our Book Tracker System is designed to simplify the way you manage and track your book collection. Whether you’re a book lover, a librarian, or managing a bookstore, our system offers a comprehensive and user-friendly platform to keep everything organized. From logging new books to tracking their status and managing detailed records, we’ve got you covered.</p>

                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg bg-cyan-900 hover:bg-cyan-700 focus:ring-4">
                        Get Started
                    </a>
                </section>
                <section className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        src="https://th.bing.com/th/id/OIP.Bo-HRLoEO0ahTTDr8CbpLwHaGe?rs=1&pid=ImgDetMain"
                        width={1000}
                        height={500}
                        alt=""
                    />
                </section>
            </section>
        </section>
    )
}

export default Hero;