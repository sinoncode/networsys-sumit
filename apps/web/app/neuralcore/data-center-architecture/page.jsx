import ServiceDetailPage from '@/views/ServiceDetailPage';
import { SERVICE_DETAILS } from '@/data/serviceDetails';
import { notFound } from 'next/navigation';

export default function Page() {
    const content = SERVICE_DETAILS.find(
        (item) => item.solutionSlug === 'neuralcore' && item.slug === 'data-center-architecture'
    );

    if (!content) {
        notFound();
    }

    return <ServiceDetailPage content={content} />;
}
