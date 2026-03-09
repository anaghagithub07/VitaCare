# Simple Pay (No Payment Gateway)

Appointments use a **simple Pay button** – no Stripe, Razorpay, or other payment gateway.

---

## Flow

1. User books an appointment and goes to **My Appointments**.
2. They click **Pay** → the appointment is marked as paid in the app.
3. No real money is processed; this only records payment status (e.g. for pay-at-clinic or manual handling).

No API keys or gateway setup are required.
