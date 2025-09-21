import React from 'react';
import { ArrowRight, Target, TrendingUp, Brain, Users } from 'lucide-react';

interface WelcomeSectionProps {
  onGetStarted: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms analyze your skills, interests, and personality to provide personalized recommendations.',
    },
    {
      icon: Target,
      title: 'Precise Career Matching',
      description: 'Get matched with careers that align perfectly with your unique profile and aspirations.',
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Stay updated with the latest job market trends, salary insights, and industry growth patterns.',
    },
    {
      icon: Users,
      title: 'Learning Pathways',
      description: 'Receive customized learning roadmaps to bridge skill gaps and accelerate your career growth.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Students Guided' },
    { number: '500+', label: 'Career Paths' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'AI Support' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Brain className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-800 mb-6 leading-tight">
          Your
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {' '}AI Career{' '}
          </span>
          Advisor
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Navigate your career journey with confidence. Our AI-powered platform provides personalized 
          career recommendations, skills mapping, and actionable learning pathways tailored specifically 
          for Indian students and professionals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onGetStarted}
            className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
          >
            <span>Start Your Assessment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button className="text-slate-600 hover:text-slate-800 px-8 py-4 font-semibold text-lg transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">{stat.number}</div>
            <div className="text-slate-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 text-center border border-blue-100">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Ready to Discover Your Ideal Career Path?
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Take our comprehensive assessment and unlock personalized career recommendations 
          powered by advanced AI technology.
        </p>
        <button
          onClick={onGetStarted}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Begin Assessment Now
        </button>
      </div>
    </div>
  );
};