'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, ArrowRight, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    try {
      // In a real implementation, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (inputName: string) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900/50 -z-10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-5" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl -z-5" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
            Let's Talk
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <motion.div 
                  className={`absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur-sm transition-opacity duration-300 ${
                    focusedInput === 'name' ? 'opacity-60' : 'opacity-0'
                  }`}
                  animate={{ 
                    opacity: focusedInput === 'name' ? 0.6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
              
              <div className="relative">
                <motion.div 
                  className={`absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur-sm transition-opacity duration-300 ${
                    focusedInput === 'email' ? 'opacity-60' : 'opacity-0'
                  }`}
                  animate={{ 
                    opacity: focusedInput === 'email' ? 0.6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
              
              <div className="relative">
                <motion.div 
                  className={`absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur-sm transition-opacity duration-300 ${
                    focusedInput === 'message' ? 'opacity-60' : 'opacity-0'
                  }`}
                  animate={{ 
                    opacity: focusedInput === 'message' ? 0.6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full overflow-hidden group bg-blue-600 text-white px-6 py-3.5 rounded-lg font-medium transition-colors disabled:opacity-70"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-blue-700 transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"
                  animate={{ x: isSubmitting ? "0%" : "-100%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform z-10">
                  {isSubmitting ? null : (
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                  )}
                </span>
                <span className="relative z-10 inline-flex items-center justify-center gap-2 group-hover:translate-x-[-10px] transition-transform">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -mt-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
              
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                >
                  <p className="text-green-700 dark:text-green-400 text-center font-medium">
                    Thanks for your message! I'll get back to you soon.
                  </p>
                </motion.div>
              )}
              
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                >
                  <p className="text-red-700 dark:text-red-400 text-center font-medium">
                    {submitError}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
          
          {/* Contact Info - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </span>
                Contact Information
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.a 
                  href="mailto:ayushaggarwal1136@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white font-medium">ayushaggarwal1136@gmail.com</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="tel:+11234567890" 
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-900 dark:text-white font-medium">+91 96250 76091</p>
                  </div>
                </motion.a>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg"
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white font-medium">Earth</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h3>
              <div className="space-y-3">
                <motion.a 
                  href="https://github.com/ayushaggarwal1" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors group"
                  whileHover={{ x: 3, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                >
                  <Github className="w-5 h-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/ayush-aggarwal-product-manager/" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors group"
                  whileHover={{ x: 3, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                >
                  <Linkedin className="w-5 h-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
                <motion.a 
                  href="mailto:ayushaggarwal1136@gmail.com" 
                  className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors group"
                  whileHover={{ x: 3, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                >
                  <Mail className="w-5 h-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors" />
                  <span className="font-medium">ayush.aggarwal1136@gmail.com</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 