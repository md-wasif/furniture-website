import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "../../../../utils/nodemailer";


type ContactFormData = {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const body = await req.json();

    const data: ContactFormData = body;

    if (!data || !data.name || !data.email || !data.message) {
      return NextResponse.json({ message: " Bad Request " }, { status: 400 });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        from: `"${data.name}" <${data.email}>`,
        subject: 'New Contact Form Submission',
        text: data.message,
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