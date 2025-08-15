import React from "react";
import { loadRazorpayScript } from "../utils/loadRazorpay";

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: { name: string; email: string; contact: string };
  notes?: Record<string, any>;
  theme?: { color: string };
}

const CheckoutButton: React.FC<{ amount: number }> = ({ amount }) => {
  const handlePayment = async () => {
    const loaded = await loadRazorpayScript();

    if (!loaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Create order on backend
    const orderRes = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const orderData = await orderRes.json();

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!, // from env
      amount: orderData.amount,
      currency: orderData.currency,
      name: "My Next.js Store",
      description: "Test Transaction",
      order_id: orderData.id,
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert(`Order ID: ${response.razorpay_order_id}`);
        alert(`Signature: ${response.razorpay_signature}`);
        // TODO: Verify payment on backend
      },
      prefill: {
        name: "Durgesh Tiwari",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: { color: "#3399cc" },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <button
      onClick={handlePayment}
      className=""
    >
      Buy Now
    </button>
  );
};

export default CheckoutButton;
