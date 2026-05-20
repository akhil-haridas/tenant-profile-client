import { useEffect, useState } from 'react';

import { fetchTenantProfile } from '../api/tenant.api';

import type { Tenant } from '../types/tenant.types';

import ProfileHeader from '../components/ProfileHeader';
import TenancyScore from '../components/TenancyScore';
import RentalHistory from '../components/RentalHistory';
import ProfileSkeleton from '../components/ProfileSkeleton';

const TenantProfilePage = () => {
    const [tenant, setTenant] = useState<Tenant | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadTenant = async () => {
            try {
                const data = await fetchTenantProfile();
                setTenant(data);
            } catch (error) {
                console.error(error);
                setError('Failed to load tenant profile');
            } finally {
                setLoading(false);
            }
        };

        loadTenant();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f5f7fb] p-4 md:p-8">
                <div className="max-w-6xl mx-auto">
                    <ProfileSkeleton />
                </div>
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

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb]">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">

                    <h2 className="text-xl font-semibold text-red-500">
                        Something went wrong
                    </h2>

                    <p className="text-gray-500 mt-2">
                        {error}
                    </p>

                </div>
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