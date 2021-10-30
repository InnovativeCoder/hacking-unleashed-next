import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from "react";
import BookImage from "../../images/Book.png";

export const CheckoutForm = ({priceList, country}) => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = country ==="India"?353:14.10;
  const currency = country ==="India"?"INR":"USD"

  var URL;
  process.env.NODE_ENV==='development'? URL = "": URL=process.env.REACT_APP_PROD_URL
  
  const handleSubmit = async (values) => {
    // event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          `${URL}/api/stripe/charge`,
          {
            amount,
            currency,
            id: id,
            email: values.email,
            name: values.name,
            phone: values.phone,
          }
        );
        console.log("Stripe 35 | data", response.data.success);
        if (!response.data.success) {
          console.log("CheckoutForm.js 25 |", response.data.message);
        }
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          axios
          .post(`${URL}/api/stripe`, {email: values.email})
          .then((res)=>{
            console.log(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })
        }
      } catch (error) {
        console.error("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div classNam="m-auto pt-10 text-center ">
      <div className="flex justify-center ">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white rounded shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Product</th>
                  {/* <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">Qtd</span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th> */}
                  <th className="hidden text-right md:table-cell">Unit price</th>
                  {/* <th className="text-right">Total price</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pb-4 md:table-cell">
                    <a href="/">
                      <img src={BookImage} className="w-20 rounded" alt="Thumbnail" />
                    </a>
                  </td>
                  <td>
                    <a href="/">
                      <p className="mb-2 md:ml-4">Hacking Unleashed</p>
                      <form action="" method="POST">
                        <button type="submit" className="text-gray-700 md:ml-4">
                          {/* <small>(Remove item)</small> */}
                        </button>
                      </form>
                    </a>
                  </td>
                  {/* <td className="justify-center md:justify-end md:flex mt-6">
                    <div className="w-20 h-10">
                      <div className="relative flex flex-row w-full h-8">
                      <input type="number" onChange={(e)=>{setUnit(e)}}
                        className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                      </div>
                    </div>
                  </td> */}
                  <td className="hidden text-right md:table-cell">
                    <span className="text-sm lg:text-base font-medium">
                    {priceList.bp}
                    </span>
                  </td>
                  {/* <td className="text-right">
                    <span className="text-sm lg:text-base font-medium">
                      {unit}
                    </span>
                  </td> */}
                </tr>
              </tbody>
            </table>
            <hr className="pb-6 mt-6" />
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Coupon Code</h1>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">If you have a coupon code, please enter it in the box below</p>
                  <div className="md:flex">
                    <form action="" method="POST">
                        <div className="flex items-center w-full h-13 bg-white bg-gray-100 border rounded-full">
                          <input type="coupon" name="code" id="coupon" placeholder="Apply coupon"
                                  className="w-full px-4 bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"/>
                            <button type="submit" className="text-sm flex px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none">
                              <svg aria-hidden="true" data-prefix="fas" data-icon="gift" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/></svg>
                              <span className="font-medium">Apply coupon</span>
                            </button>
                        </div>
                    </form>
                  </div>
                </div>
                {/* <div className="p-4 mt-6 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Instruction for seller</h1>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">If you have some information for the seller you can leave them in the box below</p>
                  <textarea className="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
                </div> */}
              </div>
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                </div>
                <div className="p-4">
                    <div className="flex justify-between border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Subtotal
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        {priceList.bp}
                      </div>
                    </div>
                      {/* <div className="flex justify-between pt-4 border-b">
                        <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                          <form action="" method="POST">
                            <button type="submit" className="mr-2 mt-1 lg:mt-2">
                              <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" className="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"/></svg>
                            </button>
                            </form>
                          Coupon "90off"
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                          -133,944.77€
                        </div>
                      </div> */}
                      {/* <div className="flex justify-between pt-4 border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                          New Subtotal
                          </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                          {priceList.total}
                        </div>
                      </div> */}
                      <div className="flex justify-between pt-4 border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                          Tax
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                          {priceList.gst}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4 border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                          Total
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                          {priceList.total}
                        </div>
                      </div>
                      <p className="mb-6 italic">Please write correct email, book will be delivered to your mail box in 24 hours after the processing of the payment</p>

                      <Formik
                        initialValues={{ email: '', name: '', phone: '' }}
                        validate={values => {
                          const errors = {};
                          if (!values.email) {
                            errors.email = 'Required';
                          } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                          ) {
                            errors.email = 'Invalid email address';
                          }
                          if (!values.name) {
                            errors.name = 'Required';
                          } 
                          if (!values.phone) {
                            errors.phone = 'Required';
                          } 
                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                          handleSubmit(values)
                          setSubmitting(false);
                        }}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            <Field 
                              placeholder="Email"
                              type="email" name="email"
                              className="w-full font-semibold text-center rounded text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black mb-1 h-7" />
                            <ErrorMessage name="email" component="div" />
                            <Field
                              placeholder="Name"
                              type="name" name="name"
                              className="w-full font-semibold text-center rounded text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black mb-1 h-7" />
                            <ErrorMessage name="name" component="div" />
                            <Field
                              placeholder="Phone Number"
                              type="name" name="phone"
                              className="w-full font-semibold text-center rounded text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black mb-1 h-7" />
                            <ErrorMessage name="phone" component="div" />
                            <CardElement className="mt-10 px-4"/>
                            <button
                              type="submit" 
                              disabled={isSubmitting} 
                              className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                                <span className="ml-2 mt-5px">Proceed to checkout with Stripe</span>
                            </button>
                          </Form>
                        )}
                      </Formik>
                  {/* <form onSubmit={handleSubmit} className="mt-10 text-center"> */}
                  {/* <input onChange={(e)=>{setEmail(e.target.value)}}
                              placeholder="E-mail"
                              type="email" name="email"
                              className="w-full font-semibold text-center rounded text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black mb-1 h-7" /> */}
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};