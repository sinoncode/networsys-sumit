import "@/index.css";
import { OrganizationSchema } from "@/components/Schema";

export const metadata = {
    title: {
        default:
            "Networsys Technologies — AI Infrastructure, Cybersecurity & AI App Engineering",
        template: "%s | Networsys Technologies",
    },

    description:
        "AI-first technology partner delivering AI infrastructure, cybersecurity and AI-native app engineering for fintech, hospitals and financial institutions.",

    metadataBase: new URL("https://networsys.com"),

    openGraph: {
        siteName: "Networsys Technologies",
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        site: "@networsys",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />

                <OrganizationSchema />
            </head>

            <body>{children}</body>
        </html>
    );
}