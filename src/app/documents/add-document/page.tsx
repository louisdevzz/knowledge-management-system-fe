'use client';

import { NextPage } from "next";
import { useState, useRef } from "react";
import { categories } from "@/utils/categories";
import { FiUploadCloud, FiFile, FiUser, FiBookOpen, FiGrid, FiBook, FiHome } from 'react-icons/fi';

interface FormData {
    content: string;
    owner: string;
    category: string;
    department: string;
    description: string;
    university: string;
    addition?: Record<string, any>;
}

const AddDocument: NextPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [filePreview, setFilePreview] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        content: '',
        owner: '',
        category: '',
        department: '',
        description: '',
        university: '',
    });
    
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files[0]);
        }
    };

    const handleFiles = (selectedFile: File) => {
        setFile(selectedFile);
        if (selectedFile.type === 'application/pdf') {
            const fileUrl = URL.createObjectURL(selectedFile);
            setFilePreview(fileUrl);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            handleFiles(e.target.files[0]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const submitData = new FormData();
        if (file) {
            submitData.append('file', file);
        }
        Object.entries(formData).forEach(([key, value]) => {
            submitData.append(key, value);
        });

        try {
            console.log('Form submitted:', submitData);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Add New Document
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* File Upload Section */}
                            <div 
                                className={`relative border-2 border-dashed rounded-lg p-6 text-center
                                    ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
                                    transition-all duration-200 ease-in-out`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                />
                                
                                <FiUploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                                
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Select File
                                    </button>
                                    <p className="mt-2 text-sm text-gray-500">
                                        or drag and drop your file here
                                    </p>
                                </div>
                                
                                {file && (
                                    <div className="mt-4 text-sm text-gray-600">
                                        Selected file: {file.name}
                                    </div>
                                )}
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-4">
                                {/* <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                        <FiUser className="mr-2" /> Owner
                                    </label>
                                    <input
                                        type="text"
                                        name="owner"
                                        value={formData.owner}
                                        onChange={handleInputChange}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div> */}

                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                        <FiGrid className="mr-2" /> Category
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                        <FiBook className="mr-2" /> Department
                                    </label>
                                    <input
                                        type="text"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                        <FiHome className="mr-2" /> University
                                    </label>
                                    <input
                                        type="text"
                                        name="university"
                                        value={formData.university}
                                        onChange={handleInputChange}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                        <FiFile className="mr-2" /> Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Submit Document
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column - Preview */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Document Preview</h2>
                        {filePreview ? (
                            <div className="border rounded-lg overflow-hidden h-[calc(100vh-240px)]">
                                <iframe
                                    src={filePreview}
                                    className="w-full h-full"
                                    title="Document Preview"
                                />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-[calc(100vh-240px)] border-2 border-dashed border-gray-300 rounded-lg">
                                <div className="text-center text-gray-500">
                                    <FiFile className="mx-auto h-12 w-12 mb-4" />
                                    <p>Upload a document to preview</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDocument;