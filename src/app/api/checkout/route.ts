import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "../../../../utils/nodemailer";

type CheckoutFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const body = await req.json();

    const data: CheckoutFormData = body;

    if (!data || !data.name || !data.email || !data.phone || !data.address || !data.city || !data.state || !data.zipCode) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        from: `"${data.name}" <${data.email}>`,
        subject: 'New Checkout Form Submission',
        text: `
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone}
          Address: ${data.address}
          City: ${data.city}
          State: ${data.state}
          Zip Code: ${data.zipCode}
        `,
      });

      return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
      console.error('Failed to send email:', error);
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Hello" }, { status: 200 });
}
