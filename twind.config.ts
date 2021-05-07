import { forms, formInput } from "@twind/forms";
import typography from "@twind/typography";
import { aspectRatio } from "@twind/aspect-ratio";
import { lineClamp } from "@twind/line-clamp";
import { content } from "@twind/content";
import { Configuration, Token } from "twind";
import { colors } from "./src/colors";

export default {
  theme: {
    colors: colors,
    animation: {
      "spin-slow": "spin 2s linear infinite",
    },
  },
  plugins: {
    forms,
    "form-input": formInput,
    ...typography({
      className: "prose",
    }),
    aspect: aspectRatio,
    content,
    "line-clamp": lineClamp,
  },
} as Configuration;

declare global {
  namespace React {
    interface Attributes {
      tw?: Token;
    }
  }
}

// Augment the twind module to add addtional completions
declare module "twind" {
  interface Plugins {
    // forms should have been detected from setup – not need to add it
    // forms: ''
    prose: "";

    // We want to add sm and lg modifiers to the form-input
    "form-input":
      | "" // plain form-input
      | "sm" // form-input-sm
      | "lg"; // form-input-lg
  }
}
