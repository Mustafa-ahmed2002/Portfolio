import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req) {
  const body = await req.json();
  const email = body.email;
  const message = body.message;
  // from:must be purchased domain to work, i'm using Resend sample domain to make the contact form work due not having one yet
  //  to:must be a registered email in resend website
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["mustafaxplayzahmed@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <p>{message}</p>
          <h5>Directed By Resend.</h5>
          <h5>{email}</h5>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
