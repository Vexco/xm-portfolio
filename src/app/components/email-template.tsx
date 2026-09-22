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
    <form className="w-full max-w-2xl mx-auto p-4 sm:p-6" onSubmit={sendEmail}>
          <div className="border-b pb-8 border-black/10">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">

              <div className="sm:col-span-3">
                <label htmlFor="userName" className="block text-base sm:text-lg font-medium text-black">
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
                      block w-full rounded-md bg-white/50 px-3 py-2 text-base text-black border border-black/20 placeholder:text-gray-500 focus:outline-2 focus:outline-slate-500 sm:text-sm"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-base sm:text-lg font-medium text-black">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="user_email"
                    name="user_email"
                    type="text"
                    autoComplete="emailAddress"
                    placeholder="Email Address"
                    className="block w-full rounded-md bg-white/50 px-3 py-2 text-base text-black border border-black/20 placeholder:text-gray-500 focus:outline-2 focus:outline-slate-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-base sm:text-lg font-medium text-black">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Ecrivez votre message !"
                    rows={4}
                    className="block w-full rounded-md bg-white/50 px-3 py-2 text-base text-black border border-black/20 placeholder:text-gray-500 focus:outline-2 focus:outline-slate-500 sm:text-sm resize-y"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <button type="submit" className="w-full sm:w-auto px-6 py-3 rounded-3xl hover:bg-[#227531] bg-[#223831] text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Envoyer</button>
              </div>
            </div>
          </div>
        </form>
  );
}   