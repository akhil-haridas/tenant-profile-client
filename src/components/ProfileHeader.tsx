import type { Tenant } from '../types/tenant.types';

interface Props {
    tenant: Tenant;
}

const ProfileHeader = ({ tenant }: Props) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
                <img
                    src={tenant.avatar}
                    alt={tenant.fullName}
                    className="w-28 h-28 rounded-full object-cover border-4 border-gray-100"
                />

                <h1 className="mt-4 text-2xl font-bold text-gray-800">
                    {tenant.fullName}
                </h1>

                <p className="text-gray-500 mt-2">
                    {tenant.email}
                </p>

                <p className="text-gray-500">
                    {tenant.phone}
                </p>
            </div>
        </div>
    );
};

export default ProfileHeader;