'use client';
import emailjs from '@emailjs/browser';



export default function ContactForm() {
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      e.target as HTMLFormElement,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      console.log('SUCCESS!');
    }, (error) => {
      console.log('FAILED...', error.text);
    });
  };

  return (
    <form className="min-w-3xl" onSubmit={sendEmail}>
          <div className="border-b pb-12 border-black/5">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="userName" className="block text-xl/6 font-medium text-black">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    autoComplete="userName"
                    placeholder="Username"
                    className="
                      block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-500 sm:text-sm/6 
                      bg-white/50
                      text-black outline-black placeholder:text-black"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-xl/6 font-medium text-black">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="user_email"
                    name="user_email"
                    type="text"
                    autoComplete="emailAddress"
                    placeholder="Email Address"
                    className="bg-white/50 block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-balck placeholder:text-black focus:outline-2 focus:-outline-offset-2 focus:outline-slate-500 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="about" className="block text-xl/6 font-medium text-black">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Ecrivez votre message !"
                    rows={4}
                    className="bg-white/50 placeholder:text-black block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                    defaultValue={''}
                  />
                </div>
              </div>
              <button type="submit" className="border border-black/25 p-2 rounded-3xl hover:bg-[#227531] bg-[#223831] text-white font-medium">Envoyer</button>
            </div>
          </div>
        </form>
  );
}   