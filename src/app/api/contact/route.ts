import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message, honeypot } = body;

    // Honeypot spam check: if hidden honeypot field is filled, silently reject
    if (honeypot) {
      console.warn("Spam bot submission caught by honeypot:", body);
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log the contact lead (In production, wire to Resend / Nodemailer via process.env.RESEND_API_KEY)
    console.log("=== NEW INCOMING LEAD RECEIVED ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone || "Not provided");
    console.log("Service Interested:", service || "General");
    console.log("Budget Range:", budget || "Flexible");
    console.log("Message:", message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("=================================");

    // Optional: If RESEND_API_KEY is configured in env, you can dispatch via Resend API
    /*
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Hasini Leads <leads@hasini-informatics.com>",
          to: ["emailgsk@gmail.com", "info@hasini-informatics.com"],
          subject: `New Enterprise Inquiry from ${name} - ${service}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Service:</strong> ${service}</p><p><strong>Budget:</strong> ${budget}</p><p><strong>Message:</strong><br/>${message}</p>`,
        }),
      });
    }
    */

    return NextResponse.json({
      success: true,
      message: "Thank you! Your inquiry has been received. Our leadership will review and respond within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}
