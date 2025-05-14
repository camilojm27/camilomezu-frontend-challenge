import type { Collection } from "tinacms";

const Newsletter: Collection = {
  label: "Newsletter Subscriptions",
  name: "newsletter",
  path: "content/newsletter",
  format: "json",
  fields: [
    {
      type: "string",
      label: "Email",
      name: "email",
      required: true,
    },
    {
      type: "string",
      label: "Timestamp",
      name: "timestamp",
      required: true,
    },
    {
      type: "string",
      label: "Source",
      name: "source",
      required: true,
    },
  ],
};

export default Newsletter; 