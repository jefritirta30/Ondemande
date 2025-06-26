import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


// service GET detail data
export async function GET(request: NextRequest, props: {params: Promise<{id: string}>}){
    try {
     // get params id
     const params = await props.params
     
     // cek apakah id ada atau tidak
    const camera = await prisma.camera.findUnique({
        where: {
            id: Number(params.id),
        }
    })

    // jika data camera tidak ditemukan
    if(!camera){
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: 'Data Camera Tidak Ditemukan',
                    status: 404,
                }
            },
            {
                status: 404
            }
        )
    }

    // jika data produk ditemukan
    return NextResponse.json(
        {
            success: true,
            message: "Detail Data Produk",
            data: camera,
        }
    )

    } catch (e: any) {
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: 'Parameter slug harus angka!',
                    status: 400
                }
            },
            {
                status: 400
            }
        )
    }
}


// 
