import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Adesanya Oluwafisayomi Ignatius</title>
      </Head>
      <section>
        <h2>Contact</h2>
        <p>Let&apos;s connect! Reach out on <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a> or explore my projects on <a href="https://github.com/Adesanya221" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}
