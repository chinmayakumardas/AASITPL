'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  { id: 'web-development', name: 'Web Development', description: 'Building modern web applications' },
  { id: 'mobile-development', name: 'Mobile Development', description: 'Creating Android & iOS apps' },
  { id: 'ui-ux', name: 'UI/UX Design', description: 'Designing user-friendly interfaces' },
];

export default function ServicesPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid gap-4">
        {services.map((service) => (
          <Link key={service.id} href={`/services/${service.id}`} className="block">
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
