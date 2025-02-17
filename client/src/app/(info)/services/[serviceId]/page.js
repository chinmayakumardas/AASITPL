'use client';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const serviceDetails = {
  'web-development': { name: 'Web Development', description: 'We build modern and scalable web applications.', price: 'Starts from ₹50,000' },
  'mobile-development': { name: 'Mobile Development', description: 'Custom Android and iOS applications tailored to your needs.', price: 'Starts from ₹75,000' },
  'ui-ux': { name: 'UI/UX Design', description: 'Creating user-friendly and beautiful designs.', price: 'Starts from ₹30,000' },
};

export default function ServiceViewPage() {
  const { serviceId } = useParams();
  const router = useRouter();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <p className="text-center text-gray-500">Service Not Found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{service.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{service.description}</p>
          <p className="mt-4 font-semibold">Pricing: {service.price}</p>
          <div className="mt-6">
            <Button onClick={() => router.push('/contact')}>Get a Quote</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
