import { NextPage } from "next";

const MyDocuments: NextPage = () => {
    return (
        <div className="p-5 flex flex-wrap gap-5 justify-center">
            {[1, 2, 3].map((doc) => (
                <div 
                    key={doc} 
                    className="bg-white border border-gray-200 rounded-xl p-5 w-[280px] text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                    <h2 className="mb-2">Document {doc}</h2>
                    <p className="text-gray-600">This is a description of document {doc}.</p>
                </div>
            ))}
        </div>
    )
}

export default MyDocuments;