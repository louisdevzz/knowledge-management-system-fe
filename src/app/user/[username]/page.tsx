'use client';
import { NextPage } from "next";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaCalendar, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const mockUserData = {
    name: "John Doe",
    bio: "Full-stack developer passionate about creating beautiful web experiences",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    joinedDate: "January 2024",
    github: "johndoe",
    twitter: "@johndoe",
    linkedin: "johndoe",
    avatarUrl: "/default-avatar.jpg",
    coverImage: "/cover-image.jpg",
    stats: {
        documents: 48,
        followers: 1234,
        following: 567
    }
};

const UserPage: NextPage = () => {
    const { username } = useParams();

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Cover Image */}
            <div className="h-80 relative overflow-hidden">
                <Image
                    src={mockUserData.coverImage}
                    alt="Cover"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                    {/* Profile Header */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        {/* Avatar */}
                        <div className="relative w-40 h-40">
                            <Image
                                src={mockUserData.avatarUrl}
                                alt={`${username}'s profile`}
                                fill
                                className="rounded-2xl object-cover border-4 border-white shadow-lg"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
                        </div>

                        {/* User Info */}
                        <div className="flex-1 text-center sm:text-left">
                            <h1 className="text-4xl font-bold text-gray-900">{mockUserData.name}</h1>
                            <p className="text-gray-500 mt-1">@{username}</p>
                            <p className="text-gray-700 mt-4 text-lg">{mockUserData.bio}</p>
                            
                            {/* Stats */}
                            <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">{mockUserData.stats.documents}</div>
                                    <div className="text-sm text-gray-500">Documents</div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Follow
                            </button>
                            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                Message
                            </button>
                        </div>
                    </div>

                    {/* User Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 border-t pt-8">
                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <FaMapMarkerAlt className="text-blue-500 text-xl" />
                            <span className="text-gray-700">{mockUserData.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <FaEnvelope className="text-blue-500 text-xl" />
                            <span className="text-gray-700">{mockUserData.email}</span>
                        </div>
                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <FaCalendar className="text-blue-500 text-xl" />
                            <span className="text-gray-700">Joined {mockUserData.joinedDate}</span>
                        </div>
                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <FaTwitter className="text-blue-500 text-xl" />
                            <span className="text-gray-700">{mockUserData.twitter}</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-8 justify-center sm:justify-start">
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <div className="space-y-6">
                            {/* Activity Items */}
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <FaGithub className="text-blue-500 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Created new document</h3>
                                    <p className="text-gray-500 text-sm">2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;