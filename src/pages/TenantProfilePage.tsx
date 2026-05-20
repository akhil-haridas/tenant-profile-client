import { useEffect, useState } from 'react';

import { fetchTenantProfile } from '../api/tenant.api';

import type { Tenant } from '../types/tenant.types';

import ProfileHeader from '../components/ProfileHeader';
import TenancyScore from '../components/TenancyScore';
import RentalHistory from '../components/RentalHistory';

const TenantProfilePage = () => {
    const [tenant, setTenant] = useState<Tenant | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTenant = async () => {
            try {
                const data = await fetchTenantProfile();
                setTenant(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadTenant();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!tenant) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Failed to load tenant data
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f7fb] p-4 md:p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-1 space-y-6">
                    <ProfileHeader tenant={tenant} />

                    <TenancyScore
                        score={tenant.score}
                        rating={tenant.rating}
                    />
                </div>

                <div className="lg:col-span-2">
                    <RentalHistory rentals={tenant.rentals} />
                </div>

            </div>
        </div>
    );
};

export default TenantProfilePage;