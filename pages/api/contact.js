import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  // Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.error("SMTP credentials not configured");
    return res.status(500).json({ message: "Server configuration error" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: "arsenedemenou@gmail.com",
      replyTo: email,
      subject: subject
        ? `Portfolio Contact: ${subject} — from ${name}`
        : `Portfolio Contact Form submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #55e6a5; border-bottom: 2px solid #55e6a5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #333; width: 100px;">Name:</td>
              <td style="padding: 10px; color: #555;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 10px; color: #555;">${email}</td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #333;">Subject:</td>
              <td style="padding: 10px; color: #555;">${subject}</td>
            </tr>` : ""}
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #555; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Sent from your portfolio contact form at gdac.vercel.app
          </p>
        </div>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({
      message: "Could not send the email. Please try again later.",
    });
  }
}
