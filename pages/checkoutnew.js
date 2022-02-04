import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
// import RazorpayCheckout from "./RazorpayCheckout";
import StripeContainer from "../components/checkout/StripeContainer";
import { userContext } from "../components/UserContext/UserContext";

export default function Index() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { user, setUser } = useContext(userContext)
    const [priceList, setPriceList] = useState({
        bp: "loading ...",
        gst: "loading ...",
        total: "loading ..."
    })
    const [country, setCountry] = useState()
    const countryPriceList = {
        India: {
            bp: "INR 299",
            gst: "INR 54",
            total: "INR 353"
        },
        USA: {
            bp: "$11.95",
            gst: "$2.15",
            total: "$14.10"
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

    useEffect(() => {
        console.log("user is", user)
        if (user.countryName === "India") {
            setPriceList(countryPriceList.India)
            setCountry("India")
        } else {
            setPriceList(countryPriceList.USA)
        }
        setUser({ ...user, isVisited: true })
    }, [])

    return (
        <div className='bg-white py-10'>
            <div className="text-2xl uppercase font-bold text-center m-5 ">
                Complete your purchase
            </div>
            <StripeContainer priceList={priceList} country={country} />
            <h1 className="text-center mt-4 text-white">OR</h1>
            {
                country === "India" ? (
                    <div className="m-auto mt-10 flex place-self-center">
                        <a href="https://rzp.io/l/SLmFXYURL" className="m-auto">
                            <button className="w-30 bg-white text-gray-800 px-10 py-3 rounded">
                                Pay with Razorpay
                            </button>
                        </a>
                    </div>
                    // <RazorpayCheckout />
                ) : (
                    <div className="m-auto mt-10 flex place-self-center">
                        <button onClick={openModal} className="w-30 m-auto bg-white text-gray-800 px-10 py-3 rounded mb-10">
                            Pay with Paypal
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
                                            />Where did you get reference?
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
                    </div>
                )
            }
        </div>
    )
}
