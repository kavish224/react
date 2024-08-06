import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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b7kKkU+699dRe9iOauYJQ1zXFjZA0h2R4cY3W4OAIJHMXXvimIy1MjppnZnusNwDWtAs1rWjRrQNAAiLRjOAW39HmC/hdZCwtvFGeuk5ZWEEA+Lso8CVq0DOJU99F2zppKXrZG2nqrPcDvYwfk2eNiSe91uCVY3NERYUREQEREBERAREQEREBERAREQRV0m9HXWl9bQt/GaulhA9Pm+MD3fNvHeNfShy664UfbedGkdaXVFKWwVZuXDdDMebrei79Yb+IO9WVEFBy+gq7xbB56R5iqInRP5OGh72uGjh3gqystI9Q5XlFUuY5r2OLXsIc1w3tcDcEeasAq2uQdB7N7d089IZ6iRsMkAAmadNeDmDe4O4AXN9FE23O178SlvYspoyeqj4/Df+sfZu5k64HA6Feb4yN2oUxXwlUF3dqjnd2qpAKqPjRzXrGy6+NZxKkDYXo9lrC2apDoaTfrpLL3NG9rf1vVzBXp0YbIGrkFVM3+qQuuAd0sjToO9jTv5kW5qbl5UtMyJjY42hkbAGta0WaANwAXqs2qIiKAiIgIiICIiAiIgIiICIiAiIgIiILeuoYp2GOaJksZ3te0Ob6jxWj4t0TUUtzA+SmceAPWR+p3a+cpARBCtd0QVTfyU0Mo787HeqxHtWDn6OcRZ/wpPe10Th7HLoZFdTHNr9jq5u+jm8o3kewLzGzVbu/BJ/8qX7l0siaY5yg2KxB+6jlHwmln8VlncM6KK2SxmdHTt43Od/k1mh+UFOCJpjTdnOjiipCJHNNTM3UOlsWA82x7h53I5rckRRRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}

