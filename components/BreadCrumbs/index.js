import React from 'react';

export default function index({ product }) {
     return (
          <nav aria-label="Breadcrumb">
               <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                    {product.breadcrumbs.map((breadcrumb) => (
                         <li key={breadcrumb.id}>
                              <div className="flex items-center">
                                   <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-500">
                                        {breadcrumb.name}
                                   </a>
                                   <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-4 h-5 text-gray-300"
                                   >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                   </svg>
                              </div>
                         </li>
                    ))}
                    <li className="text-sm">
                         <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                              {product.name}
                         </a>
                    </li>
               </ol>
          </nav>
     )
}
