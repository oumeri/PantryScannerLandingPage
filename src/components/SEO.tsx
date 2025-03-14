import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      {/* Title & Description */}
      <title>Pantry Scanner - Track Your Food Effortlessly</title>
      <meta name="description" content="Pantry Scanner helps you scan, track, and manage your food items to reduce waste and save money." />

      {/* Keywords */}
      <meta name="keywords" content="Pantry Scanner, Food Expiry Tracker, Kitchen Management, Barcode Scanner App" />

      {/* Open Graph (Social Sharing) */}
      <meta property="og:title" content="Pantry Scanner - Track Your Food Easily" />
      <meta property="og:description" content="Scan and track food items effortlessly with Pantry Scanner. Reduce waste and manage your kitchen smarter!" />
      <meta property="og:image" content="/Imgs/getStarted.JPG" />
      <meta property="og:url" content="https://pantry-scanner-landing-page.vercel.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pantry Scanner - Your Food Tracking App" />
      <meta name="twitter:description" content="Manage your pantry efficiently with Pantry Scanner. Track expiry dates and reduce food waste!" />
      <meta name="twitter:image" content="/Imgs/getStarted.JPG" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://pantry-scanner-landing-page.vercel.app/" />
    </Helmet>
  );
};

export default SEO;
