'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import FormWrap from './FormWrap'
import Heading from '../dashboard/Heading'

const FormSchema = z.object({
  product_name: z.string().min(1, 'Profuct name is required').max(100),
  category: z.string().min(1, 'Category is required').max(100),
  username: z.string().min(1, 'Username is required').max(100),
})

const NewCategoryForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      product_name: '',
      category: '',
      username: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log(values)
  }

  return (
    <FormWrap>
      <Heading title="New Category Details" center />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-[800px] "
        >
          <div className="w-full ">
            <FormField
              control={form.control}
              name="product_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-yellow-700">
                    Product name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Example product"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-2 flex w-full flex-row gap-2">
            <div className="w-1/2  ">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-yellow-700">
                      Category
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="category name"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2  ">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-yellow-700">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="johndoe"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex w-1/4 pt-6">
            <Button
              className="w-full bg-slate-800 text-yellow-400 hover:bg-slate-500"
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </FormWrap>
  )
}

export default NewCategoryForm
