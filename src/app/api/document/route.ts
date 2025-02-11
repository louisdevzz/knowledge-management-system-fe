export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        
        // Extract file and other form data
        const file = formData.get('file');
        const category = formData.get('category');
        const department = formData.get('department');
        const description = formData.get('description');
        const university = formData.get('university');

        // Log the received data
        console.log('Received document data:', {
            file: file instanceof File ? file.name : null,
            category,
            department,
            description,
            university
        });

        // Here you would typically process the file and save the data
        // For example, upload to cloud storage, save to database, etc.

        return new Response(JSON.stringify({ message: 'Document received successfully' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        console.error('Error processing document:', error);
        return new Response(JSON.stringify({ error: 'Failed to process document' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    }
}