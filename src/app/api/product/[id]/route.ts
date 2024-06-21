import { NextResponse } from "next/server";
import sofasData from "@/data/sofasData";

// console.log(sofasData);


export async function GET(request: Request, context: any) {
    const { params } = context;
    const { id } = params;

    console.log('Params:', params); // Check if params are correctly received
    console.log('SofasData:', sofasData); // Check if sofasData is correctly populated

    if (id) {
        const sofaId = parseInt(id, 10);
        const sofa = sofasData.find((sofa) => sofa.id === sofaId);

        if (sofa) {
            return NextResponse.json({ sofa });
        } else {
            console.log(`Sofa with ID ${id} not found`); // Log the error case
            return NextResponse.json({ error: 'Sofa not found' }, { status: 404 });
        }
    } else {
        console.log('Returning all sofas:', sofasData); // Log when returning all sofas
        return NextResponse.json({ sofas: sofasData });
    }
}
