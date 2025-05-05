// /src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { billing, items, paymentMethod, meta } = body;

    const line_items = items.map((item: any) => ({
      product_id: item.id,
      quantity: item.quantity,
    }));

    const orderPayload = {
      payment_method: paymentMethod === "cod" ? "cod" : "bacs",
      payment_method_title: paymentMethod === "cod" ? "Cash on Delivery" : "Bank Transfer",
      set_paid: false,
      billing,
      shipping: billing,
      line_items,
      meta_data: [
        { key: "delivery_method", value: meta.delivery_method },
        { key: "delivery_date", value: meta.delivery_date || "" },
        { key: "custom_note", value: meta.custom_note || "" },
      ],
    };

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_WC_BASE_URL}/orders`,
      orderPayload,
      {
        auth: {
          username: process.env.NEXT_PUBLIC_WC_CONSUMER_KEY!,
          password: process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET!,
        },
      }
    );

    return NextResponse.json({ success: true, order: data });
  } catch (error: any) {
    console.error("Order error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: "Order failed", error: error.message },
      { status: 500 }
    );
  }
}
