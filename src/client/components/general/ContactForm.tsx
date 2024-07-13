'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().min(2, {
    message: 'Email must be at least 2 characters.',
  }),
  subject: z.string().min(2, {
    message: 'Please enter a subject line',
  }),
  message: z.string().min(2, {
    message: 'Please enter a message',
  }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const [status, setStatus] = useState<string>('')
  const formRef = useRef<HTMLFormElement>(null)

  function onSubmit() {
    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID!,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text)
            setStatus('Message sent successfully!')
          },
          (error) => {
            console.log('FAILED...', error)
            setStatus('Error sending message.')
          }
        )
    }
  }

  return (
    <Card className="sm:p-8 bg-transparent border-none shadow-none">
      <CardHeader>
        <h3 className="m-0 font-semibold">SEND ME A MESSAGE</h3>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input className="max-w-80" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="max-w-80" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="pt-8">
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input className="max-w-96" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="pb-8">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea className="h-32" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter className="flex flex-col justify-center">
              <Button className="w-2/3" variant="secondary" type="submit">
                Send
              </Button>
              {status && (
                <p className="p-4 text-primary-foreground">{status}</p>
              )}
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
