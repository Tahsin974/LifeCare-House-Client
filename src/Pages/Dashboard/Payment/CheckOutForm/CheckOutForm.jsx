import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuthContext from "../../../../Context/useAuthContext";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import moment from "moment";
import { useNavigate } from "react-router";

const CheckOutForm = ({ doctorVisit, serviceName, appointmentId, refetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const [message, setMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: doctorVisit })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, doctorVisit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setMessage(error.message);
    } else {
      console.log(paymentMethod);
      setMessage("");
    }
    const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
      `${clientSecret}`,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      }
    );

    if (confirmError) {
      setMessage(confirmError.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${confirmError}`,
      });
    } else {
      if (paymentIntent.status === "succeeded") {
        const payment = {
          name: user.displayName,
          email: user.email,
          transactionId: paymentIntent.id,
          visit: doctorVisit,
          serviceName,
          appointmentId,
          date: moment(new Date()).format("MMMM Do YYYY"),
        };

        const res = await axiosSecure.post("/payment", payment);

        if (res.data.paymentResult.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your Payment Process Successfully Done",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/my-history");
          refetch();
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 card">
      <CardElement
        className=" p-3"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <button
        disabled={!stripe || !elements || !clientSecret}
        className="btn  bg-[#212631] text-white border-[#212631] hover:bg-[#212631]  hover:border-[#212631] rounded-md"
      >
        Pay
      </button>
      <p className="text-error my-2">{message}</p>
    </form>
  );
};

export default CheckOutForm;
