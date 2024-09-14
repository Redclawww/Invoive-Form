'use server'



import { FormSchemaType } from '@/components/component/form'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createInvoice(formData: FormSchemaType) {
    console.log('formData', formData);
    
  try {
    const user = await prisma.invoice.create({
      data: formData
    })
    return { success: true, user }
  } catch (error) {
    console.error('Failed to create user:', error)
    return { success: false, error: 'Failed to create user' }
  }
}