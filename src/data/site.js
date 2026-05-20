export const site = {
  name: "Data Fort",
  url: "https://datafort.ca",
  email: "hello@datafort.ca",
  calendlyUrl: "https://calendly.com/amir-dev21/30min",
  description:
    "Data Fort provides tool-neutral business intelligence services for independent pharmacies, retail and e-commerce stores, and beauty/wellness clinics in Toronto and the GTA.",
  serviceArea:
    "Toronto, North York, Richmond Hill, Thornhill, Vaughan, Newmarket, Markham, Etobicoke, Scarborough, and the Greater Toronto Area",
};

export const navigation = [
  { label: "Services", href: "/services/business-intelligence/" },
  { label: "Industries", href: "/industries/independent-pharmacies/" },
  { label: "Toronto GTA", href: "/business-intelligence-toronto-gta/" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const serviceLinks = [
  {
    title: "Business Intelligence Services",
    href: "/services/business-intelligence/",
    description:
      "A practical BI foundation for small business owners who need clearer reporting, stronger metrics, and better decisions.",
  },
  {
    title: "Dashboard Reporting Services",
    href: "/services/dashboard-reporting/",
    description:
      "KPI dashboard design and reporting views for sales, retention, inventory, services, staffing, and margins.",
  },
  {
    title: "Monthly Business Insights",
    href: "/services/monthly-business-insights/",
    description:
      "Plain-language monthly business reporting that explains what changed, why it matters, and what to review next.",
  },
];

export const industryLinks = [
  {
    title: "Independent Pharmacies",
    href: "/industries/independent-pharmacies/",
    description:
      "Independent pharmacy analytics for refill retention, front-shop performance, inventory movement, and patient patterns.",
  },
  {
    title: "Retail & E-commerce Stores",
    href: "/industries/retail-ecommerce/",
    description:
      "Retail analytics services for product performance, repeat customers, inventory reporting, sales trends, and margin visibility.",
  },
  {
    title: "Beauty & Wellness Clinics",
    href: "/industries/beauty-wellness-clinics/",
    description:
      "Beauty clinic analytics and wellness clinic reporting for rebooking, no-shows, service revenue, staff capacity, and client retention.",
  },
];

export const locations = [
  "Toronto",
  "North York",
  "Richmond Hill",
  "Thornhill",
  "Vaughan",
  "Newmarket",
  "Markham",
  "Etobicoke",
  "Scarborough",
];

export const faqs = [
  {
    question: "What business intelligence services does Data Fort provide?",
    answer:
      "Data Fort builds small business dashboards, KPI reporting, monthly business insights, customer retention analysis, sales reporting, inventory reporting, and plain-language performance summaries for owners and operators.",
  },
  {
    question: "Do you work with independent pharmacies, retailers, and clinics?",
    answer:
      "Yes. Data Fort focuses on independent pharmacies, locally owned retail and e-commerce stores, and beauty and wellness clinics in Toronto and the Greater Toronto Area.",
  },
  {
    question: "Do we need to use a specific dashboard or BI tool?",
    answer:
      "No. The service is tool-neutral. Data Fort starts with the business questions, current data sources, and reporting workflow, then recommends a practical dashboard and reporting setup.",
  },
  {
    question: "Can you help if our data is spread across systems and spreadsheets?",
    answer:
      "Yes. Many small businesses have useful data split across point-of-sale systems, booking tools, pharmacy systems, online stores, accounting exports, and spreadsheets. Data Fort helps organize that data into clearer reports and decisions.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Data Fort serves Toronto and the GTA, including North York, Richmond Hill, Thornhill, Vaughan, Newmarket, Markham, Etobicoke, and Scarborough. Remote support is available when it fits the engagement.",
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
