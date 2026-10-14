import ServiceDetailPage from '@/views/ServiceDetailPage';
import { SERVICE_DETAILS } from '@/data/serviceDetails';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return SERVICE_DETAILS.map((service) => ({
        solutionSlug: service.solutionSlug,
        slug: service.slug,
    }));
}

export default function Page({ params }) {
    const serviceContent = SERVICE_DETAILS.find(
        (d) => d.solutionSlug === params.solutionSlug && d.slug === params.slug
    );

    if (!serviceContent) {
        notFound();
    }

    return <ServiceDetailPage content={serviceContent} />;
}
