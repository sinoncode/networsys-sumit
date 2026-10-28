"use client";

import emailjs from "@emailjs/browser";

export interface EnquiryEmailData {
  name: string;
  email: string;
  company: string;
  phone: string;
  solution: string;
  message: string;
  formType?: string;
}

const SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const SOLUTION_LABELS: Record<string, string> = {
  neuralcore: "NeuralCore — AI Data Center Infrastructure",
  aegis360: "Aegis360 — Cyber Defense & Digital Trust",
  appmind: "AppMind — AI-Native App Engineering",
  general: "General Consultation — Help Me Decide",
};

export async function sendEnquiryEmail(
  data: EnquiryEmailData
): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS configuration is missing. Check your environment variables."
    );
  }

  const solutionLabel =
    SOLUTION_LABELS[data.solution] ?? data.solution;

  const templateParams = {
    name: data.name,
    from_name: data.name,
    email: data.email,
    from_email: data.email,
    reply_to: data.email,
    company: data.company || "Not provided",
    phone: data.phone || "Not provided",
    solution: data.solution,
    solution_label: solutionLabel,
    message: data.message,
    form_type: data.formType || "Website Enquiry",
    submitted_at: new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }),
    page_url:
      typeof window !== "undefined"
        ? window.location.href
        : "",
  };

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    {
      publicKey: PUBLIC_KEY,
    }
  );
}