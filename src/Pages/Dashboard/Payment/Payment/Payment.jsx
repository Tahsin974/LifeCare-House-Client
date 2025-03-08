import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_PK}`);
const Payment = ({ doctorVisit, serviceName, appointmentId, refetch }) => {
  return (
    <div className="space-y-4">
      <Elements stripe={stripePromise}>
        <CheckOutForm
          appointmentId={appointmentId}
          serviceName={serviceName}
          doctorVisit={doctorVisit}
          refetch={refetch}
        />
      </Elements>
    </div>
  );
};

export default Payment;
