# Jobify

## Overview 🎉

It is an application that facilitates your job search. Companies can add, highlight, edit and delete their offers. Offers are checked and accepted by the administrator. After the job offer is verified, it appears on the list of all offers.

## Tech/framework used 🔧

- Next.js
- Tailwind CSS
- Airtable
- Stripe
- joi
- Cloudinary

## Accounts 🙍

You can use the created accounts or create your own company account.

| Type    | Login               | Password   |
| ------- | ------------------- | ---------- |
| Admin   | admin@admin.com     | admin123   |
| Company | spotify@spotify.com | spotify123 |

### As admin:

- You can remove offers
- You are able to highlight offers
- You can edit all offers
- You have a possibility to create your own job offer
- After the company creates a job offer, the admin must activate it to be displayed on the list of all job offers

### As company:

- You can create job offers
- You are able to highlight your offers
- You can edit your offers
- You can remove your offers

If you want to check the highlighting of a job offer, you can use the following data:

| E-mail            | john@doe.com        |
| ----------------- | ------------------- |
| default U.S. card | 4242 4242 4242 4242 |
| MM / RR           | 03/22               |
| CVC               | 123                 |

More information: [Stripe](https://stripe.com/docs/testing)

## Installation 💾

```bash
git clone https://github.com/mateuszwiniarczyk/jobify.git
npm install
```

You need to fill in the file .env.example with data.
After completing the data, rename .env.example file to .env.local

If you want to run the project use:

```bash
npm run dev
```

## Screenshots 📺

![Home](https://i.ibb.co/xJKmPcf/screencapture-jobify-eta-vercel-app-2021-09-04-15-54-55.png)

![Filter](https://i.ibb.co/bWFFRzg/screencapture-jobify-eta-vercel-app-2021-09-04-15-56-28.png)

![Offer](https://i.ibb.co/dkQ6MpX/screencapture-jobify-eta-vercel-app-offers-27-2021-09-04-15-56-59.png)

![Admin](https://i.ibb.co/wwxSzgt/screencapture-jobify-eta-vercel-app-admin-2021-09-04-15-58-26.png)

![Submit offer](https://i.ibb.co/pJHMsXS/screencapture-jobify-eta-vercel-app-offers-new-2021-09-04-15-57-25.png)

![Sign In](https://i.ibb.co/LZdPXrc/screencapture-jobify-eta-vercel-app-signin-2021-09-04-15-59-13.png)

![Highlight](https://i.ibb.co/RYZX27m/screencapture-jobify-eta-vercel-app-offers-28-highlight-2021-09-04-16-00-57.png)

![Stripe](https://i.ibb.co/p10xYNx/screencapture-checkout-stripe-pay-cs-test-a1tk9ix-Nt-WUq-Jax-U1-Mp9b-Dce-QAUzcin3va-Pt-Niaiv0-VIYPk.png)
