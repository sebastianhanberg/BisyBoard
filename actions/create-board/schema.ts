import { z } from 'zod';

export const CreateBoard = z.object({
    title: z.string({
        required_error: 'Please enter a title',
        invalid_type_error: 'Please enter a title',
    }).min(3, {
        message: 'Title is to short.',
    }),
    image: z.string({
        required_error: 'Image is required',
        invalid_type_error: 'Image is required',
    }),
})
  
