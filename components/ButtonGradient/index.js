import Link from "next/link";
function ButtonGradient({ fakePrice, actualPrice }) {
    return (
        <div className="">
            <div className="grid gap-8 items-start justify-center">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <Link href="/checkout">
                        <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                            <span className="flex items-center space-x-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 -rotate-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span className="pr-6 text-gray-100">Grab your copy</span>
                            </span>
                            <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200"><span className="line-through">{" "}{fakePrice}</span>&nbsp;{actualPrice} &rarr;</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ButtonGradient;
