import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    /* rende disponibile le variabili sass per tutti i css  */
    additionalData: `@import "src/sass/vars.scss";`,
  },
  images: {
    deviceSizes: [350, 440, 750, 828, 1080, 1200, 1920, 2048],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, options) => {
    /**
     * Force scss source maps for debugging. If there are performance issues or you don't need debug css, use the value "eval-source-map" instead.
     */
    if (options.dev) {
      Object.defineProperty(config, "devtool", {
        get() {
          return "source-map";
        },
        set() {},
      });
    }

    return config;
  },
};

export default withNextIntl(nextConfig);
