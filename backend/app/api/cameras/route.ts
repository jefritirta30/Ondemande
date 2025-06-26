import { metadata } from '@/app/layout'
import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'

// service GET all cameras
export async function GET () {
  // dapatkan semua data camera
  const cameras = await prisma.camera.findMany()

  // kembalikan response JSON
  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: 'Kumpulan Data Camera',
        status: 200
      },
      data_camera: cameras
    },
    {
      status: 200
    }
  )
}

// service POST data camera
export const POST = async (request: NextRequest) => {
  const { nama_value, deskripsi_value, harga_value, gambar_value } =
    await request.json()

  // cek apakah nama camera sudah pernah dibuat atau belum
  const check = await prisma.camera.findMany({
    where: {
      nama: nama_value
    }
  })

  // jika data nama ditemukan
  if (check.length === 1) {
    return NextResponse.json(
      {
        MetaData: {
          error: 1,
          message: 'Data Nama Camera Telah Terdaftar',
          status: 409
        }
      },
      {
        status: 409
      }
    )
  }

  // simpan datanya
  const save = await prisma.camera.create({
    data: {
      nama: nama_value,
      deskripsi: deskripsi_value,
      harga: harga_value,
      gambar: gambar_value
    }
  })

  // proses atau response API
  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: 'Data camera berhasil disimpan',
        data: save,
        status: 201
      }
    },
    {
      status: 201
    }
  )
}
