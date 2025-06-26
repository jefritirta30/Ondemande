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


// service DELETE data camera
export const DELETE = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
    const params = await props.params

    // cek ketersediaan data 
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

    // delete data
    const deleteCamera = await prisma.camera.delete(
        {
            where: {
                id: Number(params.id)
            }
        }
    )

    // kembalikan response
    return NextResponse.json(
        {
            metaData: {
                error: 0,
                message: 'Data camera berhasil di hapus!',
                status: 200
            }
        },
        {
            status: 200
        }
    )
}

// service PUT data camera
export const PUT = async (request: NextRequest, props: { params: Promise<{ id: string }> }) => {
    const params = await props.params

    // validasi parameter
    if(isNaN(Number(params.id))) {
        return NextResponse.json(
            {
                metaData: {
                    error: 0,
                    message: 'Data camera berhasil di hapus!',
                    status: 200
                }
            },
            {
                status: 200
            }
        )
    }

    // cek apakah id ada
    const camera = await prisma.camera.findUnique(
        {
            where: {
                id: Number(params.id)
            }
        }
    )

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

    const { nama_value, deskripsi_value, harga_value, gambar_value } =
    await request.json()

    // cek apakah data nama camera sudah pernah ada
    const checkNamaCamera = await prisma.camera.findMany(
        {
            where: {
                nama: nama_value,
                NOT: { id: Number(params.id) }
            },
        }
    )

    // jika data nama camera ditemukan
    if (checkNamaCamera.length >= 1) {
      return NextResponse.json(
        {
          metaData: {
            error: 1,
            message: 'Data camera gagal diubah! nama telah terdaftar.',
            status: 409
          }
        },
        {
          status: 409
        }
      )
    }

    // fungsi edit data camera
    const edit = await prisma.camera.update(
        {
            where: {
                id: Number(params.id),
            },
            data: {
                nama: nama_value,
                deskripsi: deskripsi_value,
                harga: harga_value,
                gambar: gambar_value,
            }
        }
    )

    // kembalikan response
    return NextResponse.json(
        {
            metaData: {
                error: 0,
                message: 'Data camera berhasil di ubah!',
                status: 200,
                data: edit,
            }
        },
        {
            status: 200
        }
    )

}