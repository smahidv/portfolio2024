import emailjs from "emailjs-com";
import { useContext } from "react";
import  {SuccesContext}  from "../hooks/SuccesContext";

export default function ContactUs() {
    const succesMessage = useContext(SuccesContext);
	function sendEmail(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_co0l8cl",
				"template_gdaprfv",
				e.target as HTMLFormElement,
				"eJXO1u7LH1R-xd52l"
			)
			.then(
				() => {
					succesMessage?.handleIsSent()
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<form onSubmit={sendEmail} className="grid mt-6 ">
			<input
				type="text"
				name="from_name"
				placeholder="name"
				className="px-3 py-2 placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs placeholder:font-medium  border border-gray-300
         rounded-md  f md:mb-8 mb-4"
				required
			/>
			<input
				type="email"
				name="from_email"
				placeholder="email"
				className="px-3 py-2 placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs  border border-gray-300 rounded-md  placeholder:font-medium
         md:mb-8 mb-4"
				required
			/>
			<textarea
				name="message"
				cols={10}
				rows={5}
				placeholder="type your message here."
				className="md:p-4 px-3 py-2 placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs border border-gray-300 rounded-md placeholder:font-medium"
				required
			></textarea>
			<input
				type="submit"
				value="submit"
				className="cursor-pointer hover:opacity-95 bg-primaryLight text-white  font-bold text-sm px-6 py-2 justify-self-end w-fit uppercase tracking-widest"
			/>
		</form>
	);
}
