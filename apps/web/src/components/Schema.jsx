import React from 'react';

const ORG = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Networsys Technologies',
    description:
        'AI-first technology partner delivering AI infrastructure, cybersecurity and AI-native app engineering for fintech, hospitals and financial institutions.',
    url: 'https://networsys.com',
    email: 'support@networsys.com',
    telephone: '+91-782-702-7504',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'C-302, Tower C, Noida One, Sector-62',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201301',
        addressCountry: 'IN',
    },
    areaServed: ['IN', 'Global'],
    knowsAbout: [
        'AI Data Center Design',
        'GPU Cluster Engineering',
        'Cybersecurity',
        'Managed Detection and Response',
        'AI-Native App Engineering',
        'ISO 27001',
        'RBI Cyber Security Framework',
        'DPDP Act Compliance',
    ],
};

export const OrganizationSchema = () => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }}
    />
);

export const ServiceSchema = ({ name, description, url, serviceType, areaServed }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                name,
                description,
                url,
                serviceType,
                areaServed: areaServed || ['IN', 'Global'],
                provider: {
                    '@type': 'Organization',
                    name: 'Networsys Technologies',
                    url: 'https://networsys.com',
                },
            }),
        }}
    />
);

export default OrganizationSchema;
