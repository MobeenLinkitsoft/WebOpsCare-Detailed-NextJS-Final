"use client";

import { FormEvent, useState } from "react";

interface LeadFormProps {
  button?: string;
}

export default function LeadForm({
  button = "Send My Request →",
}: LeadFormProps) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error(
        "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is missing."
      );

      setStatus("error");
      setMessage(
        "The form is not configured correctly. Please try again later."
      );

      return;
    }

    formData.append(
      "access_key",
      accessKey
    );

    formData.append(
      "subject",
      "New Free Website Audit Request - WebOpsCare"
    );

    formData.append(
      "from_name",
      "WebOpsCare Website"
    );

    /*
     * Convert FormData into a normal object
     * for Web3Forms.
     */
    const object = Object.fromEntries(
      formData.entries()
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(object),
        }
      );

      const result = await response.json();

      console.log(
        "Web3Forms response:",
        result
      );

      if (result.success) {
        setStatus("success");

        setMessage(
          "Thanks! Your audit request has been received. We'll be in touch shortly."
        );

        form.reset();

        return;
      }

      setStatus("error");

      setMessage(
        result.message ||
          "Something went wrong. Please try again."
      );
    } catch (error) {
      console.error(
        "Web3Forms error:",
        error
      );

      setStatus("error");

      setMessage(
        "Unable to send your request right now. Please try again."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="leadForm"
    >
      {/* Honeypot spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="formField">
        <label htmlFor="name">
          Full name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          required
        />
      </div>

      <div className="formField">
        <label htmlFor="email">
          Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />
      </div>

      <div className="formField">
        <label htmlFor="phone">
          Phone number
          <span className="optional">
            Optional
          </span>
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div className="formField">
        <label htmlFor="website">
          Website URL
        </label>

        <input
          id="website"
          name="website"
          type="url"
          placeholder="https://yourwebsite.com"
          required
        />
      </div>

      <div className="formField">
        <label htmlFor="service">
          What do you need help with?
        </label>

        <select
          id="service"
          name="service"
          defaultValue=""
          required
        >
          <option
            value=""
            disabled
          >
            Select an option
          </option>

          <option value="Website Audit">
            Free Website Audit
          </option>

          <option value="Website Management">
            Website Management
          </option>

          <option value="WordPress Maintenance">
            WordPress Maintenance
          </option>

          <option value="Shopify Maintenance">
            Shopify Maintenance
          </option>

          <option value="Website Hosting">
            Website Hosting
          </option>

          <option value="Security">
            Security & Malware Protection
          </option>

          <option value="Performance">
            Performance Optimization
          </option>

          <option value="Website Design">
            Website Design
          </option>

          <option value="Marketing">
            Marketing
          </option>

          <option value="Other">
            Something Else
          </option>
        </select>
      </div>

      <div className="formField">
        <label htmlFor="message">
          Tell us about your website
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your website, current problems, goals, or anything you'd like us to review."
          required
        />
      </div>

      <button
        type="submit"
        className="btn red full"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending..."
          : button}
      </button>

      {status === "success" && (
        <div className="formMessage success">
          <strong>
            Request received ✓
          </strong>

          <p>
            {message}
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="formMessage error">
          <strong>
            Something went wrong
          </strong>

          <p>
            {message}
          </p>
        </div>
      )}

      <p className="formPrivacy">
        Your information is only used to respond
        to your request.
      </p>
    </form>
  );
}