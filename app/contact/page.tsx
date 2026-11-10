
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 XXXXX XXXXX",
    subtitle: "School contact number",
    href: "tel:+910000000000",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@example.com",
    subtitle: "School email address",
    href: "mailto:info@example.com",
  },
  {
    icon: MapPin,
    title: "Visit Our School",
    value: "School Address, City, State",
    subtitle: "Complete address will be updated",
    href: "#school-location",
  },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#D5A63C] focus:ring-2 focus:ring-[#D5A63C]/20";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Demo submission only. Backend/email integration will be added later.
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#102B50]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=85"
            alt="Students at school"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07182E] via-[#102B50]/95 to-[#102B50]/75" />
        </div>

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D5A63C]/20" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#D5A63C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:px-10 lg:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#EAC66F]/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
            <MessageCircle size={16} />
            Get in Touch
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            We'd Love to
            <span className="block text-[#EAC66F]">Hear From You</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Have questions about admissions, academics or school activities?
            Connect with Multi Purpose Power Sainik School. We are here to
            guide you.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 rounded-xl bg-[#D5A63C] px-7 py-4 font-bold text-[#102B50] shadow-lg transition-all hover:-translate-y-1 hover:bg-[#EAC66F]"
            >
              Send an Enquiry
              <ArrowRight size={18} />
            </a>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition-all hover:border-[#EAC66F] hover:bg-white/10"
            >
              Admission Information
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative z-10 px-6 sm:px-10">
        <div className="mx-auto -mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-[#102B50]/5 transition-all duration-300 hover:-translate-y-2 hover:border-[#D5A63C]/60 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102B50] text-[#EAC66F] transition-transform group-hover:rotate-6">
                  <Icon size={26} />
                </div>

                <h2 className="mt-6 text-xl font-extrabold text-[#102B50]">
                  {item.title}
                </h2>

                <p className="mt-2 break-words font-bold text-[#9B741E]">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {item.subtitle}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#102B50] transition-all group-hover:gap-4">
                  Contact Details
                  <ArrowRight size={16} />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          {/* Left Information */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D5A63C]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#9B741E]">
              <Sparkles size={15} />
              Let's Connect
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B50] sm:text-4xl">
              Start a Conversation With Us
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Whether you are a parent looking for admission information or
              simply want to know more about our school, we welcome your
              questions and enquiries.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F7FA] text-[#9B741E]">
                  <GraduationCap size={25} />
                </div>
                <div>
                  <h3 className="font-bold text-[#102B50]">
                    Classes Offered
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Admission enquiries for LKG to Class 8.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F7FA] text-[#9B741E]">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#102B50]">
                    School Office Hours
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Office timings will be updated after confirmation by
                    the school.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F7FA] text-[#9B741E]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#102B50]">
                    Parent Enquiries
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Get guidance about admissions and school-related
                    information.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl bg-[#102B50] p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
                Need Admission Information?
              </p>

              <h3 className="mt-3 text-2xl font-extrabold">
                Your Child's Journey Starts Here
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Explore our admission process and learn about the different
                learning stages at our school.
              </p>

              <Link
                href="/admissions"
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#EAC66F] hover:gap-4"
              >
                Explore Admissions
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Enquiry Form */}
          <div
            id="contact-form"
            className="rounded-3xl border border-slate-200 bg-[#F5F7FA] p-6 shadow-xl sm:p-10"
          >
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B741E]">
                Contact Form
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-[#102B50]">
                Send Us an Enquiry
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Fill in the details below. Our enquiry form is currently
                in demo mode.
              </p>
            </div>

            {submitted && (
              <div
                role="status"
                className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
              >
                Demo submission successful! The form is not connected to
                email or a database yet. Backend integration will be added
                later.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="parentName"
                    className="text-sm font-bold text-[#102B50]"
                  >
                    Parent / Guardian Name *
                  </label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Enter your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-[#102B50]"
                  >
                    Mobile Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9+\-\s()]{10,15}"
                    placeholder="Enter mobile number"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-[#102B50]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className={inputClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="studentName"
                    className="text-sm font-bold text-[#102B50]"
                  >
                    Student Name *
                  </label>
                  <input
                    id="studentName"
                    name="studentName"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Enter student name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="class"
                    className="text-sm font-bold text-[#102B50]"
                  >
                    Class Interested In *
                  </label>
                  <select
                    id="class"
                    name="class"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select class
                    </option>
                    <option value="LKG">LKG</option>
                    {Array.from({ length: 8 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        Class {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-[#102B50]"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#102B50] px-7 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#183D6D]"
              >
                Submit Enquiry
                <Send size={18} />
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                * Required fields. This is currently a frontend demo form;
                your details are not stored or sent.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        id="school-location"
        className="bg-[#F5F7FA] px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D5A63C]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#9B741E]">
              <MapPin size={15} />
              Find Our School
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#102B50] sm:text-4xl">
              Our School Location
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Visit us to learn more about our school and admission
              opportunities. The official school address and map will be
              added here once confirmed.
            </p>
          </div>

          <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#D5A63C]/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#102B50]/5 blur-3xl" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-[#102B50] text-[#EAC66F] shadow-xl">
              <MapPin size={38} />
            </div>

            <h3 className="relative mt-6 text-2xl font-extrabold text-[#102B50]">
              Multi Purpose Power Sainik School
            </h3>

            <p className="relative mt-3 max-w-lg text-sm leading-7 text-slate-500">
              Official address and Google Maps location will be displayed
              here after the school location is confirmed.
            </p>

            <span className="relative mt-6 rounded-full bg-[#D5A63C]/10 px-5 py-2 text-xs font-bold text-[#9B741E]">
              Location details to be updated
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#102B50] px-6 py-20 sm:px-10">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#EAC66F]/20" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-[#EAC66F]/20" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#EAC66F]/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
            <GraduationCap size={16} />
            Multi Purpose Power Sainik School
          </span>

          <h2 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Every Question Deserves
            <span className="block text-[#EAC66F]">an Answer</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Connect with us to learn more about school admissions,
            academics and the learning opportunities available for your
            child.
          </p>

          <a
            href="#contact-form"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#D5A63C] px-8 py-4 font-bold text-[#102B50] shadow-xl transition-all hover:-translate-y-1 hover:bg-[#EAC66F]"
          >
            Send Your Enquiry
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </div>
  );
}
