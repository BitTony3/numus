import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import FloatingMenu from '../components/FloatingMenu';
import { useTheme } from 'next-themes';
import BackButton from '../components/BackButton';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { theme } = useTheme();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the form data to a server
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-black to-green-900 text-white' : 'bg-gradient-to-b from-green-50 to-green-200 text-black'}`}>
      <FloatingMenu />
      <BackButton />
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold text-center text-green-400 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 bg-gray-800 text-white"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="mt-1 bg-gray-800 text-white"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <Textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="mt-1 bg-gray-800 text-white"
                rows={4}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
