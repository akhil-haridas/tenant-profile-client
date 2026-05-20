const ProfileSkeleton = () => {
    return (
        <div className="animate-pulse grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="w-28 h-28 rounded-full bg-gray-200 mx-auto" />

                    <div className="h-5 bg-gray-200 rounded mt-6" />

                    <div className="h-4 bg-gray-200 rounded mt-4" />

                    <div className="h-4 bg-gray-200 rounded mt-2" />
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="h-5 bg-gray-200 rounded w-40" />

                    <div className="w-36 h-36 rounded-full bg-gray-200 mx-auto mt-6" />
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm lg:col-span-2">
                <div className="h-5 bg-gray-200 rounded w-40 mb-6" />

                <div className="space-y-4">
                    <div className="h-24 bg-gray-200 rounded-xl" />
                    <div className="h-24 bg-gray-200 rounded-xl" />
                </div>
            </div>

        </div>
    );
};

export default ProfileSkeleton;