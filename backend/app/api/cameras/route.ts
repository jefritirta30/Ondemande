import prisma from '@/prisma/client'
import { NextResponse } from 'next/server'

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


