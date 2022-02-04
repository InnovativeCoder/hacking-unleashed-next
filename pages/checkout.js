import { StarIcon } from '@heroicons/react/solid';
import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import BreadCrumbs from "../components/BreadCrumbs";
import { userContext } from "../components/UserContext/UserContext";

export default function checkOut() {
     // const [selectedColor, setSelectedColor] = useState(product.colors[0])
     // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
     const { user, setUser } = useContext(userContext)
     const [modalIsOpen, setIsOpen] = useState(false);
     const [checked, setChecked] = useState(false)

     const submitHandle = (e) => {
          e.preventDefault()
          console.log(checked)
          // if check is false, show again that if user wants to upgrade in a popup
          //payment page show according to user
          console.log("I was submitted")
          if (user.countryName === "India") {
               console.log("country is India")
          } else {
               console.log("country is other")
          }
     }
     const countryPriceList = {
          India: {
               bp: "INR 299",
               gst: "INR 54",
               total: "INR 353",
               upsell: "INR 150",
               totalAfterUpsell: "INR 503",
          },
          USA: {
               bp: "$11.95",
               gst: "$2.15",
               total: "$14.10",
               upsell: "$10",
               totalAfterUpsell: "$24.10"
          }
     }

     const customStyles = {
          content: {
               top: '30%',
               left: '30%',
               right: 'auto',
               bottom: 'auto',
               marginRight: '-50%',
               color: "black",
               transform: 'translate(-50%, -50%)'
          }
     };

     function openModal() {
          setIsOpen(true);
     }
     var subtitle;
     function afterOpenModal() {
          // references are now sync'd and can be accessed.
          subtitle.style.color = '#000';
     }
     function closeModal() {
          setIsOpen(false);
     }
     const product = {
          name: 'Hacking Unleashed',
          basePrice: user.countryName == "India" ? countryPriceList.India.bp : countryPriceList.USA.bp,
          taxPrice: user.countryName == "India" ? countryPriceList.India.gst : countryPriceList.USA.gst,
          totalPrice: user.countryName == "India" ? countryPriceList.India.total : countryPriceList.USA.total,
          upsellPrice: user.countryName == "India" ? countryPriceList.India.upsell : countryPriceList.USA.upsell,
          totalPriceAfterUpsell: user.countryName == "India" ? countryPriceList.India.totalAfterUpsell : countryPriceList.USA.totalAfterUpsell,
          href: '#',
          breadcrumbs: [
               { id: 1, name: 'Home', href: '#' },
               { id: 2, name: 'Checkout', href: '#' },
          ],
          images: [
               {
                    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
                    alt: 'Two each of gray, white, and black shirts laying flat.',
               },
               {
                    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
                    alt: 'Model wearing plain black basic tee.',
               },
               {
                    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
                    alt: 'Model wearing plain gray basic tee.',
               },
               {
                    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
                    alt: 'Model wearing plain white basic tee.',
               },
          ],
          colors: [
               { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
               { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
               { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
          ],
          sizes: [
               { name: 'XXS', inStock: false },
               { name: 'XS', inStock: true },
               { name: 'S', inStock: true },
               { name: 'M', inStock: true },
               { name: 'L', inStock: true },
               { name: 'XL', inStock: true },
               { name: '2XL', inStock: true },
               { name: '3XL', inStock: true },
          ],
          description:
               'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
          highlights: [
               'Hand cut and sewn locally',
               'Dyed with our proprietary colors',
               'Pre-washed & pre-shrunk',
               'Ultra-soft 100% cotton',
          ],
          details:
               'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
     }
     const reviews = { href: '#', average: 4, totalCount: 117 }

     function classNames(...classes) {
          return classes.filter(Boolean).join(' ')
     }

     useEffect(() => {
          console.log("new is", user)
     }, [])

     return (
          <div className="text-white">
               <div className="pt-6">
                    <BreadCrumbs product={product} />

                    {/* Image gallery */}
                    {/* <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                         <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block shadow-2xl shadow-pink-500/70">
                              <img
                                   src="Book.png"
                                   alt={product.images[0].alt}
                                   className="w-full h-full object-center object-cover"
                              />
                         </div>
                         <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                   <img
                                        src={product.images[1].src}
                                        alt={product.images[1].alt}
                                        className="w-full h-full object-center object-cover"
                                   />
                              </div>
                              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                   <img
                                        src={product.images[2].src}
                                        alt={product.images[2].alt}
                                        className="w-full h-full object-center object-cover"
                                   />
                              </div>
                         </div>
                         <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                              <img
                                   src={product.images[3].src}
                                   alt={product.images[3].alt}
                                   className="w-full h-full object-center object-cover"
                              />
                         </div>
                    </div> */}

                    {/* Product info */}
                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl  lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                         <div className="lg:col-span-2 lg:border-r lg:border-gray-800">
                              <img
                                   src="Book.png"
                                   alt={product.images[0].alt}
                                   className="w-2/3 lg:mr-20 mx-auto rounded-lg  object-center shadow-lg shadow-pink-900/70"
                              />
                         </div>


                         {/* Options */}
                         <div className="mt-4 lg:mt-0">
                              <h2 className="sr-only">Hacking Unleashed information</h2>
                              <p className="text-2xl text-gray-200 font-semibold">{product.basePrice}</p>
                              <p className="text-sm text-gray-500 font-semibold">{product.taxPrice} (Tax)</p>
                              <p className="text-sm text-gray-500 font-semibold">Total = {product.totalPrice}</p>
                              {/* Reviews */}
                              <div className="">
                                   <h3 className="sr-only">Reviews</h3>
                                   <div className="flex items-center">
                                        <div className="flex items-center">
                                             {[0, 1, 2, 3, 4].map((rating) => (
                                                  <StarIcon
                                                       key={rating}
                                                       className={classNames(
                                                            reviews.average > rating ? 'text-gray-200' : 'text-gray-600',
                                                            'h-5 w-5 flex-shrink-0'
                                                       )}
                                                       aria-hidden="true"
                                                  />
                                             ))}
                                        </div>
                                        <p className="sr-only">{reviews.average} out of 5 stars</p>
                                        <a href={reviews.href} className="ml-3 text-sm font-medium text-red-600 hover:text-red-500">
                                             {reviews.totalCount} reviews
                                        </a>
                                   </div>
                              </div>

                              <form action="" className="mt-10" onSubmit={submitHandle}>
                                   {/* add form fields */}
                                   <p className='uppercase tracking-wide '>Special offer for you</p>
                                   <div className='flex'>
                                        <input type="checkbox" className=" checked:bg-red-600 mt-1 mr-1" name="isUpsell" checked={checked} onClick={() => { setChecked(!checked) }} />
                                        <p>Book a career counselling call for a small upgrade of {product.upsellPrice}</p>
                                   </div>
                              </form>
                              {
                                   user.countryName === "India" ? <>
                                        <a href="https://rzp.io/l/SLmFXYURL" className="m-auto">
                                             <button
                                                  type="submit"
                                                  className="mt-10 w-full border border-gray-300 hover:border-white rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700"
                                             >
                                                  Buy
                                             </button>
                                        </a>
                                   </> : <>
                                        <button
                                             onClick={openModal}
                                             className="mt-10 w-full border border-gray-300 hover:border-white rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700"
                                        >
                                             Buy
                                        </button>
                                        <Modal
                                             isOpen={modalIsOpen}
                                             onAfterOpen={afterOpenModal}
                                             onRequestClose={closeModal}
                                             style={customStyles}
                                             contentLabel="Paypal"
                                        >

                                             <h2 className="font-bold" ref={_subtitle => (subtitle = _subtitle)}>Paypal</h2>
                                             <script
                                                  src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD"
                                                  data-sdk-integration-source="button-factory"
                                             ></script>
                                             <script
                                                  src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD"
                                                  data-sdk-integration-source="button-factory"
                                             ></script>
                                             <form
                                                  action="https://www.paypal.com/cgi-bin/webscr"
                                                  method="post"
                                                  target="_top"
                                             >
                                                  <input type="hidden" name="cmd" value="_s-xclick" />
                                                  <input type="hidden" name="hosted_button_id" value="8HAE3VABSC5XQ" />
                                                  <table>
                                                       <tr>
                                                            <td>
                                                                 <input
                                                                      type="hidden"
                                                                      name="on0"
                                                                      value="Where did you get reference?"
                                                                 />Where did you get to know about this product?
                                                            </td>
                                                       </tr>
                                                       <tr>
                                                            <td><input type="text" name="os0" maxlength="200" style={{ border: `2px solid grey` }} /></td>
                                                       </tr>
                                                  </table>
                                                  <input
                                                       type="image"
                                                       src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynowCC_LG.gif"
                                                       border="0"
                                                       name="submit"
                                                       alt="PayPal – The safer, easier way to pay online!"
                                                  />
                                                  <img
                                                       alt=""
                                                       border="0"
                                                       src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                                                       width="1"
                                                       height="1"
                                                  />
                                             </form>
                                        </Modal>
                                   </>
                              }

                              {/* </form> */}
                         </div>

                         {/* <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"> */}
                         {/* Description and details */}
                         {/* <div>
                                   <h3 className="sr-only">Description</h3>

                                   <div className="space-y-6">
                                        <p className="text-base text-gray-900">{product.description}</p>
                                   </div>
                              </div> */}

                         {/* <div className="mt-10">
                                   <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                   <div className="mt-4">
                                        <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                             {product.highlights.map((highlight) => (
                                                  <li key={highlight} className="text-gray-400">
                                                       <span className="text-gray-600">{highlight}</span>
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                              </div> */}

                         {/* <div className="mt-10">
                                   <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                   <div className="mt-4 space-y-6">
                                        <p className="text-sm text-gray-600">{product.details}</p>
                                   </div>
                              </div> */}
                         {/* </div> */}
                    </div>
               </div>
          </div>
     )
}
